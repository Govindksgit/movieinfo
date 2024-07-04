import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    };
    fetchMovie();
  }, [url]);
  console.log(data);
  return { data };
};

export default useFetch;
