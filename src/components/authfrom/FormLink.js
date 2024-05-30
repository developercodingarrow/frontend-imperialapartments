import React from "react";
import Link from "next/link";
import styles from "./css/formlink.module.css";

export default function FormLink(props) {
  const { text, linkPath } = props;
  return (
    <div className={styles.link_wrapper}>
      <Link href={`/${linkPath}`}>{text}</Link>
    </div>
  );
}
