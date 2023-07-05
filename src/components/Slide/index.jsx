import styles from "./Slide.module.scss";

export default function Slide(props) {
  const { src, title, text, link } = props;

  return (
    <>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={src} />
        <div className={styles.buttonWrapper}>
          <button className={styles.button}>{"<"}</button>
          <button className={styles.button}>{">"}</button>
        </div>
      </div>
      <h2>{title}</h2>
      <p>{text}</p>
      <a href={link}>{"Learn More >"}</a>
    </>
  );
}
