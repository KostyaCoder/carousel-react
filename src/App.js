import SlideDashboard from "./components/SlideDashboard";
import styles from "./App.module.scss";

export default function App() {
  return (
    <article className={styles.flexArticle}>
      <SlideDashboard />
    </article>
  );
}
