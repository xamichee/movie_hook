import React, {useState, useEffect} from "react";

const RatedPage = () => {
  const [ratedMoviesFull, setRatedMoviesFull] = useState([]);
  const [totalRated, setTotalRated] = useState(null);
  const [ratedPage, setRatedPage] = useState(1);
  const [activeRatedPage, setActiveRatedPage] = useState(1);

  useEffect(() => {
      setLoading(true);
      getRated(ratedPage)
        .then((obj) => {
          setRatedPage(obj.page);
          setTotalRated(obj.total_results);
          setRatedMoviesFull(obj.results);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
          setError("Не удалось загрузить фильмы.");
        });

  }, [input]);



  return (
    <div>

    </div>
  );
};

export default RatedPage;
