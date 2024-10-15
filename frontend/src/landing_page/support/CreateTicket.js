import React from 'react';

function CreateTicket() {
    return (
      <div className="container">
        <h3 className="text-muted mt-5 mb-5">
          To create a ticket, select a relevant topic
        </h3>

        {/* row1 */}
        <div className="row mb-5">
          {/* col1 */}
          <div className="col-4 " style={{ lineHeight: "35px" }}>
            <h4 className="mb-4">
              <i class="fa-solid fa-circle-plus"></i> &nbsp; Account Opening
            </h4>
            <div style={{ marginLeft: "30px" }}>
              <a
                href="https://support.zerodha.com/category/account-opening/getting-started"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Getting started
              </a>
              <br />
              <a
                href="https://support.zerodha.com/category/account-opening/getting-started"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Online
              </a>
              <br />
              <a
                href="https://support.zerodha.com/category/account-opening/offline-account-opening"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Offline
              </a>
              <br />
              <a
                href="https://support.zerodha.com/category/account-opening/charges-at-zerodha"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Charges
              </a>
              <br />
              <a
                href="https://support.zerodha.com/category/account-opening/company-partnership-and-huf-account-opening"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Company, Partnership and HUF
              </a>
              <br />
              <a
                href="https://support.zerodha.com/category/account-opening/nri-account-opening"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Non Resident Indian (NRI)
              </a>
            </div>
          </div>

          {/* col-2 */}
          <div className="col-4" style={{ lineHeight: "35px" }}>
            <h4 className="mb-4">
              <i class="fa-solid fa-user"></i> &nbsp; Your Zerodha Account
            </h4>
            <div style={{ marginLeft: "30px" }}>
              <a href="Trading and Markets" style={{ textDecoration: "none" }}>
                Login credentials
              </a>
              <br />
              <a
                href="https://support.zerodha.com/category/your-zerodha-account/your-profile"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Your Profile
              </a>
              <br />
              <a
                href="https://https://support.zerodha.com/category/your-zerodha-account/account-modification-and-segment-addition"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Account modification and segment addition
              </a>
              <br />
              <a
                href="https://https://support.zerodha.com/category/your-zerodha-account/dp-id-and-bank-details"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                CMR & DP ID
              </a>
              <br />
              <a
                href="https://https://support.zerodha.com/category/your-zerodha-account/nomination-process"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Ninimation
              </a>
              <br />
              <a
                href="https://https://support.zerodha.com/category/your-zerodha-account/transfer-of-shares-and-conversion-of-shares"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Transfer and conversion of shares
              </a>
            </div>
          </div>

          {/* col-3 */}
          <div className="col-4" style={{ lineHeight: "35px" }}>
            <h4 className="mb-4">
              <i class="fa-solid fa-chart-column"></i> &nbsp; Trading and
              Markets
            </h4>
            <div style={{ marginLeft: "30px" }}>
              <a
                href="https://support.zerodha.com/category/trading-and-markets/trading-faqs"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Trading FAQs
              </a>
              <br />
              <a
                href="https://support.zerodha.com/category/trading-and-markets/kite-web-and-mobile"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Kite
              </a>
              <br />
              <a
                href="https://support.zerodha.com/category/trading-and-markets/margins"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Margins
              </a>
              <br />
              <a
                href="https://support.zerodha.com/category/trading-and-markets/product-and-order-types"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Product and order types
              </a>
              <br />
              <a
                href="https://support.zerodha.com/category/trading-and-markets/corporate-actions"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Corporate actions
              </a>
              <br />
              <a
                href="https://support.zerodha.com/category/trading-and-markets/kite-features"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Kite features
              </a>
            </div>
          </div>
        </div>

        {/* row2 */}
        <div className="row mb-5">
          {/* col1 */}
          <div className="col-4 " style={{ lineHeight: "35px" }}>
            <h4 className="mb-4">
              <i class="fa-solid fa-wallet"></i> &nbsp; Funds
            </h4>
            <div style={{ marginLeft: "30px" }}>
              <a
                href="https://support.zerodha.com/category/funds/fund-withdrawal"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Funds withdrawal
              </a>
              <br />
              <a
                href="https://support.zerodha.com/category/funds/adding-funds"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Adding funds
              </a>
              <br />
              <a
                href="https://support.zerodha.com/category/funds/adding-bank-accounts"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Adding bank accounts
              </a>
              <br />
              <a
                href="https://support.zerodha.com/category/mandate"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                eMandates
              </a>
            </div>
          </div>

          {/* col-2 */}
          <div className="col-4" style={{ lineHeight: "35px" }}>
            <h4 className="mb-4">
              <i class="fa-solid fa-circle-dot"></i> &nbsp; Console
            </h4>
            <div style={{ marginLeft: "30px" }}>
              <a
                href="https://support.zerodha.com/category/console/ipo"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                IPO
              </a>
              <br />
              <a
                href="https://support.zerodha.com/category/portfolio"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Portfolio
              </a>
              <br />
              <a
                href="https://https://support.zerodha.com/category/ledger"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Funds statement
              </a>
              <br />
              <a
                href="https://https://support.zerodha.com/category/profile"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Profile
              </a>
              <br />
              <a
                href="https://https://support.zerodha.com/category/reports"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Reports
              </a>
              <br />
              <a
                href="https://https://support.zerodha.com/category/referral-program"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Referral program
              </a>
            </div>
          </div>

          {/* col-3 */}
          <div className="col-4" style={{ lineHeight: "35px" }}>
            <h4 className="mb-4">
              <i class="fa-solid fa-circle-notch"></i> &nbsp; Coin
            </h4>
            <div style={{ marginLeft: "30px" }}>
              <a
                href="https://support.zerodha.com/category/mutual-funds/understanding-mutual-funds"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Understanding mutual funds and Coin
              </a>
              <br />
              <a
                href="https://support.zerodha.com/category/mutual-funds/coin-app"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Coin app
              </a>
              <br />
              <a
                href="https://support.zerodha.com/category/mutual-funds/coin-web"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Coin web
              </a>
              <br />
              <a
                href="https://support.zerodha.com/category/mutual-funds/transaction-and-reports"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Transactions and reports
              </a>
              <br />
              <a
                href="https://support.zerodha.com/category/mutual-funds/nps"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                National Pension Scheme (NPS)
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default CreateTicket;