import React from "react";
export default function Hero() {
  return (
    <section className="hero">

      <div className="heroQuote">
        <div className="heroSlogan">
          It’s time to trade, the <span className="future">future.</span>
        </div>
        <div className="caption">
          Trade BTC, ETH Futures with 125x leverage and earn rewards.
        </div>
      </div>

      <div className="heroImg">
        <div className="main">
            <img className="sideFrame" src="/iphone.png" alt="main" />
            <img className="sidephone" src="/leftphone.png" alt="leftphone"/>
        </div>
        <div className="main">
            <img className="middleFrame" src="/iphone.png" alt="main" />
            <img className="middlephone" src="/middlePhone.png" alt="leftphone"/>
        </div>
        <div className="main">
            <img className="sideFrame" src="/iphone.png" alt="main" />
            <img className="sidephone" src="rightPhone.png" alt="rightphone"/>
        </div> 
        </div>
        
    

    </section>
  );
}
