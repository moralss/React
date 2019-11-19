import React from "react";

const Section = () => {
  return (
    <div>
      <h2>Bem</h2>
      <div className="card">
        <h1 className="card__header"> My card</h1>
        <p className="card__body">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam eius,
          sit exercitationem atque delectus magni?{" "}
        </p>
      </div>
      <div className="card card--dark">
        <h1 className="header"> My card</h1>
        <p className="para">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam eius,
          sit exercitationem atque delectus magni?{" "}
        </p>
      </div>
    </div>
  );
};

export default Section;
