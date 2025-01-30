import React ,{useState} from "react";
import styles from "./navber.module.css";
import { FaRegUserCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const navber = () => {
  const [isToggle, setToggle] = useState(false);
  function handleToggle(){
    setToggle(!isToggle)
  }
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
            <FaRegUserCircle /> <a> Hire Me </a> 
          </div>
        </div>
        {/* Mobile Menu */}
        <FaBars className={styles.MobileMenuBars} onClick={handleToggle}/> 
        {isToggle ? (
          <>
            <ul className={styles.MobileListMenuBars}>
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
            <div className={styles.MobileBtnHireMe}>
            <FaRegUserCircle /> <a href="#"> Hire Me </a> 
            </div>
          </>
        ): null}
      </div>
    </nav>
  );
};

export default navber;
