import React, { useState } from "react";

export const Pricing = () => {
  // State to manage the visibility of details for all cards
  const [showAllDetails, setShowAllDetails] = useState(false);

  // Function to toggle the visibility of details for all cards
  const toggleDetails = () => {
    setShowAllDetails((prevState) => !prevState);
  };

  return (
    <div className="pricing-container" id="pricing">
      <h2 className="pricing-header">Our services</h2>
      <div className="pricing-cards">
        {/* Pricing Card 1 */}
        <div className="pricing-card">
          <h3 className="pricing-title">Basic Plan</h3>
          <p className="pricing-description">
            This is the most affordable package, offering a clean and simple
            portfolio website.
          </p>
          <button className="learn-more-btn" onClick={toggleDetails}>
            {showAllDetails ? "Show Less" : "Show More"}
          </button>
          <div className={`pricing-details ${showAllDetails ? "show" : ""}`}>
            <ul>
              <li>Pre-designed templates</li>
              <li>Single-page website</li>
              <li>Essential sections</li>
              <li>Social media integration</li>
              <li>Simple contact form</li>
            </ul>
          </div>
        </div>

        {/* Pricing Card 2 */}
        <div className="pricing-card">
          <h3 className="pricing-title">Standard Plan</h3>
          <p className="pricing-description">
            Our most popular plan, allowing you to create a fully customized
            portfolio with no limitations.
          </p>
          <button className="learn-more-btn" onClick={toggleDetails}>
            {showAllDetails ? "Show Less" : "Show More"}
          </button>
          <div className={`pricing-details ${showAllDetails ? "show" : ""}`}>
            <ul>
              <li>Custom design template</li>
              <li>Multi-page website</li>
              <li>Additional sections</li>
              <li>Custom animations and effects</li>
              <li>Custom contact form</li>
            </ul>
          </div>
        </div>

        {/* Pricing Card 3 */}
        <div className="pricing-card">
          <h3 className="pricing-title">Dynamic Plan</h3>
          <p className="pricing-description">
            The most comprehensive package, allowing you to update your own
            website by signing in and uploading new content.
          </p>
          <button className="learn-more-btn" onClick={toggleDetails}>
            {showAllDetails ? "Show Less" : "Show More"}
          </button>
          <div className={`pricing-details ${showAllDetails ? "show" : ""}`}>
            <ul>
              <li>All from the standard plan</li>
              <li>Dynamic project cards</li>
              <li>Custom backend integration</li>
              <li>Allows you to update your own website</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
