import React from "react";
import { LineChart } from "./LineChart.tsx";
import { Form } from "./Form.tsx";
import hero from "./hero";
import { useAuth0 } from "@auth0/auth0-react";

const HomeContent = () => (
  <div>
    <hero></hero>
  </div>
);

export default HomeContent;
