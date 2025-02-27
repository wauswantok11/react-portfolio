import React from 'react'
import styles from './hero.module.css'
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';

const hero = ({ language }) => {
    const textHi = language === "thai" ? "สวัสดี ฉันเอง" : "Hi, it's Me";
    const textName = language === "thai" ? "อดุล วสุวรรธก" : "ADUL VASUVANTOK";
    const textIma = language === "thai" ? "ฉันเป็น" : "I'm a";
    const textJobTitle = language === "thai" ? "มีความเชี่ยวชาญในการพัฒนาแบ็กเอนด์ RESTful API โดยใช้ Golang และ MySQL" : "Proficient in RESTful API backend development using Golang and MySQL"
    const textJobSubOne = language === "thai" ? "การจัดการ DevOps ขั้นพื้นฐาน" : "Basic DevOps management."
    const textJobSubTwo = language === "thai" ? "จบศึกษาจากคณะวิทยาศาสตร์ มหาวิทยาลัยสงขลานครินทร์":"Graduated from the Faculty of Science Prince of Songkla University"
    const textJobSubTree = language === "thai" ? "ปัจจุบันทำงานเป็น Software Engineer (Full Stack Developer) ที่ บริษัท INET Thailand": "Currently working as a Software Engineer (Full Stack Developer) at INET Thailand."
    return (
        <div className={styles.HeroWrapper}>
            <div className={styles.Container}>
                <div className={styles.HeroCon}>
                    <div className={styles.HeroInfo}>
                        <p className={styles.HeroHi}> 
                            {textHi}
                        </p>
                        <h3 className={styles.HeroName}>
                            {textName}
                        </h3>
                        <p className={styles.HeroPosition}>
                            <span>{textIma}</span>
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
                            {textJobTitle}
                            <br />{textJobSubOne}
                            <br />{textJobSubTwo} 
                            <br />{textJobSubTree}
                        </p>
                        <ul className={styles.HeroSocial}>
                            <li>
                                <a href='https://github.com/wauswantok11'><FaGithub /></a>
                            </li>
                            <li>
                                <a href='https://www.linkedin.com/in/adul-vasuvantoka-476196345'><FaLinkedin /></a>
                            </li>
                            <li>
                                <a href='https://www.facebook.com/boom.4146'><FaFacebook /></a>
                            </li>
                        </ul>
                    </div>
                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                        <div className={styles.HeroBoxImages}> 
                            <div className={styles.HeroImages}></div>
                        </div>
                    </Tilt>
                </div>
            </div>
        </div>
      )
    }


export default hero