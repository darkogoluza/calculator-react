import React from "react";
import { useCalculatorContext } from "../calculatorContext";

const Button = ({ content, type }) => {
  const {
    numberClick,
    operatorClick,
    handleEnter,
    handleDelete,
    handleClear,
    handleInvertPolarity,
    handleDecimalPoint,
    handleAdvancedOperation,
  } = useCalculatorContext();

  const handleClick = () => {
    switch (type) {
      case "number":
        numberClick(content);
        break;

      case "operator":
        operatorClick(content);
        break;

      case "enter":
        handleEnter();
        break;

      case "function":
        switch (content) {
          case "del":
            handleDelete();
            break;
          case "clear":
            handleClear();
            break;
          case "±":
            handleInvertPolarity();
            break;
          case ".":
            handleDecimalPoint();
            break;
          case "sin":
            handleAdvancedOperation(content);
            break;
          case "cos":
            handleAdvancedOperation(content);
            break;
          case "tan":
            handleAdvancedOperation(content);
            break;
          case "√":
            handleAdvancedOperation(content);
            break;
        }
    }
  };

  return (
    <button
      className={`calculator__buttons__button button--${type}`}
      onClick={handleClick}
    >
      {content}
    </button>
  );
};

export default Button;
