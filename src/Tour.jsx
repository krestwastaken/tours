import React from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{info}</p>
        <button
          className="btn btn-block delete-btn"
          type="button"
          onClick={() => removeTour(id)}
        >
          remove
        </button>
      </div>
    </article>
  );
};

export default Tour;
