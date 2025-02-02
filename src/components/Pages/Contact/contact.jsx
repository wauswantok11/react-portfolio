import React from 'react'
import styles from './contact.module.scss'
const ContactPage = ({language}) => {
  const title = language === "thai" ? "ช่องทางการติดต่อ" : "Contact";

  return (
    <div className={styles.ContactPageWrapper}>
      <div className={styles.ContactPageTitle}>
        <p>{title}</p>
      </div>
    </div>
  )
}

export default ContactPage
