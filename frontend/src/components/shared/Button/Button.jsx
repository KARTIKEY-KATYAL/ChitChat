import React from "react";
import style from "./Button.module.css";
function Button({text,icon , onClick}) {
  return (
    <div>
      <button onClick={onClick} className={style.button}>
        <span>{text}</span>
    <img src={`${icon}`} alt="arrow" />
      </button>
    </div>
  );
}

export default Button
