import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,

  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        {/* image */}
        <div className="col-6 mb-5 mt-5 p-5">
          <img src={imageURL} alt="Kite" />
        </div>

        <div className="col-2"></div>

        {/* description */}
        <div className="col-4 mb-5 mt-5 p-5">
          <h1>{productName}</h1>
          <p
            className="text-muted mt-4"
            style={{ lineHeight: "29px", fontSize: "16px" }}
          >
            {productDescription}
          </p>
          <div>
            <a
              href={learnMore}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              Learn More &nbsp;
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-4">
            <a href={googlePlay} target="_blank">
              <img src="/Images/googlePlayBadge.svg" />
            </a>
            <a href={appStore} target="_blank" style={{ marginLeft: "10%" }}>
              <img src="/Images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
