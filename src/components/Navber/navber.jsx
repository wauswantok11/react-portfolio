import React from "react";
import styles from "./navber.module.css";

const navber = () => {
  return (
    <nav>
      <div className={styles.conteiner}>
        <div className={styles.navbarBar}>
          <div className={styles.NavLogo} >
            <a href="#"> PORTFOLIO </a>
          </div>

          <ul>
            <li> 
              <a href="#"> Skills </a>
            </li>
            <li>
                <a href="#" > Portfolio </a>
            </li>
            <li>
                <a href="#" > Contact </a>
            </li>
          </ul>

          <div className={styles.btnHireMe}>
            <a href="#" > Hire Me </a> 
          </div>
        </div>
      </div>
    </nav>
  );
};

export default navber;
