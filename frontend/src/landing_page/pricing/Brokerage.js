import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row text-center mb-5">
        <h5>
          <a
            href="https://zerodha.com/brokerage-calculator#tab-equities"
            style={{ textDecoration: "none" }}
            target="_blank"
          >
            Calculate your costs upfront
          </a>
          &nbsp; using our brokerage calculator
        </h5>
      </div>

      <div className="row mb-5 mt-5">
        <h3>Charges explained</h3>
      </div>

      <div className="row mb-5">
        <div className="col-6">
          {/* 1 */}
          <div>
            <h5 className="fs-6 text-muted">
              Securities/Commodities transaction tax
            </h5>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy and sell sides when trading equity delivery.
              Charged only on selling side when trading intraday or on F&O.
            </p>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              When trading at Zerodha, STT/CTT can be a lot more than the
              brokerage we charge. Important to keep a tab.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h5 className="fs-6 text-muted">Transaction/Turnover Charges</h5>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              Charged by exchanges (NSE, BSE, MCX) on the value of your
              transactions.
            </p>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
              to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
              merged into a new group X w.e.f 01.12.2017)
            </p>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              BSE has revised transaction charges in SS and ST groups to
              ₹1,00,000 per crore of gross turnover.
            </p>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              BSE has revised transaction charges for group A, B and other non
              exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
              W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
              December 1, 2022.
            </p>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              BSE has revised transaction charges in M, MT, TS and MS groups to
              ₹275 per crore of gross turnover.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h5 className="fs-6 text-muted">Call & trade</h5>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              Additional charges of ₹50 per order for orders placed through a
              dealer at Zerodha including auto square off orders.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h5 className="fs-6 text-muted">Stamp charges</h5>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              Stamp charges by the Government of India as per the Indian Stamp
              Act of 1899 for transacting in instruments on the stock exchanges
              and depositories.
            </p>
          </div>
          {/* 5 */}
          <div>
            <h5 className="fs-6 text-muted">NRI brokerage charges</h5>
            <ul className="text-muted mt-3" style={{ fontSize: "13px" }}>
              <li>₹100 per order for futures and options.</li>
              <li>
                For a non-PIS account, 0.5% or ₹100 per executed order for
                equity (whichever is lower).
              </li>
              <li>
                For a PIS account, 0.5% or ₹200 per executed order for equity
                (whichever is lower).
              </li>
              <li>
                ₹500 + GST as yearly account maintenance charges (AMC) charges.
              </li>
            </ul>
          </div>
          {/* 6 */}
          <div>
            <h5 className="fs-6 text-muted">Account with debit balance</h5>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h5 className="fs-6 text-muted">
              Charges for Investor's Protection Fund Trust (IPFT) by NSE
            </h5>
            <ul className="text-muted mt-3" style={{ fontSize: "13px" }}>
              <li>
                Equity and Futures - ₹10 per crore + GST of the traded value.
              </li>
              <li>
                Options - ₹50 per crore + GST traded value (premium value).
              </li>
              <li>
                Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2
                per lakh + GST of premium for Options.
              </li>
            </ul>
          </div>
        </div>

        <div className="col-6">
          {/* 1 */}
          <div>
            <h5 className="fs-6 text-muted">GST</h5>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              Tax levied by the government on the services rendered. 18% of (
              brokerage + SEBI charges + transaction charges)
            </p>
          </div>

          {/* 2 */}
          <div>
            <h5 className="fs-6 text-muted">SEBI Charges</h5>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              Charged at ₹10 per crore + GST by Securities and Exchange Board of
              India for regulating the markets.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h5 className="fs-6 text-muted">
              DP (Depository participant) charges
            </h5>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              ₹13 + GST per scrip (irrespective of quantity), on the day, is
              debited from the trading account when stocks are sold. This is
              charged by the depository (CDSL) and depository participant
              (Zerodha).
            </p>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              Female demat account holders (as first holder) will enjoy a
              discount of ₹0.25 per transaction.
            </p>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              Debit transactions of mutual funds & bonds get an additional
              discount of ₹0.25.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h5 className="fs-6 text-muted">Pledging charges</h5>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              ₹30 + GST per pledge request per ISIN.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h5 className="fs-6 text-muted">
              AMC (Account maintenance charges)
            </h5>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              For BSDA demat account: Zero charges if the holding value is less
              than ₹4,00,000. To learn more about BSDA, Click here
            </p>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
              (90 days). To learn more about AMC, Click here
            </p>
          </div>

          {/* 6 */}
          <div>
            <h5 className="fs-6 text-muted">Corporate action order charges</h5>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              ₹20 plus GST will be charged for OFS / buyback / takeover /
              delisting orders placed through Console.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h5 className="fs-6 text-muted">Off-market transfer charges</h5>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              ₹25 or 0.03% of the transfer value (whichever is higher).
            </p>
          </div>

          {/* 8 */}
          <div>
            <h5 className="fs-6 text-muted">Physical CMR request</h5>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST
              for subsequent requests.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h5 className="fs-6 text-muted">Payment gateway charges</h5>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              ₹9 + GST (Not levied on transfers done via UPI)
            </p>
          </div>

          {/* 10 */}
          <div>
            <h5 className="fs-6 text-muted">Delayed Payment Charges</h5>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              Interest is levied at 18% a year or 0.05% per day on the debit
              balance in your trading account. Learn more.
            </p>
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <h5 className="fs-6 text-muted">Disclaimer</h5>
        <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
          For Delivery based trades, a minimum of ₹0.01 will be charged per
          contract note. Clients who opt to receive physical contract notes will
          be charged ₹20 per contract note plus courier charges. Brokerage will
          not exceed the rates specified by SEBI and the exchanges. All
          statutory and regulatory charges will be levied at actuals. Brokerage
          is also charged on expired, exercised, and assigned options contracts.
          Free investments are available only for our retail individual clients.
          Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
          (whichever is less) as delivery brokerage. A brokerage of 0.25% of the
          contract value will be charged for contracts where physical delivery
          happens. For netted off positions in physically settled contracts, a
          brokerage of 0.1% will be charged.
        </p>
      </div>
    </div>
  );
}

export default Brokerage;
