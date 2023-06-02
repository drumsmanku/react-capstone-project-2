import axios from 'axios';
import React, { useEffect, useState } from 'react';


function Row({ title, fetchurl, isLargeRow=false }) {
  const[movies,setMovies]= useState([]);
  const base_url="https://image.tmdb.org/t/p/original/"

  useEffect(()=>{
    async function fetchData(){
      const request=await axios.get(fetchurl);
      setMovies(request.data.results);
      return request;

    }
    fetchData();

  }, [fetchurl])
  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className="row__posters">
       {movies.map((movie) =>
        ((isLargeRow && movie.poster_path) || 
           (!isLargeRow && movie.backdrop_path)) && (
             <img
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              key={movie.id}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`} 
              alt={movie.name}
             />
          )
        )}

      </div>
      
    </div>
  );
}

export default Row;