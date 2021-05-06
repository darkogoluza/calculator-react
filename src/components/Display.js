import React from "react";
import { useCalculatorContext } from "../calculatorContext";

const Display = () => {
  const { primary, secundary, operator } = useCalculatorContext();
  return (
    <section className="calculator__display">
      <p className="calculator__display__secundary">
        {secundary} {operator}
      </p>
      <h1 className="calculator__display__primary">{primary}</h1>
    </section>
  );
};

export default Display;
