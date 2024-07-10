import React from "react";
import Button from "./Button";

const list = ["All", "Gaming", "Movies", "News", "Live", "Cricket"];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((name, index) => {
        return <Button name={name} key={index} />;
      })}
    </div>
  );
};

export default ButtonList;
