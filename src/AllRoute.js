import React from "react";
import { Route, Routes } from "react-router-dom";
import { MovieDetail, MovieLIst, PageNotFound, SearchMovie } from "./pages";

const AllRoute = () => {
  return (
    <div className="dark:bg-darkbg">

      <Routes>
        <Route path="/" element={<MovieLIst apiPath="/movie/now_playing" />} />
        <Route path="popular" element={<MovieLIst apiPath="/movie/popular" />} />
        <Route path="top-rated" element={<MovieLIst apiPath="/movie/top_rated" />} />
        <Route path="upcoming" element={<MovieLIst apiPath="/movie/now_playing" />} />
        <Route path="movie/:id" element={<MovieDetail apiPath="/movie" />} />
        <Route path="search" element={<SearchMovie apiPath="/search/movie"/>}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default AllRoute;
