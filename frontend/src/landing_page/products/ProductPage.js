import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="/Images/kite.png"
        productName="Kite"
        productDescription=" Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        learnMore="https://zerodha.com/products/kite"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
        appStore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"
      />
      <RightSection
        imageURL="/Images/console.png"
        productName="Console"
        productDescription=" The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="https://zerodha.com/products/console"
      />
      <LeftSection
        imageURL="/Images/coin.png"
        productName="Coin"
        productDescription=" Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        learnMore="https://coin.zerodha.com/"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.coin"
        appStore="https://play.google.com/store/apps/details?id=com.zerodha.coin"
      />
      <RightSection
        imageURL="/Images/kite.png"
        productName="Kite Connect API"
        productDescription=" Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="https://kite.trade/"
      />
      <LeftSection
        imageURL="/Images/varsity.png"
        productName="Varsity mobile"
        productDescription=" An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        learnMore=""
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.varsity"
        appStore="https://play.google.com/store/apps/details?id=com.zerodha.varsity"
      />
      <p className="mt-5 mb-5 text-center p-5 fs-5 text-muted">
        Want to know more about our technology stack? Check out the &nbsp;
        <a
          href="https://zerodha.tech/"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          Zerodha.tech
        </a>{" "}
        blog.
      </p>
      <Universe />
    </>
  );
}

export default ProductPage;
