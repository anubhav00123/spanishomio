import React from "react";

const TextCard = ({ imageSrc, title, items }) => {
  return (
    <>
      <div className="card-content">
        <img src={imageSrc} />
        <h5 className="mt-3" style={{ fontWeight: "600" }}>
          {title}
        </h5>
        {items.map((item, index) => (
          <p className="card-para" key={index}>
            {item}
          </p>
        ))}
      </div>
    </>
  );
};

export default TextCard;
