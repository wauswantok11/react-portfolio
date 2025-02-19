import React, { useState } from "react";
import styles from "./navber.module.css";
import { FaRegUserCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { ColorPicker , ColorBox} from "material-ui-color";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    border: "1px solid red"
  }
});

const Navbar = ({ page, setPage , language, setLanguage }) => {
  const [isToggle, setToggle] = useState(false);
  function handleToggle() {
    setToggle(!isToggle)
  }
 
  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
  };
  
  const titleSkills = language === "thai" ? "ทักษะการทำงาน" : "Skills"
  const titleContact = language === "thai" ? "ติดต่อ" : "Contact"
  const titlePortfolio = language === "thai" ? "ผลงาน" : "Portfolio"
  const titleLanguage = language === "thai" ? "ภาษา" : "Language"
 
  return (
    <>
      <nav>
        <div className={styles.conteiner}>
          <div className={styles.navbarBar}>

            <div className={styles.NavLogo} >
              <a onClick={() => setPage("HomePage")} role="button" tabIndex={0}> PORTFOLIO </a>
            </div>

            <ul>
              <li onClick={() => setPage("SkillsPage")} role="button" tabIndex={0}>
                {titleSkills}
              </li>
              <li onClick={() => setPage("portfolioPage")} role="button" tabIndex={0}>
                {titlePortfolio}
              </li> 
            </ul>

            <div className={styles.DivChangeSwitch}>
              <FormControl className={styles.FormChangeSwitch} sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel className={styles.InputLabelLanguage} id="change-language-label">{titleLanguage}</InputLabel>
                <Select className={styles.SelectLanguage} labelId="change-language-label" id="change-language" value={language} label="Language" onChange={handleChangeLanguage} >
                  <MenuItem style={{ fontFamily: "IBM Plex Sans Thai" }} value="thai">ไทย</MenuItem>
                  <MenuItem style={{ fontFamily: "IBM Plex Sans Condensed" }} value="eng">England</MenuItem>
                </Select>
              </FormControl>
            </div> 

          </div>

          {/* Mobile Menu */}
          <FaBars className={styles.MobileMenuBars} onClick={handleToggle} />
          {
            isToggle ? (
              <>
                <ul className={styles.MobileListMenuBars}>
                  <li onClick={() => setPage("SkillsPage")}>
                    {titleSkills}
                  </li>
                  <li onClick={() => setPage("portfolioPage")} role="button" tabIndex={0}>
                    {titlePortfolio}
                  </li> 
                </ul>

                <div className={styles.MobileDivChangeSwitch}>
                  <FormControl className={styles.FormChangeSwitch} sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel className={styles.InputLabelLanguage} id="change-language-label">{titleLanguage}</InputLabel>
                    <Select className={styles.SelectLanguage} labelId="change-language-label" id="change-language" value={language} label="Language" onChange={handleChangeLanguage} >
                      <MenuItem style={{ fontFamily: "IBM Plex Sans Thai" }} value="thai">ไทย</MenuItem>
                      <MenuItem style={{ fontFamily: "IBM Plex Sans Condensed" }} value="eng">England</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </>
            ) : null
          }
        </div>
      </nav>
    </>
  );
};

export default Navbar;
