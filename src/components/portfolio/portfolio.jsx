import React from 'react'
import styles from './portfolio.module.css'
import eduPauImage from '../../assets/image/edu-pau.png';
import dataCoop from '../../assets/image/datacoop.jpg'
import um from '../../assets/image/um.png'
import stateless from '../../assets/image/stateless.png'
import ekyc from '../../assets/image/ekyc.png'
import Tilt from 'react-parallax-tilt';

const portfolio = ({language}) => {
    const PortfolioTitle = language === "thai" ? "ผลงานปัจจุบัน" : "Portfolio";

  return (
    <div className={styles.PortfolioContainer}>
        <h3 className={styles.PortfolioTitle}> {PortfolioTitle} </h3>
        <div className={styles.PortfolioList}>
            <div className={styles.PortfolioItem}> 
                <Tilt transitionSpeed={2500} tiltReverse={true}>
                    <div className={styles.PortfolioImage}>
                        <img src={eduPauImage} alt='eduManual' />
                    </div>
                </Tilt>
                <div className={styles.PortfolioName}> 
                    <p> EDU-Manual PSU </p>  
                </div>
            </div>  

            <div className={styles.PortfolioItem}>
                <Tilt transitionSpeed={2500} tiltReverse={true}>
                    <div className={styles.PortfolioImage}>
                        <img src={dataCoop} alt="dataCoop" />
                    </div>               
                </Tilt>
                <div className={styles.PortfolioName}> 
                    <p> EDU-Cooperative PSU</p>
                </div>
            </div>  

            <div className={styles.PortfolioItem}>
                <Tilt transitionSpeed={2500} tiltReverse={true}>
                    <div className={styles.PortfolioImage}>
                        <img src={um} alt="um" /> 
                    </div>
                </Tilt>
                <div className={styles.PortfolioName}> 
                    <p> User Management </p>
                </div>
            </div>  

            <div className={styles.PortfolioItem}>
                <Tilt transitionSpeed={2500} tiltReverse={true}>
                    <div className={styles.PortfolioImage}>
                        <img src={stateless} alt="stateless" />  
                    </div>
                </Tilt>
                <div className={styles.PortfolioName}> 
                    <p> Stateless Registration </p>
                </div>
            </div>  

            <div className={styles.PortfolioItem}>
                <Tilt transitionSpeed={2500} tiltReverse={true}>
                    <div className={styles.PortfolioImage}>
                        <img src={ekyc} alt="ekyc" />  
                    </div>
                </Tilt>
                <div className={styles.PortfolioName}> 
                    <p> eKYC By ONE Platform </p>
                </div>
            </div>  
 
        </div>  
    </div>
  )
}

export default portfolio
