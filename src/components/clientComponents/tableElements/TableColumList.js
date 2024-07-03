import React from "react";
import styles from "./css/tableColumList.module.css";
export default function TableColumList(props) {
  const { data, dataFor } = props;

  console.log(data);
  return (
    <div>
      {data.map((el) => {
        return <p>{el[dataFor]}</p>;
      })}
    </div>
  );
}
