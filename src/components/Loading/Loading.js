import React from "react";
import s from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={s.container}>
      <div className={s.TextLoading}>LOADING</div>
      <div className={s.CircleLoading}></div>
    </div>
  );
};

export default Loading;
