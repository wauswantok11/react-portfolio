import React from 'react'
import styles from './contact.module.scss'
function ContactPage() {
  const title = language === "thai" ? "ผลงาน" : "Portfolio";

  return (
    <div className={styles.ContactPageWrapper}>
      <div className={styles.ContactPageTitle}>
        <p>{title}</p>
      </div>
    </div>
  )
}

export default ContactPage
