import React from "react";
import style from "./Card.module.css";

function Card({ title, icon ,children}) {
  return (
    <div className={style.card}>
      <div className={style.headingWrapper}>
        <h1 className={style.heading}>
          <img src={`/${icon}`} alt="logo" />
          <span>{title}</span>
        </h1>
      </div>
      {children}
    </div>
  );
}

export default Card;
