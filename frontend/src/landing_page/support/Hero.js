import React from "react";

function Hero() {
  return (
    <section className="container-fluid p-5" id="supportHero">
      <div id="supportWrapper">
        <h4>Support Portal</h4>
        <a
          href="https://kite.zerodha.com/connect/login?api_key=supportportal&sess_id=zPNi11vNNfEs3Zy5jDE8dcUDk6K8IVBp"
          target="_blank"
        >
          Track tickets
        </a>
      </div>

      <div className="row p-5">
        <div className="col-7 " id="wrapperLeft">
          <h4>Search for an answer or browse help topics to create a ticket</h4>
          <input placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."></input>
          <br />
          <a href="https://zerodha.com/open-account" target="_blank">
            Track account opening
          </a>
          <a
            href="https://kite.zerodha.com/connect/login?api_key=console&sess_id=o5cR7qcnc7mlM4K37Ecg5juzbuFR1M9Y"
            target="_blank"
          >
            Track segment activation
          </a>
          <a
            href=" https://zerodha.com/marketintel/bulletin/249809/latest-intraday-leverages-mis-bo-co"
            target="_blank"
          >
            Intraday margins
          </a>
          <br />
          <a href="https://kite.trade/docs/kite/" target="_blank">
            Kit user manual
          </a>
        </div>

        <div className="col-5 " id="wrapperRight">
          <h4>Featured</h4>
          <ol>
            <li>
              <a
                href="https://zerodha.com/marketintel/bulletin/392076/suspension-of-trading-idfc-limited"
                target="_blank"
              >
                Suspension of trading - IDFC Limited
              </a>
            </li>
            <li>
              <a
                href="https://zerodha.com/marketintel/bulletin/391893/rights-entitlements-listing-in-october-2024"
                target="_blank"
              >
                Rights Entitlements isting in October 2024
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
