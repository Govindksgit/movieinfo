import Card from "../../components/Card";
import useFetch from "../../hooks/useFetch";
import { useTitle } from "../../hooks/useTitle";

export const MovieLIst = ({ apiPath, query = "", getMovieData = () => {} }) => {
  const {
    REACT_APP_MOVIE_BASE_URL: MOVIE_BASE_URL,
    REACT_APP_API_KEY: API_KEY,
  } = process.env;
  let url;
  if (query) {
    url = `${MOVIE_BASE_URL}${apiPath}?query=${query}&${API_KEY}`;
  } else {
    url = `${MOVIE_BASE_URL}${apiPath}?${API_KEY}`;
  }

  const { data } = useFetch(url);
  const movieData = data?.results
  useTitle("ONLY MDB")
  getMovieData && getMovieData(movieData);
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movieData?.map((res) => (
            <Card key={res.id} movie={res} />
          ))}
        </div>
      </section>
    </main>
  );
};
