import React, { useState } from "react";
import { MovieLIst } from "./MovieLIst";
import { useSearchParams } from "react-router-dom";

export const SearchMovie = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const [searchData , setSearchData] = useState([])
  const queryTerm = searchParams.get("q");
  const getMovieData = (res) => {
  setSearchData(res)
   
  };


  return (
    <>
     <main>
        <section className="max-w-7xl mx-auto py-7">
          <p className="text-3xl text-grey-700">{searchData?.length ? `Results for ${queryTerm}` : "No Result found"}</p>
        </section>
        </main>

      <MovieLIst
        apiPath={apiPath}
        query={queryTerm}
        getMovieData={getMovieData}
      />
    </>
  );
};
