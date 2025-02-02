import React from 'react'
import styles from './portfolioPage.module.scss'
const PortfolioPage = ({ language }) => {
  const title = language === "thai" ? "ผลงาน" : "Portfolio";

  return (
    <div className={styles.PortfolioPageWrapper}>
      <div className={styles.PortfolioPageTitle}> 
        <p>{title}</p>
      </div>
    </div>
  )
}

export default PortfolioPage
