import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container-custom container">
        <hr style={{ marginTop: "50px", marginBottom: "20px" }} />
        <div
          className="footer-content d-flex align-items-center mb-4"
          style={{ gap: "100px" }}
        >
          <div className="logo">
            <h2>LOGO</h2>
          </div>
          <div className="links d-flex" style={{ gap: "20px" }}>
            <a
              style={{
                color: "#425486",
                fontWeight: "13px",
                cursor: "pointer",
              }}
            >
              Imprint
            </a>
            <a
              style={{
                color: "#425486",
                fontWeight: "13px",
                cursor: "pointer",
              }}
            >
              Terms of use
            </a>
            <a
              style={{
                color: "#425486",
                fontWeight: "13px",
                cursor: "pointer",
              }}
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
