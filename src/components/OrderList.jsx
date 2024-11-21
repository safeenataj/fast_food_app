import React from "react";

const OrderList = ({ order, updateQuantity, calculateTotal }) => {
  return (
    <div className="col-md-6">
      <h3>Your Order</h3>
      {order.length === 0 ? (
        <p>No items in your order yet.</p>
      ) : (
        <ul className="list-group">
          {order.map((item) => (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {item.name} x {item.quantity} - SEK {(item.price * item.quantity).toFixed(2)}
              <div>
                <button
                  className="btn btn-sm btn-secondary mx-1"
                  onClick={() => updateQuantity(item.id, -1)}
                >
                  -
                </button>
                <button
                  className="btn btn-sm btn-secondary mx-1"
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  +
                </button>
              </div>
            </li>
          ))}
          <li className="list-group-item">
            <strong>Total:</strong> SEK {calculateTotal().toFixed(2)}
          </li>
        </ul>
      )}
    </div>
  );
};

export default OrderList;
