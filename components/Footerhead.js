import React from "react";

const Footerhead = () => {
  return (
    <>
      <div className="container container-custom">
        <hr style={{ marginTop: "50px", marginBottom: "50px" }} />

        <div className="row">
          <div className="col-md-4">
            <div className="card-content popular">
              <h5 className="mt-4" style={{ fontWeight: "600" }}>
                About us
              </h5>
              <p>About us</p>
              <p>Partners</p>
              <p>Press</p>
            </div>
            <button className="transparent-btn">Contact</button>
          </div>
          <div className="col-md-4">
            <div className="card-content popular">
              <h5 className="mt-3" style={{ fontWeight: "600" }}>
                Your Trip
              </h5>
              <p>Home</p>
              <p>App</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-content popular">
              <h5 className="mt-3" style={{ fontWeight: "600" }}>
                Jobs & Career
              </h5>
            </div>
            <button className="transparent-btn">We are hiring!</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footerhead;
