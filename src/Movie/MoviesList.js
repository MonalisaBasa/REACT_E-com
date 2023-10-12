import React from 'react'
import Movies from './Movies'

export default function MoviesList(props) {
  console.log(props);
  return (
    <ul>
        {props.movies.map((movie)=>{
          // console.log("Hi");
           return ( <Movies 
            title={movie.title}
            releaseDate={movie.releaseDate}
            openingText={movie.openingText}
            />)
        })}
      
    </ul>
  );
};
