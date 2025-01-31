import React ,{useState} from "react"; 
import PortfolioPage from "../Pages/PortfolioPage/PortfolioPage";
import styles from "./navber.module.css";
import { FaRegUserCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const navber = ({page, setPage}) => {
  const [isToggle, setToggle] = useState(false);
  function handleToggle(){
    setToggle(!isToggle)
  }
  // const [page, setPage] = useState("/")
 
  return (
    <>
    <nav>
      <div className={styles.conteiner}>
        <div className={styles.navbarBar}>
          <div className={styles.NavLogo} >
            <a onClick={()=> setPage("HomePage")}  role="button" tabIndex={0}> PORTFOLIO </a>
          </div>
          <ul>
          <li onClick={()=> setPage("SkillsPage")}  role="button" tabIndex={0}>   
                Skills 
              </li>
            <li onClick={() => setPage("portfolioPage")} role="button" tabIndex={0}>
              Portfolio
            </li>
            <li onClick={()=> setPage("ContactPage")} role="button" tabIndex={0}>
              Contact  
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
              <li onClick={()=> setPage("SkillsPage")}>   
                Skills 
              </li>
              <li onClick={() => setPage("portfolioPage")} role="button" tabIndex={0}>
                Portfolio
              </li>
              <li onClick={()=> setPage("ContactPage")} role="button" tabIndex={0}>
                Contact  
              </li>
            </ul> 
            <div className={styles.MobileBtnHireMe}>
            <FaRegUserCircle /> <a href="#"> Hire Me </a> 
            </div>
          </>
        ): null}
      </div>
    </nav>
    </>
  );
};

export default navber;
