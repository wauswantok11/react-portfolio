import React from 'react'
import styles from './biz.module.css'
import PSU from '../../assets/image/PSULogo.png'
import INET from '../../assets/image/INETLOGO.jpg'
import THAIID from '../../assets/image/thaiID.png'

const biz =({language}) => {
    const Organizations = language === "thai" ? "องค์กรที่ร่วมงาน" :"Working Organizations"
    const psuTitle = language === "thai" ? "สำนักการศึกษาและนวัตกรรมการเรียนรู้" :"Work with Education and Innovative Learning Academy"
    const pusSubOne = language === "thai" ? "มหาวิทยาลัยสงขลานครินทร์" :"Prince of Songkla University"
    const pusSubTwo = language === "thai" ? "ตำแหน่ง นักวิชาการคอมพิวเตอร์" :"Computer Scientist"
    
    const inet = language === "thai" ? "บริษัท INET จำกัด (มหาชน)" :"Work with Internet Thailand"
    const inetSubOne = language === "thai" ? "บริษัท INET จำกัด (มหาชน)" :"Internet Thailand"
    const inetSubTwo = language === "thai" ? "ตำแหน่ง Software Engineer" :"Software Engineer"
    
    const one = language === "thai" ? "ทีม ONE ID SERVICE" :"Work with ONE ID SERVICE Team"
    const oneSubOne = language === "thai" ? "บริษัท ไทยไอเด็นติตี้ส์ จำกัด" :" Thai Identities Company limited"
    const oneSubTwo = language === "thai" ? "ตำแหน่ง Software Engineer" :"Software Engineer"


    return (
    <div className={styles.BizContainer}>
        
        <h3 className={styles.BizTitle}>{Organizations}</h3>

        <div className={styles.BizList}> 
            
            <div className={styles.BizItem}>      
                <p>{psuTitle}</p>
                <img src={PSU} alt="PSU" />
                <h4 className={styles.BizName}> {pusSubOne} </h4>
                <p className={styles.BizPositing}> {pusSubTwo} </p>
            </div>

            <div className={styles.BizItem}>      
                <p>{inet}</p>
                <img src={INET} alt="INET" />
                <h4 className={styles.BizName}> {inetSubOne} </h4>
                <p className={styles.BizPositing}> {inetSubTwo} </p>
            </div>

            <div className={styles.BizItem}>      
                <p>{one} </p>
                <img src={THAIID} alt="THAIID" />
                <h4 className={styles.BizName}> {oneSubOne} </h4>
                <p className={styles.BizPositing}> {oneSubTwo} </p>
            </div>

        </div>  
    </div>
  )
}

export default biz
