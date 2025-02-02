import React from "react";
import styles from "./SkillsPage.module.scss";
const SkillsPage = ({language}) => {
  const title = language === "thai" ? "ทักษะ" : "Skills";

  return (
    <div className={styles.SkillPageWrapper}>
      <div className={styles.SkillPagerTitle}>
        <p> {title} </p>
      </div>
    </div>
  );
}

export default SkillsPage;
