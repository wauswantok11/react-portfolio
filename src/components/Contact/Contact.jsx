import React, { useState } from 'react'
import styles from './Contact.module.css'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Swal from 'sweetalert2'

const Contact =({language}) => {
  const Contact = language === "thai" ? "ติดต่อ" : "Contact"
  const phone = language === "thai" ? "092-4994561" : "(+66) 92 499 4561"
  const address = language === "thai" ? "91 เพชรเกษม ซอย 12/1 หาดใหญ่ สงขลา 90110" : "  91 Phetkasem 12/1 HatYai Songkhla, Thailand 90110"
  const ForeName = language === "thai" ? "ขื่อ" : "First name"
  const ForeLast = language === "thai" ? "นามสกุล" : "Last name"
  const ForeEmail = language === "thai" ? "อีเมล" : "Email Address"
  const Message = language === "thai" ? "ข้อความ" : "Your Message"
  const Submit =language ==="thai" ? "ยืนยัน" :"Submit"
  const emailMe = "adul.vasuvantok@gmail.com"
  const cols = 30
  const rows = 10
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const validate = () => {
    const newErrors = {};
    if (!fname) newErrors.fname = language === "thai" ? "กรุณากรอก ชื่อ" : "First name is required.";
    if (!lname) newErrors.lname = language === "thai" ? "กรุณากรอก นามสกุล" : "Last name is required.";
    if (!email) {
      newErrors.email = language === "thai" ? "กรุณากรอก อีเมล" : "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = language === "thai" ? "กรุณากรอก อีเมล" :  "Email is invalid.";
    }
    if (!message) newErrors.message = language === "thai" ? "กรุณากรอก ข้อความ" : "Message is required.";

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validate();
    const MessageSubmit = language === "thai" ? "ส่งข้อความสำเร็จ" : "Message sent successfully"
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      Swal.fire({
        title: MessageSubmit,
        icon: "success",
        draggable: true,
        customClass: {
          popup: "custom-swal-popup",
          title: "custom-swal-title",
          confirmButton: "custom-swal-button"
        }
      });
      setFname("");
      setLname("");
      setEmail("");
      setMessage("");
      setErrors({});
    }
    
  }

  return (
    <div className={styles.ContactWrapper}>
      <div className={styles.ContactContainer}>

        <div className={styles.ContactInfo}>
          <h3> {Contact} </h3> 
          <p className={styles.ContactAddress}>
          {address}
          </p>
          <div className={styles.ContactPhone}>
           <FaPhoneAlt /> {phone}
          </div>
          <div className={styles.ContactEmail}>
           <MdEmail /> {emailMe}
          </div>
        </div>

        <div className={styles.ContactForm}>
          <form onSubmit={handleSubmit} className={styles.ContactFormDetail}>
            <div className={styles.ContactGroupInput}>
              <div className={styles.ContactInput}>
                <label htmlFor="First name" > {ForeName} <span>*</span> </label>
                <input value={fname} onChange={(e) => setFname(e.target.value)} name="first_name" id="first_name" type="text" placeholder='eg. Adul' />
                {errors.fname && <span className={styles.ContactErrorMsg}>{errors.fname}</span>}
              </div>
              <div className={styles.ContactInput}>
                <label htmlFor="Last name" >{ForeLast} <span>*</span> </label>
                <input value={lname} onChange={(e) => setLname(e.target.value)} name="last_name" id="last_name" type="text" placeholder='eg. Vasuvantok' />
                {errors.lname && <span className={styles.ContactErrorMsg}>{errors.lname}</span>}
              </div>
            </div>
            <div className={styles.ContactInputEmail}>
              <label htmlFor="Email Address" > {ForeEmail} <span>*</span> </label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email"  type="email" placeholder={"eg. "+emailMe} />
              {errors.email && <span className={styles.ContactErrorMsg}>{errors.email}</span>}
            </div>
            <div className={styles.ContactInputMessage}>
              <label htmlFor="Your Message" >{Message} <span>*</span> </label>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} name="message" id="message" cols={cols} rows={rows} placeholder='Message here' > </textarea>
              {errors.message && <span className={styles.ContactErrorMsg}>{errors.message}</span>}
            </div> 
            <button type="submit" name="btn_submit" id="btn_submit" > {Submit} </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
