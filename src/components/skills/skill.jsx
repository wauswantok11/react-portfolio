import React from "react";
import styles from "./skill.module.css";
import { FaJsSquare } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { FaGitlab } from "react-icons/fa6";
import { FaAngular } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaDocker } from "react-icons/fa6";

const skill = ({ language }) => {
  const SkillTitleText = language === "thai" ? "ทักษะ" : "My Skill";

  return (
    <div className={styles.SkillContainer}>
        <h3 className={styles.SkillTitle}>{SkillTitleText}</h3>
        <ul className={styles.SkillList}>
          <li> <FaGolang /> </li>
          <li> <FaJsSquare /> </li>
          <li> <SiTypescript/> </li>
          <li> <FaAngular/> </li>
          <li> <FaReact /> </li>
          <li> <FaNodeJs /> </li>
          <li> <FaDocker /></li>
          <li> <FaGitlab /> </li>
        </ul>
    </div> 
  );
}

export default skill;
