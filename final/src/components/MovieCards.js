import React from "react";
import "../App.css";

const MovieCard = ({ data }) => {
  return (
    <div>
      <ul>
        <li className="movies-li">
          <h2>{data.id}</h2>
          <h3>{data.title}</h3>
          <img src={data.image} alt={data.title} />
          <p>{"Description:"}</p>
          <p>{data.description}</p>
          <p>{"rating: " + data.rating}</p>
          <p>{"Year: " + data.year}</p>
        </li>
      </ul>
    </div>
  );
};

export default MovieCard;