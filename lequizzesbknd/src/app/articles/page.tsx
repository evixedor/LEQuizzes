import styles from "../articlescss/article.module.css";
import Link from "next/link";

export default function Page() {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Grammar Articles</h1>

      <ul>
        <li className={styles.li}>
          <Link href="/the-subjunctive-mood">
            The Subjunctive Mood
            <span className={styles.span}> by Katherine Schwartz</span>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/imminent-eminent-immanent">
            Imminent vs Eminent vs Immanent
            <span className={styles.span}> by Jillian Torrassa</span>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/advice-for-english-learners">
            The Best Advice for English Learners: READ!
            <span className={styles.span}> by Emily Zeller</span>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/who-whom">
            Who and Whom<span className={styles.span}> by Emily Zeller</span>
          </Link>
        </li>
        {/* <!--<li><a href="#">Top 5 Books for the 5th Grader by Chris Vasquez</a></li>--> */}
        <li className={styles.li}>
          <Link href="/proofreader">
            Finding the Proofreader Within You
            <span className={styles.span}> by Iris Price</span>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/compliment-complement">
            Compliment vs Complement
            <span className={styles.span}> by Jillian Torrassa</span>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/the-importance-of-punctuation">
            The Importance of Punctuation!
            <span className={styles.span}> by Emily Zeller</span>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/semicolon">
            The Semicolon
            <span className={styles.span}> by Emily Zeller</span>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/commas">
            The Long and Short of It: Commas
            <span className={styles.span}> by Jillian Torrassa</span>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/english-language-quotes">
            Famous Quotes About Language
            <span className={styles.span}> by Launch English</span>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/american-dialects">
            A Crash Course in American Dialects
            <span className={styles.span}> by Alexandra Ambrose</span>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/allusive-illusive-elusive">
            Allusive vs Illusive vs Elusive
            <span className={styles.span}> by Alexandra Ambrose</span>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/where-in-the-world">
            Where in the World Do People Speak English?
            <span className={styles.span}> by Alexandra Ambrose</span>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/transitive-intransitive">
            Transitive vs Intransitive Verbs
            <span className={styles.span}> by Emily Rowan</span>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/more-about-punctuation">
            More About Punctuation
            <span className={styles.span}> by Jillian Torrassa</span>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/me">
            Me is Not a Bad Word
            <span className={styles.span}> by Ellen Kersey</span>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/apostrophe">
            Apostrophe's Are Often Misused
            <span className={styles.span}> by Ellen Kersey</span>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/cliches-aphorisms">
            Cliches/Aphorisms
            <span className={styles.span}> by Michael Hoeft</span>
          </Link>
        </li>
      </ul>
    </main>
  );
}
