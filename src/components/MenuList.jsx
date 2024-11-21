import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ menuItems, addToOrder }) => {
  return (
    <div className="col-md-6">
      <h3>Menu</h3>
      <div className="row">
        {menuItems.map((item) => (
          <div className="col-md-4" key={item.id}>
            <MenuItem item={item} addToOrder={addToOrder} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuList;
