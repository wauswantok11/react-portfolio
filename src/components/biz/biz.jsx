import React from 'react'
import styles from './biz.module.css'
import PSU from '../../assets/image/PSULogo.png'
import INET from '../../assets/image/INETLOGO.jpg'
import THAIID from '../../assets/image/thaiID.png'

function biz() {
  return (
    <div className={styles.BizContainer}>
        
        <h3 className={styles.BizTitle}>Working Organizations</h3>

        <div className={styles.BizList}> 
            
            <div className={styles.BizItem}>      
                <p>Work with Education and Innovative Learning Academy </p>
                <img src={PSU} alt="PSU" />
                <h4 className={styles.BizName}> Prince of Songkla University </h4>
                <p className={styles.BizPositing}> Computer Scientist </p>
            </div>

            <div className={styles.BizItem}>      
                <p>Work with Internet Thailand </p>
                <img src={INET} alt="INET" />
                <h4 className={styles.BizName}> Internet Thailand </h4>
                <p className={styles.BizPositing}> Software Engineer </p>
            </div>

            <div className={styles.BizItem}>      
                <p>Work with ONE ID SERVICE Team </p>
                <img src={THAIID} alt="THAIID" />
                <h4 className={styles.BizName}>  Thai Identities Company limited </h4>
                <p className={styles.BizPositing}> Software Engineer </p>
            </div>

        </div>  
    </div>
  )
}

export default biz
