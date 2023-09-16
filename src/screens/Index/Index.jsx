import React from "react";
import "./style.css";

export const Index = () => {
  return (
    <div className="index">
      <div className="div">
        <div className="overlap">
          <img
            className="image"
            alt="Image"
            src="https://cdn.animaapp.com/projects/6505c9e5848fa4e54edd10e7/releases/6505cb6546a0ba912df6931f/img/image-1.png"
          />
          <div className="frame">
            <div className="overlap-group">
              <div className="text-wrapper">Automated Budget</div>
              <div className="rectangle" />
            </div>
          </div>
          <img
            className="img"
            alt="Image"
            src="https://cdn.animaapp.com/projects/6505c9e5848fa4e54edd10e7/releases/65062d8a8cf5b842532127e0/img/image-5.png"
          />
          <img
            className="search-bar"
            alt="Search bar"
            src="https://cdn.animaapp.com/projects/6505c9e5848fa4e54edd10e7/releases/65062d8a8cf5b842532127e0/img/search-bar.png"
          />
          <div className="text-wrapper-2">Hi, Melvin</div>
        </div>
        <div className="overlap-2">
          <img
            className="image-2"
            alt="Image"
            src="https://cdn.animaapp.com/projects/6505c9e5848fa4e54edd10e7/releases/6505cb6546a0ba912df6931f/img/image-3.png"
          />
          <div className="rectangle-2" />
          <p className="no-need-to-wait">
            No need to wait anymore!
            <br />
            <br />
            Start reducing your expenses with our Automated Budget program. Let’s begin saving together!
          </p>
        </div>
        <div className="overlap-3">
          <div className="round-button-true">
            <button className="button">
              <div className="text-wrapper-3">Create Budget</div>
            </button>
          </div>
          <div className="round-button-false">
            <button className="create-budget-wrapper">
              <div className="text-wrapper-3">Automate Budget</div>
            </button>
          </div>
        </div>
        <div className="popup-page" />
      </div>
    </div>
  );
};
