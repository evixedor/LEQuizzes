import styles from "../articlescss/article.module.css";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className={styles.article1}>
        <h1 className={styles.firstcontent}>
          <div className={styles.text1}>Compliment vs Complement</div>
          <div className={styles.text2}>by Jillian Torassa</div>
        </h1>
        <p className={styles.secondcontent}>
          “Compliment vs Complement” by Jillian Torassa English is a terribly
          difficult language to learn. There are so many rules, and some of them
          barely make any sense at all. Luckily, the difference between
          compliment and complement isn’t all that complicated. I’ll explain it
          to you, and then you’ll have one crazy English grammar rule completely
          under control. Ready? Here we go. <br />
          <p className={styles.secondcontent}>
            Compliment—Praise (a compl-I-ment is an adm-I-ring remark) <br />
            Complement—make better or whole (a compl-E-ment E-hances or
            compl-E-tes) <br />
          </p>
          <p className={styles.secondcontent}>
            Each of these words—compliment and complement—can be used as either
            a verb or a noun. Here. I’ll give you some examples:
          </p>
          Compl-I-ment <br />
          I would like to send my compliments to the chef, who made an excellent
          haggis this evening. <br />
          I wanted to compliment the pilot on his aviation skills, but he was
          too busy flying the airplane to listen to me. <br />
          He complimented me on my dancing, but I really had no idea what I was
          doing. <br />
          I got lots of compliments on my new shoes. <br />
          <p className={styles.secondcontent}>OR THERE’S</p>
          <p className={styles.secondcontent}>
            Compl-E-ment <br />
            My sense of whimsy is the perfect complement to his more serious
            nature. <br />
            This t-shirt complements my eyes nicely. (It makes my eyes look more
            vivid/beautiful.) <br />
            Orange and blue are complementary colors because, when placed
            together, they reinforce each other and create a strong, appealing
            contrast. <br />
            I think ketchup complements grilled cheese sandwiches nicely, but
            everyone else thinks I’m crazy. <br />
            See? It’s not too hard. Just remember: If you aren’t saying
            something n-I-ce to someone, you probably want to use compl-E-ment
            instead. <br />
            <p className={styles.secondcontent}>
              And next time you feel like grammar and the English language are
              too overwhelmingly confusing, just remind yourself:  You know the
              difference between compliment and complement. <br />
              At least that’s something!
            </p>
          </p>
          <p className={styles.lasttest}>JT</p>
        </p>
      </div>
      <div className={styles.fourthcontent}>
        <Link href="/articles/articlelist/the-importance-of-punctuation" className={styles.button1}>
          <button>Next Article</button>
        </Link>
        <Link href="/articles" className={styles.button2}>
          <button>Articles Home</button>
        </Link>
        <Link href="/articles/articlelist/proofreader" className={styles.button2}>
          <button>Previous Article</button>
        </Link>
      </div>
    </>
  );
}
