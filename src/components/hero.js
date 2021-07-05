import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const logo =
  "https://1000logos.net/wp-content/uploads/2017/09/Deutsche-Bank-Logo.png";
// const { isAuthenticated } = useAuth0();
const Hero = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="text-center hero">
      <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
      <h1 className="mb-4">
        The best way to predict the future is to study the past, or
        prognosticate.
      </h1>
      {/* <p className="lead">
      The best way to predict the future is to study the past, or prognosticate.
        Welcome to PBP . Once logged in, this app helps you to predict the total
        deposits and withdrawl of all banks of the united states from given
        range. Head on to Predictor tab to predict deposits/withdral/balance
      </p> */}
    </div>
  );
};

export default Hero;
