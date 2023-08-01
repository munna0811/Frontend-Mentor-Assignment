import React, { useState } from "react";
import Success from "./Success";
import Bigimage from "../assets/images/illustration-sign-up-desktop.svg";
import SmallImage from "../assets/images/illustration-sign-up-mobile.svg";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isUserValid, setIsUserValid] = useState(false);

  const handleOnChange = (e) => {
    setEmail(e.target.value);
    emailValidation();
  };
  const emailValidation = () => {
    const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (regEx.test(email)) {
      setMessage(" ");
      setIsUserValid(true);
    } else if (!regEx.test(email) && email !== " ") {
      setMessage("Valid Email Required");
      setIsUserValid(false);
    } else {
      setMessage(" ");
      setIsUserValid(true);
    }
  };
  const handleNavigation = () => {
    if (isUserValid) navigate("/success");
    else return;
  };
  return (
    <>
      <div className="container">
        <div className="information">
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
          </ul>
          <h4>Email address</h4>
          <p className="validation-message">{message}</p>
          <input
            type="email"
            placeholder="email@company.com"
            className="mail"
            value={email}
            onChange={handleOnChange}
          />
          <input
            type="button"
            className="submit"
            value="Subscribe to monthly newsletter"
            onClick={handleNavigation}
          />
        </div>
        <div className="picture">
          <picture>
            <source srcSet={SmallImage} media="(max-width: 375px)" />
            <source srcSet={Bigimage} media="(max-width: 1440px)" />
            <img src={Bigimage} alt="Flowers" />
          </picture>
        </div>
      </div>
    </>
  );
};

export default Main;
