import React from "react";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";

export const MovieDetail = ({ apiPath }) => {
  const {
    REACT_APP_MOVIE_BASE_URL: MOVIE_BASE_URL,
    REACT_APP_API_KEY: API_KEY,
  } = process.env;
  const { id } = useParams();

  const url = `${MOVIE_BASE_URL}${apiPath}/${id}?${API_KEY}`;
  const { data } = useFetch(url);
  const {
    genres,
    title,
    overview,
    poster_path,
    release_date,
    vote_average,
    vote_count,
    runtime,
    budget,
    revenue,
    imdb_id,
  } = data;
  const image = `${process.env.REACT_APP_IMAGE_PATH}${poster_path}`;
  useTitle(title)
  return (
    <main>
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-sm">
          <img className="rounded" src={image} alt={title} />
        </div>
        <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
          <h1 className="text-4xl font-bold my-3 text-center lg:text-left">
            {title}
          </h1>
          <p className="my-4">{overview}</p>
          {genres ? (
            <p className="my-7 flex flex-wrap gap-2">
              {genres.map((genre) => (
                <span
                  className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2"
                  key={genre.id}
                >
                  {genre.name}
                </span>
              ))}
            </p>
          ) : (
            ""
          )}

          <div className="flex items-center">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Rating star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <p className="ml-2 text-gray-900 dark:text-white">{vote_average}</p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span className="text-gray-900 dark:text-white">
              {vote_count} reviews
            </span>
          </div>

          <p className="my-4">
            <span className="mr-2 font-bold">Runtime:</span>
            <span>{runtime} min.</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">Budget:</span>
            <span>{budget}</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">Revenue:</span>
            <span>{revenue}</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">Release Date:</span>
            <span>{release_date}</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">IMDB Code:</span>
            <a
              href={`https://www.imdb.com/title/${imdb_id}`}
              target="_blank"
              rel="noreferrer"
            >
              {imdb_id}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};
