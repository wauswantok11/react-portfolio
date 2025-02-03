import React from 'react'
import styles from './portfolio.module.css' 
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
                        <img src="/image/edu-pau.png" alt='eduManual' />
                    </div>
                </Tilt>
                <div className={styles.PortfolioName}> 
                    <p> EDU-Manual PSU </p>  
                </div>
            </div>  

            <div className={styles.PortfolioItem}>
                <Tilt transitionSpeed={2500} tiltReverse={true}>
                    <div className={styles.PortfolioImage}>
                        <img src="/image/datacoop.jpg" alt="dataCoop" />
                    </div>               
                </Tilt>
                <div className={styles.PortfolioName}> 
                    <p> EDU-Cooperative PSU</p>
                </div>
            </div>  

            <div className={styles.PortfolioItem}>
                <Tilt transitionSpeed={2500} tiltReverse={true}>
                    <div className={styles.PortfolioImage}>
                        <img src="/image/um.png" alt="um" /> 
                    </div>
                </Tilt>
                <div className={styles.PortfolioName}> 
                    <p> User Management </p>
                </div>
            </div>  

            <div className={styles.PortfolioItem}>
                <Tilt transitionSpeed={2500} tiltReverse={true}>
                    <div className={styles.PortfolioImage}>
                        <img src="/image/stateless.png" alt="stateless" />  
                    </div>
                </Tilt>
                <div className={styles.PortfolioName}> 
                    <p> Stateless Registration </p>
                </div>
            </div>  

            <div className={styles.PortfolioItem}>
                <Tilt transitionSpeed={2500} tiltReverse={true}>
                    <div className={styles.PortfolioImage}>
                        <img src="/image/ekyc.png" alt="ekyc" />  
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
