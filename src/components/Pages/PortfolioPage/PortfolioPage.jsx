import React from 'react'
import styles from './portfolioPage.module.scss'
const PortfolioPage = ({ language }) => {
  let title 
  if (language === "thai"){
    title = "ผลงาน"
  } else{
     title = "Portfolio"
  }
  return (
    <div className={styles.PortfolioPageWrapper}>
      <div className={styles.PortfolioPageTitle}> 
        <p>{title}</p>
      </div>
    </div>
  )
}

export default PortfolioPage
