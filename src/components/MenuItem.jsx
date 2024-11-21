import React from "react";

const MenuItem = ({ item, addToOrder }) => {
  return (
    <div className="card mb-3">
      <img src={item.image} alt={item.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.description}</p>
        <p className="card-text">SEK {item.price.toFixed(2)}</p>
        <button className="btn btn-primary" onClick={() => addToOrder(item)}>
          Add to Order
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
