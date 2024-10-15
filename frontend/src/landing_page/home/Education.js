import React from "react";

function Education() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        {/* image */}
        <div className="col-6">
          <img
            src="/Images/education.svg"
            alt="education"
            style={{ width: "80%" }}
          />
        </div>

        {/* text */}
        <div className="col-6 mt-5 mb-5">
          <h3 className="mb-4">Free and open market education</h3>
          <p className="text-muted">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a
            href="https://zerodha.com/varsity/"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            Varsity <i class="fa-solid fa-arrow-right"></i>
          </a>
          <br />
          <br />

          <p className="text-muted">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a
            href="https://tradingqna.com/"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            TradingQ&A <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
