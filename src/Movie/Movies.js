import React from 'react'

export default function Movies(props) {
  console.log(props);
  return (
    <li>
        <h2>{props.title}</h2>
        <h2>
            {props.releaseDate}
        </h2>
        <p>{props.openingText}</p>
      
    </li>
  )
}
