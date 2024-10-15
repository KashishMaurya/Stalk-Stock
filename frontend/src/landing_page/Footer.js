import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#FBFBFB" }}>
      <div className="container border-top">
        <div className="row mt-5">
          {/* col-1 */}
          <div className="col">
            <img
              src="/Images/logo.svg"
              alt="logo"
              style={{ width: "50%" }}
              className="mb-3"
            />
            <p className="text-muted fs-6">
              <small>
                &copy; 2010 - 2024, Zerodha Broking Ltd.
                <br /> All rights reserved.
              </small>
            </p>
          </div>

          {/* col-2 */}
          <div className="col ft-link">
            <h5 className="text-muted">Company</h5>
            <a href="" className="ft-link">
              About
            </a>
            <br />
            <a href="" className="ft-link">
              Products
            </a>
            <br />
            <a href="" className="ft-link">
              Pricing
            </a>
            <br />
            <a href="" className="ft-link">
              Referral programme
            </a>
            <br />
            <a href="" className="ft-link">
              Careers
            </a>
            <br />
            <a href="" className="ft-link">
              Zerodha.tech
            </a>
            <br />
            <a href="" className="ft-link">
              Press & media
            </a>
            <br />
            <a href="" className="ft-link">
              Zerodha Cares (CSR)
            </a>
            <br />
          </div>

          {/* col-3 */}
          <div className="col ft-link">
            <h5 className="text-muted">Support</h5>
            <a href="" className="ft-link">
              Contact us
            </a>
            <br />
            <a href="" className="ft-link">
              Support portal
            </a>
            <br />
            <a href="" className="ft-link">Z-Connect blog</a>
            <br />
            <a href="" className="ft-link">List of charges</a>
            <br />
            <a href="" className="ft-link">Download & resources</a>
            <br />
            <a href="" className="ft-link">Videos</a>
            <br />
            <a href="" className="ft-link">Market overview</a>
            <br />
            <a href="" className="ft-link">How to file a complaint?</a>
            <br />
            <a href="" className="ft-link">Status of your complaints</a>
            <br />
          </div>

          {/* col-4 */}
          <div className="col ft-link">
            <h5 className="text-muted">Account</h5>
            <a href="" className="ft-link">Open an account</a>
            <br />
            <a href="" className="ft-link">Fund transfer</a>
            <br />
          </div>
        </div>

        <div className="mt-5 text-muted footer-text">
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX - SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. - SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to complaints@zerodha.com, for DP related to dp@zerodha.com.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>

        <div className="mb-5 mt-5 d-flex justify-content-center">
          Made with &#9829; by Kashish
        </div>
      </div>
    </footer>
  );
}

export default Footer;
