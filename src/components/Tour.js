import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Tour = ({ id, image, info, price, name , removeTour}) => {
  const [readMore, setReadmore] = useState(false);

  const more = () => {
    setReadmore(!readMore)
  };
  return (
    <article
      className="card my-5 container p-0 shadow-lg rounded"
      style={{ maxWidth: "40rem" }}
    >
      <img
        className="card-img-top"
        style={{ maxHeight: "25rem", objectFit:"cover"}}
        src={image}
        alt={name}
      />
      <footer>
        <div className="card-body">
          <div className="my-3 d-flex justify-content-between align-items-center">
            <h4 className="card-title">{name}</h4>
            <h4 className="card-title bg-info text-white px-3">${price}</h4>
          </div>
          <p className="card-text text-muted ">
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button className="btn text-primary" onClick={more}>
              {readMore? "Show less" : "Read more"}
            </button>
          </p>

          <div className="text-center">
            <button className=" btn btn-outline-danger" onClick={() => removeTour(id)}>Not Interested</button>
          </div>
        </div>
      </footer>
    </article>
  );
};

export default Tour;
