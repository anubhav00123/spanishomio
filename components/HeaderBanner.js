import React from "react";

const HeaderBanner = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: 'url("/images/headerbanner.svg")',
          height: "340px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container-custom container banner-content">
          <h3>How can we help?</h3>
          <h6>Customer Help Center</h6>
          <button className="theme-btn">Retrieve your booking</button>
        </div>
      </section>
    </>
  );
};

export default HeaderBanner;
