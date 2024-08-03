import React from "react";

function Marquee() {
  return (
    <div className="marquee1">
      <div className="marquee_text">
        <div className="marquee">
          <p>
            Free Lifetime Updates<span>*</span>
          </p>
          <p>
            Free Lifetime Updates<span>*</span>
          </p>
          <p>
            Free Lifetime Updates<span>*</span>
          </p>
          <p>
            Free Lifetime Updates<span>*</span>
          </p>
          {/* Duplicate the content for seamless scrolling */}
          <p>
            Free Lifetime Updates<span>*</span>
          </p>
          <p>
            Free Lifetime Updates<span>*</span>
          </p>
          <p>
            Free Lifetime Updates<span>*</span>
          </p>
          <p>
            Free Lifetime Updates<span>*</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Marquee;
