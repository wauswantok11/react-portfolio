import React from "react";
import styles from "./number.module.css";

function number() {
  return (
    <div className={styles.NumberContainer}>
      <div className={styles.NumberItem}>
        <h3 className={styles.NumberQuantity}>
          6+
        </h3>
        <p className={styles.NumberTitle}> Project </p>
      </div>
      <div className={styles.NumberItem}>
        <h3 className={styles.NumberQuantity}>
          25+
        </h3>
        <p className={styles.NumberTitle}> Companies Helped </p>
      </div>
      <div className={styles.NumberItem}>
        <h3 className={styles.NumberQuantity}>
          2+
        </h3>
        <p className={styles.NumberTitle}> Years of experience </p>
      </div>
      <div className={styles.NumberItem}>
        <h3 className={styles.NumberQuantity}>
          48+
        </h3>
        <p className={styles.NumberTitle}> Happy Clients </p>
      </div>
    </div>
  );
}

export default number;
