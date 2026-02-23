"use client";

import { items } from "../utils/test-data-cherno";
import PersonCard from "../components/personcard";
import styles from "./page.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.hero}>Papi y mami Kaidonovsky</h1>
      
      <section className={styles.cardsGrid}>
        {items.map((person) => (
          <PersonCard key={person.id} person={person} />
        ))}
      </section>
    </div>
  );
};

export default About;