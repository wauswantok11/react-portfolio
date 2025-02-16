import React, { useState , useEffect, useRef} from "react";
import styles from "./portfolioPage.module.scss"; 
import { TiMediaRecord } from "react-icons/ti";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion } from 'framer-motion'; 
import { IoCloseSharp } from "react-icons/io5";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

const imageGroups = {
  "iot": [
    "/image/project-iot/iot-1.jpeg",
    "/image/project-iot/iot-2.jpeg",
    "/image/project-iot/iot-3.jpeg",
    "/image/project-iot/iot-4.jpeg",
    "/image/project-iot/iot-5.jpeg",
    "/image/project-iot/iot-6.jpeg",
    "/image/project-iot/iot-7.jpeg",
    "/image/project-iot/iot-8.jpeg"
  ],
  "edu": [
    "/image/project-edu/edu-1.jpeg", 
    "/image/project-edu/edu-2.png", 
    "/image/project-edu/edu-3.png", 
    "/image/project-edu/edu-4.png", 
    "/image/project-edu/edu-5.jpeg", 
    "/image/project-edu/edu-6.jpeg", 
    "/image/project-edu/edu-7.jpeg", 
    "/image/project-edu/edu-8.jpeg", 
    "/image/project-edu/edu-9.jpeg", 
  ],
  "coop": [
    "/image/project-coop/coop-0.jpeg", 
    "/image/project-coop/coop-1.jpeg", 
    "/image/project-coop/coop-2.jpeg", 
    "/image/project-coop/coop-3.jpeg", 
    "/image/project-coop/coop-4.jpeg", 
    "/image/project-coop/coop-5.jpeg", 
    "/image/project-coop/coop-6.jpeg", 
    "/image/project-coop/coop-7.jpeg", 
    "/image/project-coop/coop-8.jpeg", 
    "/image/project-coop/coop-9.jpeg", 
    "/image/project-coop/coop-10.jpeg", 
    "/image/project-coop/coop-11.jpeg", 
    "/image/project-coop/coop-12.jpeg", 

  ],
  "stateless":[
    "/image/project-stateless/stateless-1.png", 
    "/image/project-stateless/stateless-2.png", 
    "/image/project-stateless/stateless-3.png", 
    "/image/project-stateless/stateless-4.png", 
    "/image/project-stateless/stateless-5.png", 
    "/image/project-stateless/stateless-6.png", 
    "/image/project-stateless/stateless-7.png", 
    "/image/project-stateless/stateless-8.png", 
  ],
  "um":[
    "/image/project-um/um-1.png",
    "/image/project-um/um-2.png",
    "/image/project-um/um-3.png",
    "/image/project-um/um-4.png",
    "/image/project-um/um-5.png",
    "/image/project-um/um-6.png",
    "/image/project-um/um-7.png",
    "/image/project-um/um-8.png",
    "/image/project-um/um-9.png",
    "/image/project-um/um-10.png",
  ],
  "ekyc":[
    "/image/project-ekyc/ekyc-1.png",
    "/image/project-ekyc/ekyc-2.png",
    "/image/project-ekyc/ekyc-3.png",
    "/image/project-ekyc/ekyc-4.png",
    "/image/project-ekyc/ekyc-5.png",
    "/image/project-ekyc/ekyc-6.png",
    "/image/project-ekyc/ekyc-7.png",
    "/image/project-ekyc/ekyc-8.png",
    "/image/project-ekyc/ekyc-9.png",
    "/image/project-ekyc/ekyc-10.png",
  ]
}

const PortfolioPage = ({ language }) => {
  const title = language === "thai" ? "ผลงาน" : "Portfolio";
  const titleProjectIot = language === "thai" ? "ระบบ วัดคุณภาพน้ำอันโนมัติและแจ้งเตือนสำหรับบ่อกุ้งขาว" :"Automatic water quality measurement and notification system for white shrimp ponds"
  const subTitleProjectIot  = language === "thai" ?  "ผลงานสำหรับจบการศึกษา คณะวิทยาศาสตร์ สาขาเทคโนโลยีสารสนเทศต่อเนื่องมหาวิทยาลัยสงขลานครินทร์ วิทยาเขตหาดใหญ่" : "Work for graduation Faculty of Science Continuing Information Technology Program, Prince of Songkla University Hat Yai Campus"
  const detailProjectIot = language === "thai" ? "พัฒนาระบบติดตามคุณภาพน้ำและเครื่องมือวัดคุณภาพน้ำด้วยอุปกรณ์ IoT พร้อมระบบแสดงผลข้อมูลแบบ Dashboard และติดตามสถานะอุปกรณ์แบบเรียลไทม์ เพื่อสนับสนุนการตัดสินใจของเกษตรกรผู้เลี้ยงกุ้ง โดยช่วยเพิ่มประสิทธิภาพในการจัดการคุณภาพน้ำ ลดภาระงาน และปรับปรุงผลผลิตให้มีคุณภาพสูงขึ้น" :"A water quality monitoring system and its supporting water quality measuring instruments are developed. Data Display System of Internet of Things Based on Dashboard And track that status of the equipment in real time. To support the decision-making of shrimp farmers So it is helpful to improve the efficiency of water quality management and reduce the workload. And improve the output with higher quality."
  const titleDetailIot = language === "thai"? "เทคโนโลยีที่นำมาพัตนาอุปกรณ์และระบบ" :"Technology used to develop devices and systems" 
  const devSystemIot = language === "thai" ? "ในส่วนของการพัตนาระบบ" :"Development of system."
  const detailDevSystemIot =  language === "thai" ? "html css javascript สำหรับการสร้างหน้า UI และ การรับส่งข้อมูล" : "HTML, CSS, and JavaScript are used to create UI pages and data transmission"
  const detailDevSystemIot1 =  language === "thai" ? "NodeJS Php Sql สำหรับการจัดการข้อมูลของระบบ" : "NodeJS Php Sql for system data management"
  const detailDevSystemIot2 =  language === "thai" ? "MysqL สำหรับการจัดการฐานข้อมูลระบบ" : "MysqL for system database management"
  const detailDevSystemIot3 =  language === "thai" ? "firebase realtime database สำหรับการแจ้งตือนข้อมูลแบบเรียวไทม" : "Firebase real-time database for timestamp notification"
  const detailDevSystemIot4 =  language === "thai" ? "ในส่วนของการพัตนาอุปกรณ์ iot":"Development of IoT devices"
  const detailDevSystemIot5 =  language === "thai" ?"Arduino IDE สำหรับการเขียน code เพื่อสั่งงานการทำงานใน อุปกรณ์ iot" : "Arduino IDE is used to write code to command tasks performed on IOT devices."
  const detailDevSystemIot6 =  language === "thai" ?"Node-red สำหรับการจัดการอุปกรณ์" : "Node-red for device management."
  const detailDevSystemIot7 =  language === "thai" ?"NodeMCU ESP8266 อุปกรณ์สำหรับการเชื่อต่อเซ็นเซอร์":"NodeMCU ESP8266, a device for connecting sensors"
  const detailDevSystemIot8 =  language === "thai" ?" EC Sensor Turbidity sensor เซ็นเซอร์สำหรับ การวัดความขุ่นของน้ำ":"EC Sensor Turbidity sensor Sensor for measuring water turbidity"
  const detailDevSystemIot9 =  language === "thai" ?"DS18B20 เซ็นเซอร์ สำหรับวัดอุณหภูมิน้ำ" : "DS18B20 Sensor for Water Temperature Measurement."
  const detailDevSystemIot10 =  language === "thai" ? "Display Module จอแสดงผล LCD โมดูล":"Display Module LCD display module"
  const detailDevSystemIot11 =  language === "thai" ? "ในส่วนของการจัดการ Server":"Server Management section"
  const detailDevSystemIot12 =  language === "thai" ? "Private Server สำหรับการนำ โปรเจคขึ้น Production เพื่อใช้งานจริง":"Private Server for bringing projects to Production for actual use"
  const edu1 = language === "thai" ? "ระบบ คู่มือการศึกษา มหาวิทยาลัยสงขลานครินทร์":"Handbook of the Education System at Prince Songkhla University."
  const edu2 = language === "thai" ? "ผลงานสำหรับการฝึกงาน สำนักการศึกษาและนวัตกรรมการเรียนรู้ มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตหาดใหญ่" :"Internship achievements of the Education and Learning Innovation Office at Prince Songkhla University Hat Yai Campus."
  const edu3 = language === "thai" ? "การพัฒนาระบบคู่มือการศึกษาสำหรับนักศึกษามหาวิทยาลัยสงขลานครินทร์ในทุกระดับการศึกษา เพื่อแก้ปัญหาการอัพโหลดและดาวน์โหลดไฟล์คู่มือผ่านระบบ Admin โดยสามารถจัดการข้อมูลหลักสูตรได้ง่าย ระบบประกอบไปด้วยการพัฒนาหน้าบ้านสำหรับการดาวน์โหลดไฟล์ และระบบหลังบ้านสำหรับการอัพโหลดไฟล์" :"Develop an educational manual system for students at all levels of Prince Songkra University to solve the problem of uploading and downloading manual files through a management system. The system is easy to manage course information. The system includes front-end development for file downloads and back-end development for file uploads."
  const edu4 = language === "thai" ? "ซึ่งสามารถแบ่งบทบาทผู้ใช้งานได้ 5 ระดับ ดังนี้":"Which can divide user roles into 5 levels as follows"
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  const [openModelImage, setOpenModelImage] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexModelImage , setCurrentIndexModelImage]= useState(0);
  const [currentGroup, setCurrentGroup] = useState(null);
  const moduleRef = useRef(null);
  const imageList = imageGroups[currentGroup] || [];
  const [CountImage, setCountImage] = useState(0);

  useEffect(() => {
    setCountImage(1)
  }, []); 

  const keySlide = [
    {key: "slide-1"},
    {key: "slide-2"},
    {key: "slide-3"},
    {key: "slide-4"},
    {key: "slide-5"},
    {key: "slide-6"}
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % keySlide.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + keySlide.length) % keySlide.length);
  };

  const closeModel = () => {
    if (moduleRef.current) {
      moduleRef.current.style.display = "none";
      setOpenModelImage(false);
      setCurrentIndexModelImage(0)
      setCountImage(1)
    }else{
      moduleRef.current.style.display = null;
      setOpenModelImage(true);

    }
  };

  const handleOpenAndClose = () => {
    closeModel();           
    setOpenModelImage(true);  
  };

  const nextImageModel = (array) => {
       let x = currentIndexModelImage + 1 
       setCountImage(x + 1);
       if (x < array.length ){
        setCurrentIndexModelImage(currentIndexModelImage + 1);
       }else{
        setCurrentIndexModelImage(0);
        setCountImage(1);
       }
  };
 
  const prevImageModel = (array) => {
    if (currentIndexModelImage > 0) {
      setCurrentIndexModelImage(currentIndexModelImage - 1);
      setCountImage(currentIndexModelImage);
    }else{
      setCurrentIndexModelImage(array.length - 1);
      setCountImage(array.length);
    }
  };  
 
  return (
    <div className={styles.PortfolioPageWrapper}>
      <div className={styles.PortfolioPageTitle}>
        <div>
          <h3> {title} </h3>
        </div>
      </div>

      <div className={styles.PortfolioPageContent}>
        <div className={styles.PortfolioPageArrowBack}>
          <div className={styles.ArrowBack}>
            <IoIosArrowBack onClick={prevSlide} />
          </div>
        </div>
        <motion.div key={keySlide[currentIndex]?.key } initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className={styles.PortfolioPageCard} >
          {currentIndex === 0 && (
            <div className={styles.PortfolioPageList}>
              <div className={styles.PortfolioPageTitleContent}>
                <h4>{titleProjectIot}</h4>
                <p>
                  {subTitleProjectIot}
                </p>
              </div>
              <div className={styles.PortfolioPageItem}>
                <div className={styles.PortfolioPageItemDetail}>
                  <p>
                    {detailProjectIot}
                  </p>
                  <h4 style={{ marginTop: "20px" }}>
                    {titleDetailIot}
                  </h4>
                  <div style={{ marginLeft: "20px" }}>
                    <h4> {devSystemIot} </h4>
                    <ul>
                      <li>
                        {detailDevSystemIot}
                      </li>
                      <li>{detailDevSystemIot1}</li>
                      <li>{detailDevSystemIot2}</li>
                      <li>{detailDevSystemIot3}</li>
                    </ul>
                    <h4> {detailDevSystemIot4} </h4>
                    <ul>
                      <li>
                        {detailDevSystemIot5}
                      </li>
                      <li>{detailDevSystemIot6}</li>
                      <li>{detailDevSystemIot7}</li>
                      <li>
                       {detailDevSystemIot8}
                      </li>
                      <li>{detailDevSystemIot9}</li>
                      <li>{detailDevSystemIot10}</li>
                    </ul>
                    <h4> {detailDevSystemIot11} </h4>
                    <ul>
                      <li>
                       {detailDevSystemIot12}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.PortfolioPageItemImage}>
                  <div className={styles.PortfolioPageImage} onClick={() => { setCurrentGroup("iot"); handleOpenAndClose(); }} >
                    <img src="/image/project-iot/iot-1.jpeg" alt="image-iot-1" />
                  </div>
                </div>
              </div>
            </div>
          )}
          {currentIndex === 1 && (
            <div className={styles.PortfolioPageList}>
              <div className={styles.PortfolioPageTitleContent}>
                <h4> 
                  <a href="https://edumanual.psu.ac.th/"> { edu1 } </a>
                </h4>
                <p>{ edu2 } </p>
              </div>
              <div className={styles.PortfolioPageItem}>
                <div className={styles.PortfolioPageItemDetail}>
                  <p>{edu3}</p>
                  <p style={{ marginTop: "10px" }}>
                    <b> {edu4} </b>
                  </p>
                  <ul style={{ marginLeft: "20px", marginTop: "0" }}>
                    <li>
                      <b>{language === "thai" ? "ซุปเปอร์แอดมิน":"Super Admin"}</b>
                      {language === "thai" ? "สามารถจัดการข้อมูลทั้งหมดภายในระบบและเพิ่มแอดมินเพื่อดูแลระบบ":"You can manage all data within the system and add admins to manage the system."}
                    </li>
                    <li>
                      <b>{language === "thai" ? "แอดมิน":"Admin"}</b>
                      {language === "thai" ? "สามารถจัดการข้อมูลภายในระบบและดูสถิติการอัพโหลดไฟล์ในแต่ละหลักสูตร":"Can manage data within the system and view file upload statistics in each course."}
                    </li>
                    <li>
                      <b>{language === "thai" ? "แอดมินประจำวิทยาเขต":"Campus Admin"}</b>
                      {language === "thai" ?"สามารถจัดการข้อมูลหลักสูตรและเพิ่มแอดมินประจำคณะภายใต้วิทยาเขตของตนเอง":"Ability to manage course information and add teacher administrators within their own campus."}
                    </li>
                    <li>
                      <b>{language === "thai" ? "แอดมินประจำคณะ":"Faculty Admin"}</b>
                      {language === "thai" ? "สามารถจัดการข้อมูลหลักสูตรภายใต้คณะของตนเอง":"Ability to manage course information under your own team." }
                    </li>
                    <li>
                      <b>{language === "thai" ? "บริหาร":"Management"}</b> 
                      {language === "thai" ? "สามารถดูข้อมูลเชิงสถิติและเข้าถึงฟังก์ชัน Dashboard":"Can view statistics and access Dashboard function"} 
                    </li>
                  </ul>

                  <p style={{ marginTop: "10px" }}>
                    <b>{language === "thai" ? "หน้าที่ที่ได้รับมอบหมาย":"Responsibilities assigned."}</b>
                  </p>
                  <ul style={{ marginLeft: "20px" }}>
                    <li> 
                      {language === "thai" ? "ดูแลและแก้ไขปัญหาที่เกิดขึ้นในระบบหรือเกี่ยวข้องกับระบบได้":"Manage and resolve issues that occur in the system or are related to the system."}  
                    </li>
                    <li> 
                        {language === "thai" ? "พัฒนาระบบสร้างฟีเจอร์ใหม่ั้งในส่วนของ Back-end และ Front-end อย่างครบถ้วน":"Develop new features for both the backend and frontend. "}
                    </li>
                    <li> 
                      {language === "thai" ? "รับ Requirement ใหม่และแก้ปัญหาที่เกิดขึ้นจากผู้ใช้งาน ทดแทนในส่วยของ SA":"Obtain new requirements and solve the problems that users encounter when paying tribute to SA."}
                    </li>
                    <li> {language === "thai" ? "ออกแบบการทำงานและ UX/UI ของระบบทดแทนในส่วยของ SA ":"Design the functionality and UX/UI of the SA replacement system."} </li>
                    <li> {language === "thai" ? "ควบคุมการทำงานให้เสร็จก่อนระยะเวลาที่กำหนด":"Complete the work within the specified time."} </li>
                  </ul>
                </div>
                <div className={styles.PortfolioPageItemImage}>
                  <div className={styles.PortfolioPageImage} onClick={() => { setCurrentGroup("edu"); handleOpenAndClose(); }}>
                    <img src="/image/project-edu/edu-1.jpeg" alt="edu" /> 
                  </div>
                </div>
              </div>
            </div>
          )}
          {currentIndex === 2 && (
            <div className={styles.PortfolioPageList}>
              <div className={styles.PortfolioPageTitleContent}>
                <h4>ระบบ ติดตามนักศึกษาสหกิจศึกษา มหาวิทยาลัยสงขลานครินทร์</h4>
                <p>
                  ผลงานในตำแหน่งนักวิชาการคอมพิวเตอร์
                  สำนักการศึกษาและนวัตกรรมการเรียนรู้ มหาวิทยาลัยสงขลานครินทร์
                  วิทยาเขตหาดใหญ่
                </p>
              </div>
              <div className={styles.PortfolioPageItem}>
                <div className={styles.PortfolioPageItemDetail}>
                  <p>
                    การพัฒนาระบบติดตามสหกิจศึกษา
                    สำหรับนักศึกษามหาวิทยาลัยสงขลานครินทร์
                    เพื่อแก้ไขปัญหาการติดตามนักศึกษาที่ออกฝึกงานในรูปแบบสหกิจศึกษา
                    โดยสามารถจัดการข้อมูลสหกิจศึกษาได้ทั้งหมด เช่น
                    การติดตามสถานะการทำงาน, การอัปโหลดไฟล์ผลงาน,
                    การประเมินองค์กรหรือหน่วยงานที่ฝึกสหกิจ
                    นอกจากนี้ยังสามารถนำข้อมูลที่ได้ไปวิเคราะห์เพื่อพัฒนานักศึกษา
                    และแนะนำสถานประกอบการหรือหน่วยงานที่เหมาะสม
                    ข้อมูลเหล่านี้จะถูกนำมาสร้างเป็น Dashboard
                    เพื่อจัดทำรายงานประจำปี
                  </p>
                  <p style={{ marginTop: "10px" }}>
                    <b>ระบบสามารถแบ่งบทบาทผู้ใช้งานได้ 5 ระดับ ดังนี้:</b>
                  </p>
                  <ul style={{ marginLeft: "20px" }}>
                    <li>
                      <b>ซุปเปอร์แอดมิน</b> สามารถจัดการข้อมูลทั้งหมดในระบบ
                      และสามารถเพิ่มแอดมินเพื่อดูแลระบบ
                    </li>
                    <li>
                      <b>แอดมิน</b>{" "}
                      สามารถจัดการข้อมูลภายในระบบและดูสถิติการอัปโหลดไฟล์ในแต่ละหลักสูตร
                    </li>
                    <li>
                      <b>แอดมินประจำวิทยาเขต</b>{" "}
                      สามารถจัดการข้อมูลนักศึกษาและเพิ่มแอดมินประจำคณะภายใต้วิทยาเขตของตนเอง
                    </li>
                    <li>
                      <b>แอดมินประจำคณะ</b>{" "}
                      สามารถจัดการข้อมูลนักศึกษาภายใต้คณะของตนเอง
                    </li>
                    <li>
                      <b>ผู้บริหาร</b> สามารถดูข้อมูลเชิงสถิติและเข้าถึงฟังก์ชัน
                      Dashboard
                      เพื่อนำข้อมูลไปใช้ในการบริหารจัดการและพัฒนานักศึกษา
                    </li>
                  </ul>
                  <p style={{ marginTop: "10px" }}>
                    {" "}
                    <b> หน้าที่ที่ได้รับมอบหมาย </b>{" "}
                  </p>
                  <ul style={{ marginLeft: "20px" }}>
                    <li>
                      {" "}
                      ดูแลและแก้ไขปัญหาที่เกิดขึ้นในระบบหรือเกี่ยวข้องกับระบบได้
                    </li>
                    <li>
                      {" "}
                      พัฒนาระบบสร้างฟีเจอร์ใหม่ั้งในส่วนของ Back-end และ
                      Front-end อย่างครบถ้วน
                    </li>
                    <li>
                      {" "}
                      รับ Requirement ใหม่และแก้ปัญหาที่เกิดขึ้นจากผู้ใช้งาน
                      ทดแทนในส่วยของ SA
                    </li>
                    <li> ออกแบบการทำงานและ UX/UI ของระบบทดแทนในส่วยของ SA </li>
                    <li> ควบคุมการทำงานให้เสร็จก่อนระยะเวลาที่กำหนด </li>
                  </ul>
                </div>
                <div className={styles.PortfolioPageItemImage}>
                  <div className={styles.PortfolioPageImage} onClick={() => {
                      setCurrentGroup("coop");
                      handleOpenAndClose();
                    }}>
                    <img src="/image/project-coop/coop-0.jpeg" />
                  </div>
                </div>
              </div>
            </div>
          )}
          {currentIndex === 3 && (
            <div className={styles.PortfolioPageList}>
              <div className={styles.PortfolioPageTitleContent}>
                <h4>ระบบ ลงทะเบียนสำหรับบุคคลไร้รัฐ </h4>
                <p>
                  ผลงานในตำแหน่ง Software Engineer (Back-end) บริษัท
                  อินเทอร์เน็ตประเทศไทย จำกัน (มหาชน)
                </p>
              </div>
              <div className={styles.PortfolioPageItem}>
                <div className={styles.PortfolioPageItemDetail}>
                  <p>
                    การพัฒนาระบบลงทะเบียนสำหรับบุคคลไร้รัฐ
                    โดยผู้รับบริการสามารถลงทะเบียนตามข้อมูลเลขบัตรประจำตัวประชาชน
                    หรือใช้หลักฐานทางชีวภาพ (BIO-ID)
                    เพื่อขอรับสิทธิการรักษาตามโรงพยาบาลที่ได้ลงทะเบียนไว้
                    ระบบสามารถทำธุรกรรม (Transaction) เช่น
                    การแจ้งย้ายโรงพยาบาลหรือหน่วยบริการผ่านระบบ
                    โดยแอดมินสามารถตรวจสอบและพิจารณาอนุมัติหรือปฏิเสธคำร้องได้
                    นอกจากนี้
                    ผู้รับบริการยังสามารถทำธุรกรรมเพื่อขอเปลี่ยนแปลงสิทธิการรักษา
                    หรืออัปเดตข้อมูลส่วนตัวผ่านระบบได้ เมื่อการลงทะเบียนสำเร็จ
                    ผู้รับบริการสามารถเข้าถึงระบบอื่น ๆ
                    ที่เกี่ยวข้องกับการแพทย์ภายในประเทศ เช่น แอปพลิเคชัน
                    "หมอพร้อม" ระบบตรวจสอบสถานะ
                    และการยืนยันข้อมูลบุคคลบนแพลตฟอร์ม "หมอพร้อม (Health-ID)"
                    สามารถเพิ่มหรือแก้ไขข้อมูลโรงพยาบาลหรือหน่วยบริการ
                  </p>
                  <p style={{ marginTop: "10px" }}>
                    <b>ระบบสามารถแบ่งบทบาทผู้ใช้งานได้ 2 ระดับ ดังนี้</b>
                  </p>
                  <ul style={{ marginLeft: "20px" }}>
                    <li>
                      <b>แอดมิน</b> – สามารถจัดการข้อมูลทั้งหมดในระบบ
                      และมีสิทธิ์อนุมัติหรือปฏิเสธคำร้องขอเปลี่ยนแปลงข้อมูลของผู้รับบริการ
                    </li>
                    <li>
                      <b>ผู้ใช้งาน (เจ้าหน้าที่ประจำโรงพยาบาล)</b> –
                      สามารถเพิ่มข้อมูลของผู้รับบริการ
                      ตามโรงพยาบาลที่ได้รับมอบหมาย
                    </li>
                  </ul>
                  <p style={{ marginTop: "10px" }}>
                    {" "}
                    <b> หน้าที่ที่ได้รับมอบหมาย </b>{" "}
                  </p>
                  <ul style={{ marginLeft: "20px" }}>
                    <li>
                      {" "}
                      ดูแลและแก้ไขปัญหาที่เกิดขึ้นในระบบหรือเกี่ยวข้องกับระบบได้
                    </li>
                    <li>
                      {" "}
                      พัฒนาระบบสร้างฟีเจอร์ใหม่ั้งในส่วนของ Back-end และ
                      Front-end อย่างครบถ้วน
                    </li>
                    <li>
                      {" "}
                      รับ Requirement ใหม่และแก้ปัญหาที่เกิดขึ้นจากทีม BA หรือ
                      Support ทดแทนในส่วยของ SA
                    </li>
                    <li> ออกแบบการทำงานและ UX/UI ของระบบทดแทนในส่วยของ SA </li>
                    <li> ควบคุมการทำงานให้เสร็จก่อนระยะเวลาที่กำหนด </li>
                  </ul>
                </div>
                <div className={styles.PortfolioPageItemImage}>
                  <div className={styles.PortfolioPageImage} onClick={() => {
                      setCurrentGroup("stateless");
                      handleOpenAndClose();
                    }}>
                    <img src="/image/project-stateless/stateless-1.png" />
                  </div>
                </div>
              </div>
            </div>
          )}
          {currentIndex === 4 && (
            <div className={styles.PortfolioPageList}>
              <div className={styles.PortfolioPageTitleContent}>
                <h4>
                  <a href="https://um.id.th/">ระบบ บริหารจัดการสิทธิ์</a>{" "}
                </h4>
                <p>
                  ผลงานในตำแหน่ง Software Engineer (Back-end) บริษัท
                  อินเทอร์เน็ตประเทศไทย จำกัน (มหาชน)
                </p>
              </div>
              <div className={styles.PortfolioPageItem}>
                <div className={styles.PortfolioPageItemDetail}>
                  <p>
                    การพัฒนาระบบบริหารจัดการสิทธิ์นี้ถูกออกแบบมาเพื่อเพิ่มข้อมูลบัญชีผู้ใช้งานจำนวนมาก
                    โดยสามารถนำเข้าข้อมูล ผ่านไฟล์ Excel
                    เพื่อลดขั้นตอนการทำงานที่ซับซ้อนหรือไม่จำเป็น
                    และเก็บข้อมูลการลงทะเบียนเข้าใช้งานเบื้องต้นในแต่ละ
                    ประเภทข้อมูลรวมถึงการตั้งค่า Portal
                    สำหรับการเข้าถึงข้อมูลในระบบอื่น ๆ
                    <br />
                    <b>สามารถแบ่งบทบาทผู้ใช้งานได้ 2 ระดับ ดังนี้</b>
                  </p>
                  <ul style={{ marginLeft: "20px" }}>
                    <li>
                      <b>แอดมิน</b> – สามารถจัดการข้อมูลจัดการบัญชีนิติบุคคล
                      สามารถเพิ่มหรือลบผู้ดูแลระบบ เข้าถึงข้อมูล Dashboard
                      สามารถเพิ่ม Service Client สำหรับแชร์ข้อมูลกับระบบอื่นๆ
                      สามารถส่งข้อความแจ้งเตือนการขอใบรับรองอิเล็กทรอนิกส์
                      (Certificate Authority)
                      สามารถตั้งค่าการแจ้งเตือนสำหรับการเปลี่ยนรหัสผ่านตามข้อมูลองค์กร
                      สามารถตั้งค่าการแสดงข้อความสำหรับ นโยบายในแต่ละองค์กร
                    </li>
                    <li>
                      <b>ผู้ใช้งาน</b> –
                      สามารถเพิ่มข้อมูลของผู้ใช้งานได้จำนวนมากตามประเภทข้อมูลด้วยไฟล์
                      Excel
                      สามารถกำหนดสิทธิการเข้าถึงข้อมูลสำหรับการตรวจสอบและแลกเปลี่ยนข้อมูลของผู้ใช้งาน
                    </li>
                  </ul>
                  <p style={{ marginTop: "10px" }}>
                    {" "}
                    <b> หน้าที่ที่ได้รับมอบหมาย </b>{" "}
                  </p>
                  <ul style={{ marginLeft: "20px" }}>
                    <li>
                      {" "}
                      ดูแลและแก้ไขปัญหาที่เกิดขึ้นในระบบหรือเกี่ยวข้องกับระบบได้
                    </li>
                    <li>
                      {" "}
                      พัฒนาระบบสร้างฟีเจอร์ใหม่ั้งในส่วนของ Back-end และ
                      Front-end อย่างครบถ้วน
                    </li>
                    <li>
                      {" "}
                      รับ Requirement ใหม่และแก้ปัญหาที่เกิดขึ้นจากทีม BA หรือ
                      Support ทดแทนในส่วยของ SA
                    </li>
                    <li> ออกแบบการทำงานและ UX/UI ของระบบทดแทนในส่วยของ SA </li>
                    <li> ควบคุมการทำงานให้เสร็จก่อนระยะเวลาที่กำหนด </li>
                  </ul>
                </div>
                <div className={styles.PortfolioPageItemImage}>
                  <div className={styles.PortfolioPageImage} onClick={() => {
                      setCurrentGroup("um");
                      handleOpenAndClose();
                    }}>
                    <img src="/image/project-um/um-1.png" />
                  </div>
                </div>
              </div>
            </div>
          )}
          {currentIndex === 5 && (
            <div className={styles.PortfolioPageList}>
              <div className={styles.PortfolioPageTitleContent}>
                <h4>
                  <a href="https://ekyc2.id.th/homepage">
                    ระบบ พิสูจน์ยืนยันตัวตน
                  </a>{" "}
                </h4>
                <p>
                  ผลงานในตำแหน่ง Software Engineer (Back-end) บริษัท
                  อินเทอร์เน็ตประเทศไทย จำกัน (มหาชน)
                </p>
              </div>
              <div className={styles.PortfolioPageItem}>
                <div className={styles.PortfolioPageItemDetail}>
                  <p>
                    การพัฒนาระบบพิสูจน์ยืนยันตัวตน
                    สามารถยืนยันตัวตนออนไลน์ผ่านแพลตฟอร์มได้ด้วยการถ่ายรูปบัตรประชาชน
                    และรูปตนเองคู่บัตร
                    เพื่อเพิ่มความหน้าเชื่อถือในการใช้งานระบบอื่นๆ
                    ที่ต้องการตรวจสอบข้อมูลส่วนตัวและสามารถตรวจสอบข้อมูลผ่านระบบกรมการปกครอง
                    มีการตรวจสอบรูปภาพหน้าบัตรประชาชนและหน้าตนเอง ด้วย AI
                    สำหรับการยืนยันตัวตน
                  </p>
                  <p style={{ marginTop: "10px" }}>
                    <b>สามารถแบ่งบทบาทผู้ใช้งานได้ 2 ระดับ ดังนี้</b>
                  </p>
                  <ul style={{ marginLeft: "20px" }}>
                    <li>
                      <b>แอดมิน</b> – สามารถ ตรวจสอบข้อมูลผู้ใช้งานและสามารถ
                      ยืนยันหรือยกเลือกการยืนยันตัวตนในกรณีที่ ระบบ AI
                      ไม่สามารถตรวจสอบรูปภาพว่าตรงกันหรือไม่ สามารถออก Cilent
                      สำหรับการแชร์ข้อมูลการยืนยันตัวตนกับระบบอื่นๆ
                      ที่ต้องการตรวจสอบความหน้าเชื่อถือของข้อมูล
                      สามารถตั้งค่าการ Redirect สำหรับการใช้งานระบบ บน
                      แอปพลิเคชันอื่นๆ
                    </li>
                    <li>
                      <b>ผู้ใช้งาน</b> – สามารถ ถ่ายรูปตนเองพร้อมบัตรประชาชน
                      และรูปหน้าบัตรประชาชน ในการยืนยันตัวตน
                      และสามารถเพิ่มข้อมูล ธุรกรรมทางการเงินได้
                    </li>
                  </ul>
                  <p style={{ marginTop: "10px" }}>
                    {" "}
                    <b> หน้าที่ที่ได้รับมอบหมาย </b>{" "}
                  </p>
                  <ul style={{ marginLeft: "20px" }}>
                    <li>
                      {" "}
                      ดูแลและแก้ไขปัญหาที่เกิดขึ้นในระบบหรือเกี่ยวข้องกับระบบได้
                    </li>
                    <li>
                      {" "}
                      พัฒนาระบบสร้างฟีเจอร์ใหม่ั้งในส่วนของ Back-end และ
                      Front-end อย่างครบถ้วน
                    </li>
                    <li>
                      {" "}
                      รับ Requirement ใหม่และแก้ปัญหาที่เกิดขึ้นจากทีม BA หรือ
                      Support ทดแทนในส่วยของ SA
                    </li>
                    <li> ออกแบบการทำงานและ UX/UI ของระบบทดแทนในส่วยของ SA </li>
                    <li> ควบคุมการทำงานให้เสร็จก่อนระยะเวลาที่กำหนด </li>
                  </ul>
                </div>
                <div className={styles.PortfolioPageItemImage}>
                  <div className={styles.PortfolioPageImage} onClick={() => {
                      setCurrentGroup("ekyc");
                      handleOpenAndClose();
                    }}>
                    <img src="/image/project-ekyc/ekyc-1.png" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
        <div className={styles.PortfolioPageArrowForward}>
          <div className={styles.ArrowForward}>
            <IoIosArrowForward onClick={nextSlide} />
          </div>
        </div>
      </div>

      <div className={styles.PortfolioPageContainerSlide}>
        <div className={styles.PortfolioPageMailSlide}>
          <div className={styles.PortfolioPageSlide}>
            {keySlide.map((item, index) => (
              <div
                key={item.key}
                className={styles.PortfolioPageRecord}
                style={{
                  color: index === currentIndex ? "#0085ff" : "#939393",
                }}
                onClick={() => setCurrentIndex(index)}
              >
                <TiMediaRecord />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div ref={moduleRef} className={styles.PortfolioPageImagesModal}  onOpenChange={openModelImage}  style={{ display: openModelImage ? "block" : "none" }} >
          <span  className={styles.PortfolioPageModelClose} onClick={closeModel}  >
            <IoCloseSharp/>
          </span>
          <div className={styles.PortfolioPageNumberOfPictures} >
            <p> {CountImage} / {imageList.length}  </p>
          </div>
          <div className={styles.PortfolioPageImageFullModel}>
            <div onClick={() => prevImageModel(imageGroups[currentGroup]) } className={styles.PortfolioPageDropLeftModelImage}>
              <IoIosArrowDropleft/>
            </div>
            <img src={imageList[currentIndexModelImage]} /> 
            <div onClick={() => nextImageModel(imageGroups[currentGroup]) } className={styles.PortfolioPageDropRightModelImage}>
              <IoIosArrowDropright/>
            </div>
          </div>
      </div>
    </div>
  );
}; 

export default PortfolioPage;
