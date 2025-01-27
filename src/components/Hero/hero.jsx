import React from 'react'
import styles from './hero.module.css'
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function hero (){ 
    return (
        <div className={styles.HeroWrapper}>
            <div className={styles.Container}>
                <div className={styles.HeroCon}>
                    <div className={styles.HeroInfo}>
                        <p className={styles.HeroHi}> 
                            Hi, it's Me
                        </p>
                        <h3 className={styles.HeroName}>
                            ADUL VASUVANTOK
                        </h3>
                        <p className={styles.HeroPosition}>
                            I'm a Full Stack Developer
                        </p>
                        <p className={styles.HeroJobDetail}>
                        Proficient in RESTful API backend development using Golang and MySQL
                        <br />Basic DevOps management.
                        <br />Studied Faculty of Science at the Prince of Songkla University, Thailand 
                        <br />Software Engineer (Full Stack Developer) at INET Thailand
                        </p>
                        <ul className={styles.HeroSocial}>
                            <li>
                                <a href='https://github.com/wauswantok11'><FaGithub /></a>
                            </li>
                            <li>
                                <a href='#'><FaLinkedin /></a>
                            </li>
                            <li>
                                <a href='https://www.facebook.com/boom.4146'><FaFacebook /></a>
                            </li>
                        </ul>
                    </div>
                    <div> 
                        <div  className={styles.HeroImages}></div>
                    </div>
                </div>
            </div>
        </div>
      )
    }


export default hero