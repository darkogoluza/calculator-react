import React, { useContext, useState } from "react";

const CalculatorContext = React.createContext();

export const CalculatorProvider = ({ children }) => {
  const [primary, setPrimary] = useState("0");
  const [secundary, setSecundary] = useState("");
  const [operator, setOperator] = useState("");

  const numberClick = (number) => {
    if (primary !== "0")
      setPrimary(
        (primary + number).substring(0, primary.includes("-") ? 19 : 18)
      );
    else setPrimary(number);
  };
  const operatorClick = (newOperator) => {
    if (primary !== "") {
      if (operator !== "") {
        setSecundary(doCalculation());
        setPrimary("0");
        setOperator(newOperator);

        return;
      }
      setSecundary(primary);
      setPrimary("0");
      setOperator(newOperator);
    } else {
      if (operator !== "") {
        setOperator(newOperator);
      }
    }
  };

  const handleEnter = () => {
    if (primary !== "" && secundary !== "" && operator !== "") {
      setPrimary(doCalculation());
      setOperator("");
      setSecundary("");
    }
  };

  const handleDelete = () => {
    setPrimary(primary.slice(0, -1));
  };
  const handleClear = () => {
    setSecundary("");
    setPrimary("0");
    setOperator("");
  };
  const handleInvertPolarity = () => {
    if (primary !== "0" && primary !== "") {
      if (primary[0] === "-") {
        setPrimary(primary.substring(1));
      } else {
        setPrimary("-" + primary);
      }
    }
  };
  const handleDecimalPoint = () => {
    if (!primary.includes(".")) {
      setPrimary((primary + ".").substring(0, primary.includes("-") ? 19 : 18));
    }
  };
  const handleAdvancedOperation = (advancedOperation) => {
    const a = parseFloat(primary);
    switch (advancedOperation) {
      case "sin":
        setPrimary(Math.sin(a).toString());
        break;
      case "cos":
        setPrimary(Math.cos(a).toString());
        break;
      case "tan":
        setPrimary(Math.tan(a).toString());
        break;
      case "√":
        setPrimary(Math.sqrt(a).toString());
        break;
    }
  };

  const doCalculation = () => {
    const a = parseFloat(secundary);
    const b = parseFloat(primary);
    switch (operator) {
      case "+":
        return (a + b).toString();
      case "-":
        return (a - b).toString();
      case "÷":
        if (b === 0) {
          return "0";
        }
        return (a / b).toString();
      case "*":
        return (a * b).toString();
      case "%":
        return (a % b).toString();
    }
  };

  return (
    <CalculatorContext.Provider
      value={{
        primary,
        secundary,
        operator,
        numberClick,
        operatorClick,
        handleEnter,
        handleDelete,
        handleClear,
        handleInvertPolarity,
        handleDecimalPoint,
        handleAdvancedOperation,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculatorContext = () => {
  return useContext(CalculatorContext);
};
