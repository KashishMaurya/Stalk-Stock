import React from "react";

function Hero() {
  return (
    <div className="container mb-5">
      {/* head */}
      <div className="row mt-5 mb-5 text-center p-5 border-bottom">
        <h1 style={{ lineHeight: "60px" }}>Technology</h1>
        <h3 className="text-muted fs-5">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="mb-5">
          Check out our &nbsp;
          <a
            href="https://zerodha.com/investments"
            target="_blank"
            style={{ textDecoration: "none", lineHeight: "60px" }}
          >
            investment offerings &nbsp;
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
