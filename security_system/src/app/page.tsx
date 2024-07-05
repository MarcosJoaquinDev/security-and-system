
import About from "./components/About";
import ContacForm from "./components/ContactForm";
import Header from "./components/Header";
import Interesting from "./components/Iteresting";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <About />
      <Interesting />
      <ContacForm/>
    </main>
  );
}
