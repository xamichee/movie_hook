export default class MovieApi {
  apiBase = 'https://api.themoviedb.org/3/';

  apiKey = '382c03696044ec7006f5212f1c181827';

  getGuestKey = () => {
    let guestKey = localStorage.getItem('guestKey');
    if (!guestKey) {
      fetch(`${this.apiBase}authentication/guest_session/new?api_key=${this.apiKey}`)
        .then((res) => res.json())
        .then((obj) => {
          localStorage.setItem('guestKey', obj.guest_session_id);
          guestKey = localStorage.getItem('guestKey');
        });
    }
    return guestKey;
  };

  getGenres = () =>
    fetch(`${this.apiBase}genre/movie/list?api_key=${this.apiKey}&language=en-US`)
      .then((res) => res.json())
      .then((obj) => obj.genres);

  searchMovies = (query, page) =>
    fetch(
      `${this.apiBase}search/movie?api_key=${this.apiKey}&language=en-US&query=${query}&page=${page}&include_adult=false`
    ).then((res) => res.json());

  getRated = (page) => {
    const guestKey = this.getGuestKey();
    return fetch(
      `${this.apiBase}guest_session/${guestKey}/rated/movies?api_key=${this.apiKey}&page=${page}&language=en-US&sort_by=created_at.asc}`
    ).then((res) => res.json());
  };

  rateMovie = (value, id) => {
    const guestKey = this.getGuestKey();
    fetch(`${this.apiBase}movie/${id}/rating?api_key=${this.apiKey}&guest_session_id=${guestKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        value,
      }),
    });
  };

  setPage = (num, setCB1, setCB2, pageNo) => {
    const nextPage = Math.ceil(num / 2);
    if (Math.ceil(pageNo / 2) === nextPage) {
      setCB1(num);
      return;
    }
    setCB2(nextPage);
    setCB1(num);
  };
}
