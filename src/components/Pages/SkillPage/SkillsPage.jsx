import React from "react";
import styles from "./SkillsPage.module.scss";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import Tooltip from "@mui/material/Tooltip";

const SkillsPage = ({ language }) => {
  const title = language === "thai" ? "ทักษะ" : "Skills";
  const subTitle = language === "thai" ? "ทักษะที่เกี่ยวข้องกับการทำงาน" : "Work-related skills"
  return (
    <div className={styles.SkillPageWrapper}>
      <div className={styles.SkillPagerTitle}>
        <div>
          <h3> {title} </h3>
        </div>
        <div>
          <p>{subTitle}</p>
        </div>
      </div>
      <div className={styles.SkillPageContent}>
        <div className={styles.SkillPageContentTitle}> Back-end </div>
        <div className={styles.SkillPageItem}>
          <div className={styles.SkillPageGauge}>
            <Tooltip title="85%" arrow>
              <div  className={styles.SkillPageGaugeDetail}>
                <Gauge width={200} height={200} value={85} text=""
                  sx={{
                    [`& .${gaugeClasses.valueArc}`]: { fill: "#0085ff" },
                    [`& .${gaugeClasses.referenceArc}`]: { fill: "#d3d3d3" },
                  }}
                />
                 <img className={styles.SkillPageGaugeIcon} src="/image/logo-skill/go-2.webp" alt="Golang Icon"/>
              </div>
            </Tooltip>
          </div>
          <div className={styles.SkillPageGauge}>
            <Tooltip title="70%" arrow>
              <div  className={styles.SkillPageGaugeDetail} >
                <Gauge width={200} height={200} value={70} text=""
                  sx={{
                    [`& .${gaugeClasses.valueArc}`]: { fill: "#0085ff" },
                    [`& .${gaugeClasses.referenceArc}`]: { fill: "#d3d3d3" },
                  }}
                />
                 <img className={styles.SkillPageGaugeIcon} src="/image/logo-skill/js.png" alt="JS Icon"/>
              </div>
            </Tooltip>
          </div>
          <div className={styles.SkillPageGauge}>
            <Tooltip title="50%" arrow>
              <div className={styles.SkillPageGaugeDetail}>
                <Gauge width={200} height={200} value={50} text=""
                  sx={{
                    [`& .${gaugeClasses.valueArc}`]: { fill: "#0085ff" },
                    [`& .${gaugeClasses.referenceArc}`]: { fill: "#d3d3d3" },
                  }}
                />
                 <img className={styles.SkillPageGaugeIcon} src="/image/logo-skill/laravel.jpg" alt="Laravel Icon"
                 style={{
                  borderRadius:"100%"
                 }}/>
              </div>
            </Tooltip>
          </div>
          <div className={styles.SkillPageGauge}>
            <Tooltip title="50%" arrow>
              <div className={styles.SkillPageGaugeDetail}>
                <Gauge width={200} height={200} value={50} text=""
                  sx={{
                    [`& .${gaugeClasses.valueArc}`]: { fill: "#0085ff" },
                    [`& .${gaugeClasses.referenceArc}`]: { fill: "#d3d3d3" },
                  }}
                />
                 <img className={styles.SkillPageGaugeIcon} src="/image/logo-skill/php.png" alt="PHP Icon"
                 style={{
                  borderRadius:"100%"
                 }}/>
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className={styles.SkillPageContent}>
        <div className={styles.SkillPageContentTitle}> Front-end </div>
        <div className={styles.SkillPageItem}>
          <div className={styles.SkillPageGauge}>
            <Tooltip title="85%" arrow>
              <div  className={styles.SkillPageGaugeDetail}>
                <Gauge width={200} height={200} value={65} text=""
                  sx={{
                    [`& .${gaugeClasses.valueArc}`]: { fill: "#0085ff" },
                    [`& .${gaugeClasses.referenceArc}`]: { fill: "#d3d3d3" },
                  }}
                />
                 <img className={styles.SkillPageGaugeIcon} src="/image/logo-skill/react.png" alt="React Icon"/>
              </div>
            </Tooltip>
          </div>
          <div className={styles.SkillPageGauge}>
            <Tooltip title="70%" arrow>
              <div  className={styles.SkillPageGaugeDetail}>
                <Gauge width={200} height={200} value={50} text=""
                  sx={{
                    [`& .${gaugeClasses.valueArc}`]: { fill: "#0085ff" },
                    [`& .${gaugeClasses.referenceArc}`]: { fill: "#d3d3d3" },
                  }}
                />
                 <img className={styles.SkillPageGaugeIcon} src="/image/logo-skill/angular.png" alt="angular Icon"
                 style={{
                  borderRadius:"100%"
                 }}/>
              </div>
            </Tooltip>
          </div>
          <div className={styles.SkillPageGauge}>
            <Tooltip title="50%" arrow>
              <div  className={styles.SkillPageGaugeDetail}>
                <Gauge width={200} height={200} value={50} text=""
                  sx={{
                    [`& .${gaugeClasses.valueArc}`]: { fill: "#0085ff" },
                    [`& .${gaugeClasses.referenceArc}`]: { fill: "#d3d3d3" },
                  }}
                />
                 <img className={styles.SkillPageGaugeIcon} src="/image/logo-skill/vue.png" alt="vue Icon"/>
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className={styles.SkillPageContent} >
        <div className={styles.SkillPageContentTitle}> DevOps </div>
        <div className={styles.SkillPageItem}>
          <div className={styles.SkillPageGauge}>
            <Tooltip title="85%" arrow>
              <div className={styles.SkillPageGaugeDetail}>
                <Gauge width={200} height={200} value={60} text=""
                  sx={{
                    [`& .${gaugeClasses.valueArc}`]: { fill: "#0085ff" },
                    [`& .${gaugeClasses.referenceArc}`]: { fill: "#d3d3d3" },
                  }}
                />
                 <img className={styles.SkillPageGaugeIcon} src="/image/logo-skill/Docker.webp" alt="Docker Icon"/>
              </div>
            </Tooltip>
          </div>
          <div className={styles.SkillPageGauge}>
            <Tooltip title="70%" arrow>
              <div className={styles.SkillPageGaugeDetail}>
                <Gauge width={200} height={200} value={50} text=""
                  sx={{
                    [`& .${gaugeClasses.valueArc}`]: { fill: "#0085ff" },
                    [`& .${gaugeClasses.referenceArc}`]: { fill: "#d3d3d3" },
                  }}
                />
                 <img className={styles.SkillPageGaugeIcon} src="/image/logo-skill/kubernetes.png" alt="Kubernetes Icon"/>
              </div>
            </Tooltip>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
