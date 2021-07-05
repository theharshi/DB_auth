import React, { Component } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import form from "../views/form";

const Predictor = () => {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? (
    <form></form>
  ) : (
    <div className="alert alert-danger" role="alert">
      Please Login to continue
    </div>
  );
};
export default Predictor;
