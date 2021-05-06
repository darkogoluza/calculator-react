import React from "react";
import Display from "./Display";
import ButtonsContainer from "./ButtonsContainer";
import { CalculatorProvider } from "../calculatorContext";

const Calculator = () => {
  return (
    <CalculatorProvider>
      <div className="calculator">
        <Display />
        <ButtonsContainer />
      </div>
    </CalculatorProvider>
  );
};

export default Calculator;
