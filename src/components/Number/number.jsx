import React from "react";
import styles from "./number.module.css";

const number = ({language}) => {
  const Project = language === "thai" ? "โปรเจค" : "Project";
  const Companies = language === "thai" ? "บริษัทต่างๆ ได้ช่วยเหลือ" :"Companies Helped"
  const Years = language === "thai" ? "ประสบการณ์" :"Years of experience"
  const Happy = language === "thai" ? "ลูกค้าที่มีความพึงพอใจ" :"Happy Clients"

  return (
    <div className={styles.NumberContainer}>
      <div className={styles.NumberItem}>
        <h3 className={styles.NumberQuantity}>
          6+
        </h3>
        <p className={styles.NumberTitle}> {Project} </p>
      </div>
      <div className={styles.NumberItem}>
        <h3 className={styles.NumberQuantity}>
          25+
        </h3>
        <p className={styles.NumberTitle}> {Companies} </p>
      </div>
      <div className={styles.NumberItem}>
        <h3 className={styles.NumberQuantity}>
          2+
        </h3>
        <p className={styles.NumberTitle}> {Years} </p>
      </div>
      <div className={styles.NumberItem}>
        <h3 className={styles.NumberQuantity}>
          48+
        </h3>
        <p className={styles.NumberTitle}> {Happy} </p>
      </div>
    </div>
  );
}

export default number;
