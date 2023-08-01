import React from "react";
import icon from "../assets/images/icon-list.svg";
const Success = () => {
  return (
    <div className="success-card">
      <img src={icon} alt="success" style={{ width: "4rem", height: "4rem" }} />
      <h1 className="subscribing-heading">Thanks for subscribing!</h1>
      <p className="subscribing-message">
        A confirmation email has been sent to{" "}
        <strong> ash@loremcompany.com</strong>. Please open it and click the
        button inside to confirm your subscription.
      </p>
      <input type="button" className="submit" value="Dismiss Message" />
    </div>
  );
};

export default Success;
