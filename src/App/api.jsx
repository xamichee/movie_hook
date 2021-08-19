
const apiBase = 'https://api.themoviedb.org/3/';
const apiKey = '382c03696044ec7006f5212f1c181827';

export function getGuestKey() {
  let guestKey = (localStorage.getItem("guestKey"));
  if (!guestKey) {
    fetch(`${apiBase}authentication/guest_session/new?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((obj) => {
        localStorage.setItem("guestKey", obj.guest_session_id);
        guestKey = localStorage.getItem("guestKey");
      });
  }
  return guestKey;
}

export function rateMovie(value, id) {
  const guestKey = getGuestKey();
  fetch(`${apiBase}movie/${id}/rating?api_key=${apiKey}&guest_session_id=${guestKey}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify({
      value
    })
  });
}

export function getGenres() {
 return fetch(`${apiBase}genre/movie/list?api_key=${apiKey}&language=en-US`)
    .then((res) => res.json())
    .then((obj) => obj.genres);
}

export const setPage = (num, setCB1, setCB2, pageNo) => {
  const nextPage = Math.ceil(num / 2);
  if (Math.ceil(pageNo / 2) === nextPage) {
    setCB1(num);
    return;
  }
  setCB2(nextPage);
  setCB1(num);
}
