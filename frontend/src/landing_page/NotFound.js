import React from "react";

function NotFound() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <img
          src="/Images/404-err-img.png"
          style={{
            height: "30%",
            width: "30%",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />

        <h1 className="mt-5 mb-4">AWWW... DON'T CRY.</h1>
        <p className="text-muted fs-6 mb-5">
          It's just a 404 Error! <br />
          What you're looking for may have been misplaced in the Long term
          Memory.
        </p>
      </div>
    </div>
  );
}

export default NotFound;
