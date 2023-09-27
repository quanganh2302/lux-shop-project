import React from "react";
import "./MenTemplate.scss";
const MenTemplate = (props) => {
  const { items } = props;
  const arrTemplate = [];
  for (let i = 0; i <= items; i++) {
    arrTemplate.push(i);
  }
  const width = 100 / items;
  return (
    <section className="men-template">
      {arrTemplate &&
        arrTemplate.length > 0 &&
        arrTemplate.map((item, index) => {
          return (
            <div
              key={index}
              className={`template-item${index}`}
            >
              FREE SHIPPING W/ MINIMUM PURCHASE
            </div>
          );
        })}
    </section>
  );
};

export default MenTemplate;
