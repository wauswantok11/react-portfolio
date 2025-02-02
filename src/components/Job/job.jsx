import React from 'react'
import styles from './job.module.css';
import { FaDisplay } from "react-icons/fa6";
import { GrTransaction } from "react-icons/gr";
import { FaServer } from "react-icons/fa";


const job = ({ language }) => {
    const JobTitleText = language === "thai" ? "รายละเอียดงาน" : "Job Description";
    const JobSubOneText = language === "thai" ? "มีความสามารถในการพัฒนา RESTful API โดยใช้ Golang และ JavaScript สามารถใช้ฐานข้อมูล MySQL และ MongoDB ได้" : "Proficient in RESTful API using Golang and JavaScript  Able to use MySQL and MongoDB databases.";
    const JobSubTwoText = language === "thai" ? "สามารถพัฒนาได้โดยใช้ Framework React React-Native และ AngularCLI พร้อม CSSFramework Ng-Zrror MUI" : "Front-end Framework can be developed using React React-Native and AngularCLI with CSSFramework Ng-Zrror MUI.";
    const JobSubTreeText = language === "thai" ? "ความสามารถในการพัฒนาและบำรุงรักษาระบบหลังจากการปรับใช้เพื่อรองรับผู้ใช้และดำเนินการตรวจสอบปริมาณงาน การทดสอบโหลด หรือการทดสอบหน่วยเพื่อปรับปรุงระบบ" : "Ability to develop and maintain systems after deployment to support users and perform workload checks, load-testing, or unit-testing to improve the system.";


  return (
    <div className={styles.JobContainer}>
        <h3 className={styles.JobTitle}>{JobTitleText}</h3>
        <div className={styles.JobContentList}>

            <div className={styles.JobContent}>
                <div className={styles.JobContentIcon}><GrTransaction /></div>
                <h4 className={styles.JobContentTitle}> Back-end Development </h4>
                <p className={styles.JobContentDetail}>
                    {JobSubOneText}
                </p>
            </div>

            <div className={styles.JobContent}>
                <div className={styles.JobContentIcon}><FaDisplay /></div>
                <h4 className={styles.JobContentTitle}> Front-end Development </h4>
                <p className={styles.JobContentDetail}>
                   {JobSubTwoText}
                </p>
            </div>
            <div className={styles.JobContent}>
                <div className={styles.JobContentIcon}><FaServer /></div>
                <h4 className={styles.JobContentTitle}> DevOps Development </h4>
                <p className={styles.JobContentDetail}> 
                {JobSubTreeText}
                </p>
            </div>

        
        </div>
    </div>
  )
}

export default job
