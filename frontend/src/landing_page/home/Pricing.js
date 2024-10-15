import React from "react";

function Pricing() {
  return (
    <div className="container">
      <div className="row">
        {/* text */}
        <div className="col-4 mt-5 mb-5">
          <h1 className="mb-3">Unbeatable pricing</h1>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a
            href="https://zerodha.com/charges/#tab-equities"
            style={{ textDecoration: "none" }}
            target="_blank"
          >
            See pricing <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        {/* blank space */}
        <div className="col-2"></div>

        {/* table */}
        <div className="col-6 mt-5 mb-5">
          <div className="row text-center">
            <div className="col p-2 border">
              <h1 className="mb-2 mt-3">₹0</h1>
              <p>
                Free equity delivery and <br />
                direct mutual funds
              </p>
            </div>
            <div className="col p-2 border">
              <h1 className="mb-2 mt-4">₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;