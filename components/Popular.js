import React from "react";

const Popular = () => {
  return (
    <>
      <div className="container container-custom mt-5 ">
        <h2 style={{ fontWeight: "600" }}>Popular Countries</h2>
        <div className="row">
          <div className="col-md-3 popular mt-4">
            <p>Travel to Italy</p>
            <p>Travel to United Kingdom</p>
            <p>Travel to Netherlands</p>
          </div>
          <div className="col-md-3 popular mt-4">
            <p>Travel to Switzerland</p>
            <p>Travel to Germany</p>
            <p>Travel to United States</p>
          </div>
          <div className="col-md-3 popular mt-4">
            <p>Travel to Portugal</p>
            <p>Travel to Sweden</p>
            <p>Travel to France</p>
          </div>
          <div className="col-md-3 popular mt-4">
            <p>Travel to Austria</p>
            <p>Travel to Indonesia</p>
            <p>Travel to Czechia</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popular;
