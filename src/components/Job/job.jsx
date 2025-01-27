import React from 'react'
import styles from './job.module.css';
import { FaDisplay } from "react-icons/fa6";
import { GrTransaction } from "react-icons/gr";
import { FaServer } from "react-icons/fa";


function job() {
  return (
    <div className={styles.JobContainer}>
        <h3 className={styles.JobTitle}>Job Description</h3>
        <div className={styles.JobContentList}>

            <div className={styles.JobContent}>
                <div className={styles.JobContentIcon}><GrTransaction /></div>
                <h4 className={styles.JobContentTitle}> Back-end Development </h4>
                <p className={styles.JobContentDetail}>
                    Proficient in RESTful API backend development using Golang and JavaScript  Able to use MySQL and MongoDB databases.
                </p>
            </div>

            <div className={styles.JobContent}>
                <div className={styles.JobContentIcon}><FaDisplay /></div>
                <h4 className={styles.JobContentTitle}> Front-end Development </h4>
                <p className={styles.JobContentDetail}>
                    Front-end Framework can be developed using React React-Native and AngularCLI with CSSFramework Ng-Zrror MUI.
                </p>
            </div>
            <div className={styles.JobContent}>
                <div className={styles.JobContentIcon}><FaServer /></div>
                <h4 className={styles.JobContentTitle}> DevOps Development </h4>
                <p className={styles.JobContentDetail}> 
                Ability to develop and maintain systems after deployment to support users and perform workload checks, load-testing, or unit-testing to improve the system.                </p>
            </div>

        
        </div>
    </div>
  )
}

export default job
