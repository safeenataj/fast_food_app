import React, { useState } from "react";
import { menuItems } from "./data";
import Header from "./Header";
import MenuList from "./MenuList";
import OrderList from "./OrderList";
import ThemeToggle from "./ThemeToggle";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [order, setOrder] = useState([]);
  const [theme, setTheme] = useState("light");

  const addToOrder = (item) => {
    setOrder((prevOrder) => {
      const existingItem = prevOrder.find((orderItem) => orderItem.id === item.id);
      if (existingItem) {
        return prevOrder.map((orderItem) =>
          orderItem.id === item.id
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem
        );
      }
      return [...prevOrder, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id, delta) => {
    setOrder((prevOrder) =>
      prevOrder
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const calculateTotal = () =>
    order.reduce((total, item) => total + item.price * item.quantity, 0);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`container py-4 bg-${theme} text-${theme === "light" ? "dark" : "light"}`}>
      <Header />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <div className="row">
        <MenuList menuItems={menuItems} addToOrder={addToOrder} />
        <OrderList order={order} updateQuantity={updateQuantity} calculateTotal={calculateTotal} />
      </div>
    </div>
  );
};

export default App;
