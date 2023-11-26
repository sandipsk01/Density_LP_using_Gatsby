import React from "react";

export default function Share() {
  return (
    <div className="share">

      <div className="shareslog">
        <img src="/speaker.svg" />
        <div className="sharequote">
          <div className="bigquote">
            Earn Money. <span className="yellow">The Easy Way.</span>
          </div>
          <div className="smallquote">
            No Complexity of Trading Fee, generate volume and win
          </div>
        </div>
      </div>

      <div className="shareopt">
        <div className="sharebox">
          <img src="/link.svg" />
          <div>Share your referral link</div>
        </div>
        <div className="sharebox">
          <img src="/inviteppl.svg" />
          <div>Invite Friends to Trade on Density</div>
        </div>
        <div className="sharebox">
          <img src="/earn.svg" />
          <div>Trade and Earn</div>
        </div>
      </div>
      
      <button>Start Earning Now</button>
    </div>
  );
}
