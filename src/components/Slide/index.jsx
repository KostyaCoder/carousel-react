import dataSrcJson from "../../dataImg.json";
import styles from "./Slide.module.scss";

export default function Slide(props) {
  const { curSlide, handleClickNextSlide, handleClickPrevSlide } = props;
  const { src, title, text, link } = dataSrcJson[curSlide];

  return (
    <>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={src} alt={title} />
        <div className={styles.buttonWrapper}>
          <button onClick={handleClickPrevSlide} className={styles.button}>
            {"<"}
          </button>
          <button onClick={handleClickNextSlide} className={styles.button}>
            {">"}
          </button>
        </div>
      </div>
      <h2>{title}</h2>
      <p>{text}</p>
      <a href={link}>{"Learn More >"}</a>
    </>
  );
}
