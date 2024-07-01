import React from "react";
import styles from "./css/dynimicBtn.module.css";
import { FiPlus } from "../../ApplicationIcon";

export default function DynimicBtn(props) {
  const { btnTxt, btnHandel } = props;
  const handelBtnClick = () => {
    btnHandel();
  };

  return (
    <div className={styles.btn_container} onClick={handelBtnClick}>
      <div className={styles.icon_box}>
        <FiPlus />
      </div>
      <div className={styles.text_box}>{btnTxt}</div>
    </div>
  );
}
