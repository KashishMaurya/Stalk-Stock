import React from 'react';

function Team() {
    return (
      <div className="container">
        {/* heading */}
        <div className="row">
          <h1 className="text-center fs-2">People</h1>
        </div>

        {/* description */}
        <div className="row p-5">
          {/* img */}
          <div className="col-6 p-5 text-center">
            <img
              src="/Images/nithinKamath.jpg"
              style={{ borderRadius: "50%", width: "60%" }}
            />
            <h4 className="mt-4">Nithin Kamath</h4>
            <p className="text-muted">Founder, CEO</p>
          </div>

          {/* about */}
          <div className="col-6 p-5 fs-6" style={{ lineHeight: "30px" }}>
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
          </div>
        </div>
      </div>
    );
}

export default Team;