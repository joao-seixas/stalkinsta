import styles from "./page.module.css";
import { useState } from 'react';

export default function Home() {
  const [isLogged, setIslogged] = useState(false);
  
  return (
    <main className={styles.main}>
      <header>
        StalkInsta
      </header>
    </main>
  );
}
