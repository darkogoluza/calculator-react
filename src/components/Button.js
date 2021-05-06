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
