import React from 'react'
import styles from './hero.module.css'
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';

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
                            <span style={{marginRight: "7px"}}>I'm a</span>
                            <TypeAnimation
                                sequence={[
                                    'Back-end Developer',
                                    1000, 
                                    'Front-end Developer',
                                    1000,
                                    'Full Stack Developer',
                                    1000, 
                                ]}
                                 speed={50}
                                 repeat={Infinity} 
                                />
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
                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                        <div className={styles.HeroBoxImages}> 
                            <div  className={styles.HeroImages}></div>
                        </div>
                    </Tilt>
                </div>
            </div>
        </div>
      )
    }


export default hero