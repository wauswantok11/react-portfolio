import React from "react";
import styles from "./SkillsPage.module.scss";
import { LineChart } from "@mui/x-charts/LineChart";
import { BarChart } from "@mui/x-charts/BarChart";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { MdZoomIn } from "react-icons/md";

const SkillsPage = ({ language }) => {
  const [selectTypeChart, setSelectTypeChart] = React.useState("line");
  const title = language === "thai" ? "ทักษะ" : "Skills";
  const typeChart = language === "thai" ? "เลือกประเภทกราฟ" : "Select type";
  const subTitle =
    language === "thai"
      ? "ทักษะที่เกี่ยวข้องกับการทำงาน"
      : "Work Related Skills";
  const scoreInet =
    language === "thai"
      ? "ผลการประเมินการทำงานกับบริษัทอินเตอร์เน็ตประเทศไทย จำกัด (มหาชน)"
      : "Performance evaluation of INET";
  const labelChart =
    language === "thai"
      ? "ผลการประเมินตลอดการทำงาน"
      : "Evaluation results throughout work";
  const titleSkill = language === "thai" ? "ทักษะในการทำงาน" : "Work skills";
  const OtherWorksTitle = language === "thai" ? "ผลงานอื่นๆ" : "Other Works";
  const WorksCaTitle = language === "thai" ? "ใบรับรองการสำเร็จหลักสูตร" : "Certificate of Completion";
  const InetScoreData = [64, 68, 75];
  const InetLabelData = [
    language === "thai" ? "ปลายปี 2567" : "the end of 2024",
    language === "thai" ? "กลางปี 2568" : "mid-2025",
    language === "thai" ? "ปลายปี 2568" : "the end of 2025",
  ];
  const [isHoveredImgCA, setIsHoveredImgCA] = React.useState(false);

  return (
    <div className={styles.SkillPageWrapper}>
      <div className={styles.SkillPagerTitle}>
        <h3>{title}</h3>
        <p>{subTitle}</p>
      </div>

      <div className={styles.SkillPageContent}>
        {/* Chart mui */}
        <div className={styles.SkillPageChartContentScore}>
          <div className={styles.SkillPageChartTitle}>
            <h4>
              {scoreInet}
              <span>📈</span>{" "}
            </h4>
          </div>
          <div className={styles.SkillPageChartDetail}>
            <Box
              sx={{
                maxWidth: 200,
                display: "inline-block",
                fontFamily: "IBM Plex Sans Thai, IBM Plex Sans Condensed",
              }}
            >
              <TextField
                select
                value={selectTypeChart}
                onChange={(event) => setSelectTypeChart(event.target.value)}
                label={typeChart}
                sx={{ minWidth: "140px", minHeight: "40px" }}
              >
                <MenuItem
                  sx={{
                    fontFamily: "IBM Plex Sans Thai, IBM Plex Sans Condensed",
                  }}
                  value="line"
                >
                  {language === "thai" ? "กราฟเส้น" : "Line Graph"}
                </MenuItem>
                <MenuItem
                  sx={{
                    fontFamily: "IBM Plex Sans Thai, IBM Plex Sans Condensed",
                  }}
                  value="bar"
                >
                  {language === "thai" ? "กราฟแท่ง" : "Bar Graph"}
                </MenuItem>
              </TextField>
            </Box>
            <div className={styles.SkillPageChartDetailSelectChart}>
              {selectTypeChart === "line" ? (
                <LineChart
                  width={450}
                  height={250}
                  sx={{
                    fontFamily: "IBM Plex Sans Thai, IBM Plex Sans Condensed",
                  }}
                  className={styles.SkillPageChartDetailSelectChartLine}
                  series={[{ data: InetScoreData, color: "#0085ff" }]}
                  xAxis={[
                    {
                      scaleType: "point",
                      label: labelChart,
                      data: InetLabelData,
                    },
                  ]}
                />
              ) : (
                <BarChart
                  width={450}
                  height={250}
                  className={styles.SkillPageChartDetailSelectChartBar}
                  series={[{ data: InetScoreData, color: "#0085ff" }]}
                  xAxis={[
                    {
                      tickLabelStyle: {
                        fontFamily:
                          "IBM Plex Sans Thai, IBM Plex Sans Condensed",
                      },
                      scaleType: "band",
                      label: labelChart,
                      data: InetLabelData,
                    },
                  ]}
                />
              )}
            </div>
          </div>
        </div>

        {/* content skill logo */}
        <div className={styles.SkillPageChartContentSkills}>
          <div className={styles.SkillPageChartSkillTitle}>
            <h4>
              {titleSkill} <span>🚀</span>{" "}
            </h4>
          </div>
          <div className={styles.SkillPageChartSkillDetail}>
            <div className={styles.SkillPageChartSkillChart}>
              <div className={styles.SkillPageItemList}>
                <p>{language === "thai" ? "ด้าน " : "Skill"} Back-end</p>
                <img
                  className={styles.SkillPageItemImage}
                  src="/image/logo-skill/go-2.webp"
                />
                <img
                  className={styles.SkillPageItemImage}
                  src="/image/logo-skill/node.png"
                />
                <img
                  style={{ borderRadius: "20px" }}
                  className={styles.SkillPageItemImage}
                  src="/image/logo-skill/ts.webp"
                />
                <img
                  className={styles.SkillPageItemImage}
                  src="/image/logo-skill/js.png"
                />
                <img
                  className={styles.SkillPageItemImage}
                  src="/image/logo-skill/php.webp"
                />
                <img
                  style={{ width: "60px" }}
                  className={styles.SkillPageItemImage}
                  src="/image/logo-skill/css.png"
                />
              </div>
              <div className={styles.SkillPageItemList}>
                <p>{language === "thai" ? "ด้าน " : "Skill"} Front-end</p>
                <img
                  className={styles.SkillPageItemImage}
                  src="/image/logo-skill/react.png"
                />
                <img
                  className={styles.SkillPageItemImage}
                  src="/image/logo-skill/vue.png"
                />
                <img
                  className={styles.SkillPageItemImage}
                  src="/image/logo-skill/angular.png"
                />
                <img
                  className={styles.SkillPageItemImage}
                  src="/image/logo-skill/laravel.jpg"
                />
                <img
                  className={styles.SkillPageItemImage}
                  src="/image/logo-skill/html.png"
                />
              </div>
              <div className={styles.SkillPageItemList}>
                <p>{language === "thai" ? "ด้าน " : "Skill"} DevOps</p>
                <img
                  className={styles.SkillPageItemImage}
                  src="/image/logo-skill/Docker.webp"
                />
                <img
                  className={styles.SkillPageItemImage}
                  src="/image/logo-skill/kubernetes.png"
                />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* content other works */}
      <div className={styles.SkillPageOtherWorks}>
        <div className={styles.SkillPageOtherWorksTitle}>
          <h4> {OtherWorksTitle} </h4>
          <p>โปรเจคอื่นๆ ที่มีการ</p>
        </div>
        <div className={styles.SkillPageOtherWorksDetail}>
           
        </div>
      </div>

      {/* content works ca */}
      <div className={styles.SkillPageWorksCA}>
        <div className={styles.SkillPageWorksTitleCA}>
          <h4> {WorksCaTitle} </h4>
        </div>
        <div className={styles.SkillPageOtherWorksDetailCA}>
          <p> React Certificate </p>
          <div className={styles.SkillPageCaList}>
            <div className={styles.SkillPageCaImage}>
              <div className={styles.SkillPageImageContainer}>
                <img src="/image/ca/react-01.png" alt="React 1" />
                <div className={styles.SkillPageIcon}>
                  <MdZoomIn className={styles.SkillPageIconZoom} />
                </div>
              </div>
            </div>
            <div className={styles.SkillPageCaImage}>
              <div className={styles.SkillPageImageContainer} onClick={()=>{ console.log("click")}}>
                <img src="/image/ca/react-02.png" alt="React 2" />
                <div className={styles.SkillPageIcon}>
                  <MdZoomIn className={styles.SkillPageIconZoom} />
                </div>  
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* module image full screen */}
      <div className={styles.SkillPageModuleImage}>
        
      </div>
    </div>
  );
};

export default SkillsPage;
