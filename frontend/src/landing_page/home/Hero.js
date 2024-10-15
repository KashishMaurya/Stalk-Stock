import React from 'react';

function Hero() {
    return (
      <div className="container p-5">
        <div className="row text-center">
                <img src="/Images/homeHero.png" alt="Hero_img" className='mb-5 ' style={{width: "80%", marginLeft: "100px "}}/>
                <h1 className='mt-5 mb-2'>Invest in everything</h1>
                <p className='text-muted fs-4'>Online platform to invest in stocks, derivatives, mutual funds, and more</p> <br/><br/><br/>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width: "20%", margin:"0 auto"}}>Signup Now</button>
        </div>
      </div>
    );
}

export default Hero;