import React from "react";

function Awards() {
  return (
    <div className="container mb-5">
      <div className="row">
        {/* img */}
        <div className="col-6 p-5">
          <img src="/Images/largestBroker.svg" alt="Startup of the year 2020" />
        </div>

        {/* text */}
        <div className="col-6 p-5">
          <h1>Largest stock broker in India</h1>
          <p className="mb-4">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in :
          </p>
          <div className="row mb-3">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="/Images/pressLogos.png" alt="press_logos" style={{width: "90%"}}/>
        </div>
      </div>
    </div>
  );
}

export default Awards;






