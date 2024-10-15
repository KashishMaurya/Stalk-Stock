import React from 'react';

function Stats() {
    return (
      <div className="container mt-5 mb-5">
        <div className="row mt-5">
          {/* text */}
          <div className="col-6 mb-5 mt-5">
            <h1 className="mb-5">Trust with confidence</h1>
            <h4>Customer-first always</h4>
            <p className="text-muted">
              That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh
              crores of equity investments and contribute to 15% of daily retail
              exchange volumes in India.
            </p>
            <h4>No spam or gimmicks</h4>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
            <h4>The Zerodha universe</h4>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
            <h4>Do better with money</h4>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>

          {/* image */}
          <div className="col-6 mb-5 mt-5">
            <img
              src="/Images/ecosystem.png"
              alt="web_ecosystem"
              style={{ width: "100%" }}
            />
            <div className="text-center">
              <a
                href="https://zerodha.com/products"
                className="mx-5 "
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Explore our products <i class="fa-solid fa-arrow-right"></i>
              </a>
              <a
                href="https://kite-demo.zerodha.com/dashboard"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                Try Kite demo <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Stats;