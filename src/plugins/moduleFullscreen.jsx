import React from "react";
import styles from "./moduleFullscreen.module.scss";
import { IoCloseSharp } from "react-icons/io5";

function moduleFullscreen({ pathImage, setShowModal }) {
  const closeModal = () => {
    setShowModal(false);
  };
    React.useEffect(() => {
        const handleKeyDown = (event) => {
            console.log('event.key', event.key)
          if (event.key === "Escape") {
            closeModal();
          }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => {
          document.removeEventListener("keydown", handleKeyDown);
        };
      }, []);

  return (
    <div className={styles.ModuleFullScreenOverlay} onClick={closeModal}>
      <div className={styles.ModuleFullScreenImage} onClick={closeModal}>
        <span className={styles.PortfolioPageModelClose} onClick={closeModal}>
          <IoCloseSharp />
        </span>
        <img className={styles.ModuleImage} src={pathImage} alt="Fullscreen View" />
      </div>
    </div>
  );
}

export default moduleFullscreen;
