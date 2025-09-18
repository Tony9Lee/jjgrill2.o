import React, { useState } from "react";
import Menu from "./data";
import "./OrderOnline.css";

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["all", "breakfast", "lunch", "sides", "drinks"];

  const filteredItems = Menu.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  return (
    <div className="menu-page">
      {/* Category buttons */}
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={activeCategory === category ? "active" : ""}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Menu items */}
      <div className="menu-items">
        {filteredItems.map((item) => (
          <div key={item.id} className="menu-item">
            {/* Title + image */}
            <div className="menu-header">
              {item.img && (
                <img
                  src={item.img}
                  alt={item.title}
                  className="menu-item-img"
                />
              )}
              <div className="menu-text">
                <h2 className="menu-title">{item.title}</h2>
              </div>
            </div>

            {/* Sub-items list */}
            {item.subItems && (
              <ul className="subitems-list">
                {item.subItems.map((sub, idx) => (
                  <li key={idx} className="subitem">
                    <span className="subitem-name">{sub.name}</span>
                    <span className="subitem-price">
                      ${Number(sub.price).toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {/* Items with direct price (like Hot Dog) */}
            {!item.subItems && item.price && (
              <p className="menu-price">{item.price}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
