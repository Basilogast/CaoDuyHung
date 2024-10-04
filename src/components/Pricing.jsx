import React from "react";

export const Pricing = () => {
  return (
    <div className="pricing-container" id="pricing">
      <h2 className="pricing-header">Our services</h2>
      <div className="pricing-cards">
        {/* Pricing Card 1 */}
        <div className="pricing-card">
          <h3 className="pricing-title">Static Portfolio</h3>
          <p className="pricing-description">
            An option for one to create a simple personal portfolio without blog
            feature but still do the job.
          </p>
          <p className="pricing-price">$50 - $150</p>
          <a href="#connect">
            <button className="learn-more-btn">Learn More</button>
          </a>
        </div>

        {/* Pricing Card 2 */}
        <div className="pricing-card">
          <h3 className="pricing-title">Dynamic Portfolio</h3>
          <p className="pricing-description">
            Great choice with blog function for those who wants to add more
            project to their portfolio in the future.
          </p>
          <p className="pricing-price">$100 - $250</p>
          <a href="#connect">
            <button className="learn-more-btn">Learn More</button>
          </a>
        </div>

        {/* Pricing Card 3 */}
        <div className="pricing-card">
          <h3 className="pricing-title">Others</h3>
          <p className="pricing-description">
            For others type of website(ecom, blog, ...), please give me an email
            for further instructions.
          </p>
          <p className="pricing-price">Contact for details</p>
          <a href="#connect">
            <button className="learn-more-btn">Learn More</button>
          </a>
        </div>
      </div>
    </div>
  );
};
