import styles from "./page.module.css";
import UniversitiesList from "@/components/UniversitiesList";

export default function Home() {
  return (
    <main className={styles.main}>
      <UniversitiesList />
    </main>
  );
}
