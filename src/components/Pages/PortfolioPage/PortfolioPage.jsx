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
  const edu5 = language === "thai" ? "ซุปเปอร์แอดมิน":"Super Admin"
  const edu6 =language === "thai" ? "สามารถจัดการข้อมูลทั้งหมดภายในระบบและเพิ่มแอดมินเพื่อดูแลระบบ":"You can manage all data within the system and add admins to manage the system."
  const edu7 =language === "thai" ? "แอดมิน":"Admin"
  const edu8 =language === "thai" ? "สามารถจัดการข้อมูลภายในระบบและดูสถิติการอัพโหลดไฟล์ในแต่ละหลักสูตร":"Can manage data within the system and view file upload statistics in each course."
  const edu9 =language === "thai" ? "แอดมินประจำวิทยาเขต":"Campus Admin"
  const edu10 =language === "thai" ?"สามารถจัดการข้อมูลหลักสูตรและเพิ่มแอดมินประจำคณะภายใต้วิทยาเขตของตนเอง":"Ability to manage course information and add teacher administrators within their own campus."
  const edu11 =language === "thai" ? "แอดมินประจำคณะ":"Faculty Admin"
  const edu12 =language === "thai" ? "สามารถจัดการข้อมูลหลักสูตรภายใต้คณะของตนเอง":"Ability to manage course information under your own team."
  const edu13 =language === "thai" ? "บริหาร":"Management"
  const edu14 =language === "thai" ? "สามารถดูข้อมูลเชิงสถิติและเข้าถึงฟังก์ชัน Dashboard":"Can view statistics and access Dashboard function"
  const edu15 =language === "thai" ? "หน้าที่ที่ได้รับมอบหมาย":"Responsibilities assigned."
  const edu16 =language === "thai" ? "ดูแลและแก้ไขปัญหาที่เกิดขึ้นในระบบหรือเกี่ยวข้องกับระบบได้":"Manage and resolve issues that occur in the system or are related to the system."
  const edu17 =language === "thai" ? "พัฒนาระบบสร้างฟีเจอร์ใหม่ั้งในส่วนของ Back-end และ Front-end อย่างครบถ้วน":"Develop new features for both the backend and frontend. "
  const edu18 =language === "thai" ? "รับ Requirement ใหม่และแก้ปัญหาที่เกิดขึ้นจากผู้ใช้งาน ทดแทนในส่วยของ SA":"Obtain new requirements and solve the problems that users encounter when paying tribute to SA."
  const edu19 =language === "thai" ? "ออกแบบการทำงานและ UX/UI ของระบบทดแทนในส่วยของ SA ":"Design the functionality and UX/UI of the SA replacement system."
  const edu20 =language === "thai" ? "ควบคุมการทำงานให้เสร็จก่อนระยะเวลาที่กำหนด":"Complete the work within the specified time."
 
  const coop1 = language === "thai" ? "ระบบ ติดตามนักศึกษาสหกิจศึกษา มหาวิทยาลัยสงขลานครินทร์" : "Cooperative Education Tracking System, Prince of Songkla University";
  const coop2 = language === "thai" ? "ผลงานในตำแหน่งนักวิชาการคอมพิวเตอร์ สำนักการศึกษาและนวัตกรรมการเรียนรู้ มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตหาดใหญ่" : "Work as a Computer Science Academic Officer, Office of Education and Learning Innovation, Prince of Songkla University, Hat Yai Campus";
  const coop3 = language === "thai" ? "การพัฒนาระบบติดตามสหกิจศึกษา สำหรับนักศึกษามหาวิทยาลัยสงขลานครินทร์เพื่อแก้ไขปัญหาการติดตามนักศึกษาที่ออกฝึกงานในรูปแบบสหกิจศึกษาโดยสามารถจัดการข้อมูลสหกิจศึกษาได้ทั้งหมด เช่น การติดตามสถานะการทำงาน, การอัปโหลดไฟล์ผลงาน, การประเมินองค์กรหรือหน่วยงานที่ฝึกสหกิจ นอกจากนี้ยังสามารถนำข้อมูลที่ได้ไปวิเคราะห์เพื่อพัฒนานักศึกษาและแนะนำสถานประกอบการหรือหน่วยงานที่เหมาะสมข้อมูลเหล่านี้จะถูกนำมาสร้างเป็น Dashboard เพื่อจัดทำรายงานประจำปี" : "Development of a Cooperative Education Tracking System for Prince of Songkla University students to address issues in tracking students on internships in cooperative education. The system allows managing cooperative education data, such as monitoring work status, uploading reports, and evaluating organizations or agencies. Data collected will be analyzed to improve students and recommend suitable enterprises or organizations. This data will be used to create a Dashboard for generating annual reports.";
  const coop4 = language === "thai" ? "ระบบสามารถแบ่งบทบาทผู้ใช้งานได้ 5 ระดับ ดังนี้" : "The system can assign user roles in 5 levels as follows:";
  const coop5 = language === "thai" ? "ซุปเปอร์แอดมิน" : "Super Admin";
  const coop6 = language === "thai" ? "สามารถจัดการข้อมูลทั้งหมดในระบบ และสามารถเพิ่มแอดมินเพื่อดูแลระบบ" : "Can manage all system data and add admins to manage the system";
  const coop7 = language === "thai" ? "แอดมิน" : "Admin";
  const coop8 = language === "thai" ? "สามารถจัดการข้อมูลภายในระบบและดูสถิติการอัปโหลดไฟล์ในแต่ละหลักสูตร" : "Can manage system data and view file upload statistics per course";
  const coop9 = language === "thai" ? "แอดมินประจำวิทยาเขต" : "Campus Admin";
  const coop10 = language === "thai" ? "สามารถจัดการข้อมูลนักศึกษาและเพิ่มแอดมินประจำคณะภายใต้วิทยาเขตของตนเอง" : "Can manage student data and add faculty admins within their campus";
  const coop11 = language === "thai" ? "แอดมินประจำคณะ" : "Faculty Admin";
  const coop12 = language === "thai" ? "สามารถจัดการข้อมูลนักศึกษาภายใต้คณะของตนเอง" : "Can manage student data within their faculty";
  const coop13 = language === "thai" ? "ผู้บริหาร" : "Executive";
  const coop14 = language === "thai" ? "สามารถดูข้อมูลเชิงสถิติและเข้าถึงฟังก์ชัน Dashboard เพื่อนำข้อมูลไปใช้ในการบริหารจัดการและพัฒนานักศึกษา" : "Can view statistical data and access Dashboard functions to use the data for student management and development";
  const coop15 = language === "thai" ? "หน้าที่ที่ได้รับมอบหมาย" : "Assigned Duties";
  const coop16 = language === "thai" ? "ดูแลและแก้ไขปัญหาที่เกิดขึ้นในระบบหรือเกี่ยวข้องกับระบบได้" : "Maintain and resolve issues related to the system";
  const coop17 = language === "thai" ? "พัฒนาระบบสร้างฟีเจอร์ใหม่ั้งในส่วนของ Back-end และ Front-end อย่างครบถ้วน" : "Develop the system by creating new features in both Back-end and Front-end fully";
  const coop18 = language === "thai" ? "รับ Requirement ใหม่และแก้ปัญหาที่เกิดขึ้นจากผู้ใช้งานทดแทนในส่วยของ SA" : "Receive new requirements and resolve issues raised by users, replacing SA roles";
  const coop19 = language === "thai" ? "ออกแบบการทำงานและ UX/UI ของระบบทดแทนในส่วยของ SA" : "Design system workflows and UX/UI, replacing SA roles";
  const coop20 = language === "thai" ? "ควบคุมการทำงานให้เสร็จก่อนระยะเวลาที่กำหนด" : "Ensure tasks are completed before the set deadline";
                
  const str1 = language === "thai" ? "ระบบ ลงทะเบียนสำหรับบุคคลไร้รัฐ" : "Stateless Registration System";
  const str2 = language === "thai" ? "ผลงานในตำแหน่ง Software Engineer (Back-end) บริษัท อินเทอร์เน็ตประเทศไทย จำกัด (มหาชน)" : "Work as Software Engineer (Back-end) at Internet Thailand Co., Ltd. (Public Company)";
  const str3 = language === "thai" ? "การพัฒนาระบบลงทะเบียนสำหรับบุคคลไร้รัฐโดยผู้รับบริการสามารถลงทะเบียนตามข้อมูลเลขบัตรประจำตัวประชาชน หรือใช้หลักฐานทางชีวภาพ (BIO-ID)เพื่อขอรับสิทธิการรักษาตามโรงพยาบาลที่ได้ลงทะเบียนไว้ ระบบสามารถทำธุรกรรม (Transaction) เช่น การแจ้งย้ายโรงพยาบาลหรือหน่วยบริการผ่านระบบโดยแอดมินสามารถตรวจสอบและพิจารณาอนุมัติหรือปฏิเสธคำร้องได้นอกจากนี้ผู้รับบริการยังสามารถทำธุรกรรมเพื่อขอเปลี่ยนแปลงสิทธิการรักษาหรืออัปเดตข้อมูลส่วนตัวผ่านระบบได้ เมื่อการลงทะเบียนสำเร็จผู้รับบริการสามารถเข้าถึงระบบอื่นๆ ที่เกี่ยวข้องกับการแพทย์ภายในประเทศ เช่น แอปพลิเคชัน  'หมอพร้อม' ระบบตรวจสอบสถานะและการยืนยันข้อมูลบุคคลบนแพลตฟอร์ม 'หมอพร้อม (Health-ID)' สามารถเพิ่มหรือแก้ไขข้อมูลโรงพยาบาลหรือหน่วยบริการ" : "Development of a registration system for stateless individuals, allowing them to register with their national ID number or biological proof (BIO-ID) to access medical treatment at registered hospitals. The system facilitates transactions such as hospital or service unit transfer requests, which admin can review and approve or deny. Additionally, users can update their medical rights or personal information through the system. Once registration is complete, users can access other medical-related systems in the country, such as the 'Doctor Phrom' application and the 'Health-ID' platform for status verification and information updates, including hospital or service unit data.";
  const str4 = language === "thai" ? "ระบบสามารถแบ่งบทบาทผู้ใช้งานได้ 2 ระดับ ดังนี้" : "The system can assign user roles in 2 levels as follows:";
  const str5 = language === "thai" ? "แอดมิน" : "Admin";
  const str6 = language === "thai" ? "สามารถจัดการข้อมูลทั้งหมดในระบบและมีสิทธิ์อนุมัติหรือปฏิเสธคำร้องขอเปลี่ยนแปลงข้อมูลของผู้รับบริการ" : "Can manage all system data and has the authority to approve or deny requests for changing user information";
  const str7 = language === "thai" ? "ผู้ใช้งาน (เจ้าหน้าที่ประจำโรงพยาบาล)" : "User (Hospital Staff)";
  const str8 = language === "thai" ? "สามารถเพิ่มข้อมูลของผู้รับบริการตามโรงพยาบาลที่ได้รับมอบหมาย" : "Can add user information based on assigned hospital";
  const str9 = language === "thai" ? "หน้าที่ที่ได้รับมอบหมาย" : "Assigned Duties";
  const str10 = language === "thai" ? "ดูแลและแก้ไขปัญหาที่เกิดขึ้นในระบบหรือเกี่ยวข้องกับระบบได้" : "Maintain and resolve issues related to the system";
  const str11 = language === "thai" ? "พัฒนาระบบสร้างฟีเจอร์ใหม่ทั้งในส่วนของ Back-end และ Front-end อย่างครบถ้วน" : "Develop the system by creating new features in both Back-end and Front-end fully";
  const str12 = language === "thai" ? "รับ Requirement ใหม่และแก้ปัญหาที่เกิดขึ้นจากทีม BA หรือ Support ทดแทนในส่วนของ SA" : "Receive new requirements and resolve issues raised by the BA or Support teams, replacing SA roles";
  const str13 = language === "thai" ? "ออกแบบการทำงานและ UX/UI ของระบบทดแทนในส่วนของ SA" : "Design system workflows and UX/UI, replacing SA roles";
  const str14 = language === "thai" ? "ควบคุมการทำงานให้เสร็จก่อนระยะเวลาที่กำหนด" : "Ensure tasks are completed before the set deadline";
  
  const um1 = language === "thai" ? "ระบบ บริหารจัดการสิทธิ์" : "User Management System";
  const um2 = language === "thai" ? "ผลงานในตำแหน่ง Software Engineer (Front-end / Back-end) บริษัทอินเทอร์เน็ตประเทศไทย จำกัด (มหาชน)" : "Work as Software Engineer (Front-end / Back-end) at Internet Thailand Co., Ltd. (Public Company)";
  const um3 = language === "thai" ? "การพัฒนาระบบบริหารจัดการสิทธิ์นี้ถูกออกแบบมาเพื่อเพิ่มข้อมูลบัญชีผู้ใช้งานจำนวนมากโดยสามารถนำเข้าข้อมูล ผ่านไฟล์ Excel เพื่อลดขั้นตอนการทำงานที่ซับซ้อนหรือไม่จำเป็นและเก็บข้อมูลการลงทะเบียนเข้าใช้งานเบื้องต้นในแต่ละประเภทข้อมูลรวมถึงการตั้งค่า Portal สำหรับการเข้าถึงข้อมูลในระบบอื่นๆ" : "This Permission Management System is designed to add a large number of user accounts by importing data through an Excel file to reduce unnecessary or complicated steps, and store the initial registration data for each data type, including portal settings for accessing other systems' data.";
  const um4 = language === "thai" ? "สามารถแบ่งบทบาทผู้ใช้งานได้ 2 ระดับ ดังนี้" : "The system can assign user roles in 2 levels as follows:";
  const um5 = language === "thai" ? "แอดมิน" : "Admin";
  const um6 = language === "thai" ? "สามารถจัดการข้อมูลบัญชีนิติบุคคล สามารถเพิ่มหรือลบผู้ดูแลระบบ เข้าถึงข้อมูล Dashboard สามารถเพิ่ม Service Client สำหรับแชร์ข้อมูลกับระบบอื่นๆ สามารถส่งข้อความแจ้งเตือนการขอใบรับรองอิเล็กทรอนิกส์ (Certificate Authority) สามารถตั้งค่าการแจ้งเตือนสำหรับการเปลี่ยนรหัสผ่านตามข้อมูลองค์กรสามารถตั้งค่าการแสดงข้อความสำหรับนโยบายในแต่ละองค์กร" : "Can manage corporate user accounts, add or remove system administrators, access Dashboard data, add Service Clients for sharing information with other systems, send notifications for Certificate Authority requests, set up password change notifications according to organizational data, and configure message display settings for policies in each organization.";
  const um7 = language === "thai" ? "ผู้ใช้งาน" : "User";
  const um8 = language === "thai" ? "สามารถเพิ่มข้อมูลของผู้ใช้งานได้จำนวนมากตามประเภทข้อมูลด้วยไฟล์ Excel สามารถกำหนดสิทธิการเข้าถึงข้อมูลสำหรับการตรวจสอบและแลกเปลี่ยนข้อมูลของผู้ใช้งาน" : "Can add large numbers of user data by category using an Excel file and define data access rights for user data review and exchange.";
  const um9 = language === "thai" ? "หน้าที่ที่ได้รับมอบหมาย" : "Assigned Duties";
  const um10 = language === "thai" ? "ดูแลและแก้ไขปัญหาที่เกิดขึ้นในระบบหรือเกี่ยวข้องกับระบบได้" : "Maintain and resolve issues related to the system";
  const um11 = language === "thai" ? "พัฒนาระบบสร้างฟีเจอร์ใหม่ทั้งในส่วนของ Back-end และ Front-end อย่างครบถ้วน" : "Develop the system by creating new features in both Back-end and Front-end fully";
  const um12 = language === "thai" ? "รับ Requirement ใหม่และแก้ปัญหาที่เกิดขึ้นจากทีม BA หรือ Support ทดแทนในส่วนของ SA" : "Receive new requirements and resolve issues raised by the BA or Support teams, replacing SA roles";
  const um13 = language === "thai" ? "ออกแบบการทำงานและ UX/UI ของระบบทดแทนในส่วนของ SA" : "Design system workflows and UX/UI, replacing SA roles";
  const um14 = language === "thai" ? "ควบคุมการทำงานให้เสร็จก่อนระยะเวลาที่กำหนด" : "Ensure tasks are completed before the set deadline";
  
  const ekyc1 = language === "thai" ? "ระบบ พิสูจน์ยืนยันตัวตน" : "eKYC Identity Verification System";
  const ekyc2 = language === "thai" ? "ผลงานในตำแหน่ง Software Engineer (Front-end/Back-end) บริษัท อินเทอร์เน็ตประเทศไทย จำกัด (มหาชน)" : "Work as a Software Engineer (Front-end/Back-end) at Internet Thailand Public Company Limited";
  const ekyc3 = language === "thai" ? "การพัฒนาระบบพิสูจน์ยืนยันตัวตนสามารถยืนยันตัวตนออนไลน์ผ่านแพลตฟอร์มได้ด้วยการถ่ายรูปบัตรประชาชนและรูปตนเองคู่บัตรเพื่อเพิ่มความน่าเชื่อถือในการใช้งานระบบอื่นๆ ที่ต้องการตรวจสอบข้อมูลส่วนตัวและสามารถตรวจสอบข้อมูลผ่านระบบกรมการปกครอง มีการตรวจสอบรูปภาพหน้าบัตรประชาชนและหน้าตนเองด้วย AI สำหรับการยืนยันตัวตน" : "The eKYC identity verification system enables online identity authentication through a platform by capturing an ID card and a selfie with the card to enhance credibility in other systems requiring personal data verification. It also integrates with the Department of Provincial Administration (DOPA) for data verification and uses AI to validate ID card photos and facial recognition.";
  const ekyc4 = language === "thai" ? "สามารถแบ่งบทบาทผู้ใช้งานได้ 2 ระดับ ดังนี้" : "User roles are divided into two levels as follows:";
  const ekyc5 = language === "thai" ? "แอดมิน" : "Admin";
  const ekyc6 = language === "thai" ? "สามารถตรวจสอบข้อมูลผู้ใช้งานและสามารถยืนยันหรือยกเลิกการยืนยันตัวตนในกรณีที่ระบบ AI ไม่สามารถตรวจสอบรูปภาพว่าตรงกันหรือไม่ สามารถออก Client สำหรับการแชร์ข้อมูลการยืนยันตัวตนกับระบบอื่นๆ ที่ต้องการตรวจสอบความน่าเชื่อถือของข้อมูล สามารถตั้งค่าการ Redirect สำหรับการใช้งานระบบบนแอปพลิเคชันอื่นๆ" : "Admins can review user data, approve or reject identity verification requests if the AI fails to validate the images, issue clients for identity verification data sharing with other systems, and configure redirect settings for integration with external applications.";
  const ekyc7 = language === "thai" ? "ผู้ใช้งาน" : "User";
  const ekyc8 = language === "thai" ? "สามารถถ่ายรูปตนเองพร้อมบัตรประชาชนและรูปหน้าบัตรประชาชนในการยืนยันตัวตนและสามารถเพิ่มข้อมูลธุรกรรมทางการเงินได้" : "Users can take a selfie with their ID card and capture the front of the ID card for identity verification, as well as input financial transaction data.";
  const ekyc9 = language === "thai" ? "หน้าที่ที่ได้รับมอบหมาย" : "Assigned Responsibilities";
  const ekyc10 = language === "thai" ? "ดูแลและแก้ไขปัญหาที่เกิดขึ้นในระบบหรือเกี่ยวข้องกับระบบได้" : "Monitor and resolve system-related issues.";
  const ekyc11 = language === "thai" ? "พัฒนาระบบสร้างฟีเจอร์ใหม่ทั้งในส่วนของ Back-end และ Front-end อย่างครบถ้วน" : "Develop and implement new features comprehensively for both the Back-end and Front-end.";
  const ekyc12 = language === "thai" ? "รับ Requirement ใหม่และแก้ปัญหาที่เกิดขึ้นจากทีม BA หรือ Support ทดแทนในส่วนของ SA" : "Receive new requirements and resolve issues reported by the BA or Support team, acting as a substitute for the SA role.";
  const ekyc13 = language === "thai" ? "ออกแบบการทำงานและ UX/UI ของระบบทดแทนในส่วนของ SA" : "Design system workflows and UX/UI, substituting the SA role.";
  const ekyc14 = language === "thai" ? "ควบคุมการทำงานให้เสร็จก่อนระยะเวลาที่กำหนด" : "Ensure project completion within the specified timeframe.";

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
                  <p style={{ marginTop: "10px" }}><b> {edu4} </b></p>
                  <ul style={{ marginLeft: "20px", marginTop: "0" }}>
                    <li><b>{edu5}</b>{edu6}</li>
                    <li><b>{edu7}</b>{edu8}</li>
                    <li><b>{edu9}</b>{edu10}</li>
                    <li><b>{edu11}</b>{edu12}</li>
                    <li><b>{edu13}</b>{edu14}</li>
                  </ul>
                  <p style={{ marginTop: "10px" }}> <b>{edu15}</b> </p>
                  <ul style={{ marginLeft: "20px" }}>
                    <li> {edu16} </li>
                    <li> {edu17} </li>
                    <li> {edu18} </li>
                    <li> {edu19} </li>
                    <li> {edu20} </li>
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
                <h4>{coop1}</h4>
                <p>{coop2}</p>
              </div>
              <div className={styles.PortfolioPageItem}>
                <div className={styles.PortfolioPageItemDetail}>
                  <p>{coop3}</p>
                  <p style={{ marginTop: "10px" }}><b>{coop4}</b></p>
                  <ul style={{ marginLeft: "20px" }}>
                    <li><b>{coop5}</b>{" "}{coop6}</li>
                    <li><b>{coop7}</b>{" "}{coop8}</li>
                    <li><b>{coop9}</b>{" "}{coop10}</li>
                    <li><b>{coop11}</b>{" "}{coop12}</li>
                    <li><b>{coop13}</b>{" "}{coop14} </li>
                  </ul>
                  <p style={{ marginTop: "10px" }}> 
                    <b> {coop15} </b> 
                  </p>
                  <ul style={{ marginLeft: "20px" }}>
                    <li> {coop16} </li>
                    <li> {coop17} </li>
                    <li> {coop18} </li>
                    <li> {coop19} </li>
                    <li> {coop20} </li>
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
                <h4>{str1} </h4>
                <p> {str2}</p>
              </div>
              <div className={styles.PortfolioPageItem}>
                <div className={styles.PortfolioPageItemDetail}>
                  <p> {str3}</p>
                  <p style={{ marginTop: "10px" }}><b>{str4}</b></p>
                  <ul style={{ marginLeft: "20px" }}>
                    <li>
                      <b>{str5}</b> {str6}
                    </li>
                    <li>
                      <b>{str7}</b> {str8}
                    </li>
                  </ul>
                  <p style={{ marginTop: "10px" }}>{" "} <b>{str9}</b>{" "}</p>
                  <ul style={{ marginLeft: "20px" }}>
                    <li>{" "}{str10}</li>
                    <li>{" "}{str11}</li>
                    <li>{" "}{str12}</li>
                    <li>{" "}{str13}</li>
                    <li>{" "}{str14}</li>
                  </ul>
                </div>
                <div className={styles.PortfolioPageItemImage}>
                  <div className={styles.PortfolioPageImage} onClick={() => {setCurrentGroup("stateless"); handleOpenAndClose(); }}>
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
                  <a href="https://um.id.th/">{um1}</a>{" "}
                </h4>
                <p>
                {um2}
                </p>
              </div>
              <div className={styles.PortfolioPageItem}>
                <div className={styles.PortfolioPageItemDetail}>
                  <p>{um3}</p>
                  <p><b>{um4}</b></p>
                  <ul style={{ marginLeft: "20px" }}>
                    <li>
                      <b>{um5}</b>{um6}
                    </li>
                    <li>
                      <b>{um7}</b> {um8}
                    </li>
                  </ul>
                  <p style={{ marginTop: "10px" }}>{" "}<b> {um9} </b>{" "} </p>
                  <ul style={{ marginLeft: "20px" }}>
                    <li> {" "}{um10}</li>
                    <li> {" "}{um11}</li>
                    <li> {" "} {um12} </li>
                    <li> {um13} </li>
                    <li> {um14} </li>
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
                  {ekyc1}
                  </a>{" "}
                </h4>
                <p>
                {ekyc2}
                </p>
              </div>
              <div className={styles.PortfolioPageItem}>
                <div className={styles.PortfolioPageItemDetail}>
                  <p>{ekyc3}</p>
                  <p style={{ marginTop: "10px" }}><b>{ekyc4}</b></p>
                  <ul style={{ marginLeft: "20px" }}>
                    <li>
                      <b>{ekyc5}{" "}</b>{ekyc6}
                    </li>
                    <li>
                      <b>{ekyc7}{" "}</b>{ekyc8}
                    </li>
                  </ul>
                  <p style={{ marginTop: "10px" }}>
                    {" "}
                    <b> {ekyc9} </b>{" "}
                  </p>
                  <ul style={{ marginLeft: "20px" }}>
                    <li>{" "}{ekyc10}</li>
                    <li>{" "}{ekyc11}</li>
                    <li>{" "}{ekyc12}</li>
                    <li>{" "}{ekyc13}</li>
                    <li>{" "}{ekyc14} </li>
                  </ul>
                </div>
                <div className={styles.PortfolioPageItemImage}>
                  <div className={styles.PortfolioPageImage} onClick={() => {setCurrentGroup("ekyc"); handleOpenAndClose(); }}>
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
