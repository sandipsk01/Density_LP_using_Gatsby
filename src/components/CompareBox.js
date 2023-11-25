import React from "react";

export default function CompareBox() {
  return (
    <div>

      <div className="compareQuote">
        <div className="bigquote">Trade More. <span className="yellow">Pay Less.</span></div>
        <div className="smallquote">Our low Fees Supercharge Your Profits</div>
      </div>

        <div className="compareBox">
            <div className="otherComp">
                <img className="compLogo" src="coindcx.png"/>
                <div className="compdata">
                    <div className="compnum">0.025</div>
                    <div className="compname">Maker Fees</div>
                </div>
                <div className="compdata">
                    <div className="compnum">0.07</div>
                    <div className="compname">Taker Fees</div>
                </div>
            </div>

            <div className="comp">
                <img className="compLogo" src="Density.svg"/>
                <div className="compdata">
                    <div className="compnum">0.02</div>
                    <div className="compname">Maker Fees</div>
                </div>
                <div className="compdata">
                    <div className="compnum">0.04</div>
                    <div className="compname">Taker Fees</div>
                </div>
            </div>

            <div className="otherComp">
                <img className="compLogo" src="Delta.png"/>
                <div className="compdata">
                    <div className="compnum">0.02</div>
                    <div className="compname">Maker Fees</div>
                </div>
                <div className="compdata">
                    <div className="compnum">0.05</div>
                    <div className="compname">Taker Fees</div>
                </div>
            </div>
        </div>
    </div>
  );
}
