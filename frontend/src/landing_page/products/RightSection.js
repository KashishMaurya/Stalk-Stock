import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
  style,
}) {
  return (
    <div className="container">
      <div className="row">
        {/* description */}
        <div className="col-4 mb-5 mt-5 p-5">
          <h1>{productName}</h1>
          <p
            className="text-muted mt-4"
            style={{ lineHeight: "29px", fontSize: "16px" }}
          >
            {productDescription}
          </p>

          <a
            href={learnMore}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            Learn More &nbsp;
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        <div className="col-2"></div>

        {/* image */}
        <div className="col-6 mb-5 mt-5">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
