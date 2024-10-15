import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center mb-5">
        <h1 className="fs-2 mb-4">The Zerodha Universe</h1>
        <p className="mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        {/* row1 */}
        <div className="col-4 p-3">
          {/* 1 */}
          <div className="mb-5">
            <img
              src="/Images/zerodhaFundhouse.png"
              style={{ width: "60%" }}
              className="mb-3"
            />
            <p>
              <a
                href="https://www.zerodhafundhouse.com/"
                className="text-muted"
                target="_blank"
                style={{ textDecoration: "none", fontSize: "13px" }}
              >
                Our asset management venture that is creating simple and
                transparent index funds to help you save for your goals.
              </a>
            </p>
          </div>

          {/* 2 */}
          <div className="mb-5">
            <img
              src="/Images/streakLogo.png"
              style={{ width: "50%" }}
              className="mb-3"
            />
            <p>
              <a
                href="https://www.streak.tech/home"
                className="text-muted "
                target="_blank"
                style={{ textDecoration: "none", fontSize: "13px" }}
              >
                Systematic trading platform that allows you to create and
                backtest strategies without coding.
              </a>
            </p>
          </div>
        </div>

        {/* row2 */}
        <div className="col-4 p-3">
          {/* 1 */}
          <div className="mb-5">
            <img
              src="/Images/sensibullLogo.svg"
              style={{ width: "70%" }}
              className="mb-4"
            />
            <p>
              <a
                href="https://sensibull.com/"
                className="text-muted"
                target="_blank"
                style={{ textDecoration: "none", fontSize: "13px" }}
              >
                Options trading platform that lets you create strategies,
                analyze positions, and examine data points like open intrests,
                FII/DII, and more.
              </a>
            </p>
          </div>

          {/* 2 */}
          <div className="mb-5">
            <img src="/Images/smallcaseLogo.png" className="mb-2" />
            <p>
              <a
                href="https://smallcase.zerodha.com/"
                className="text-muted"
                target="_blank"
                style={{ textDecoration: "none", fontSize: "13px" }}
              >
                Thematic investing platform that helps you invest in diversified
                baskets of stocks on ETFs.
              </a>
            </p>
          </div>
        </div>

        {/* row3 */}
        <div className="col-4 p-3">
          {/* 1 */}
          <div className="mb-5">
            <img
              src="/Images/goldenpiLogo.png"
              style={{ width: "60%" }}
              className="mb-3"
            />
            <p>
              <a
                href="https://www.tijorifinance.com/features/"
                className="text-muted"
                target="_blank"
                style={{ textDecoration: "none", fontSize: "13px" }}
              >
                Investment research platform that offerss detailed insignts on
                stocks, sectors, supply chains, and more.
              </a>
            </p>
          </div>

          {/* 2 */}
          <div className="mb-5">
            <img
              src="/Images/dittoLogo.png"
              style={{ width: "40%" }}
              className="mb-3"
            />
            <p>
              <a
                href="https://joinditto.in/"
                className="text-muted"
                target="_blank"
                style={{ textDecoration: "none", fontSize: "13px" }}
              >
                Personalized advice on life and health insurance. No spam and no
                mis-selling.
              </a>
            </p>
          </div>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5 "
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
