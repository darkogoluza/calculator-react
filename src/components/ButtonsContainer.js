import React from "react";
import { buttonsData } from "../data/buttonsData";
import Button from "./Button";
import { uuid } from "uuidv4";

const ButtonsContainer = () => {
  return (
    <section className="calculator__buttons">
      {buttonsData.map((button) => {
        return <Button key={uuid()} {...button} />;
      })}
    </section>
  );
};

export default ButtonsContainer;
