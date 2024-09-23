import styles from "../articlescss/article.module.css";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className={styles.article1}>
        <h1 className={styles.firstcontent}>
          <div className={styles.text1}>Imminent vs Eminent vs Immanent</div>
          <div className={styles.text2}>by Jillian Torrassa</div>
        </h1>

        <p className={styles.secondcontent}>
          This may not be a problem you encounter often, but I think it’s
          helpful to know. These words are not
          <br />
          interchangeable, and I don’t think that’s something I really
          understood until recently. So, if you learn <br />
          the differences now, you’ll be leaps and bounds ahead of where I was
          at your age!
        </p>
        <p className={styles.thirdcontent}>
          <div className={styles.thirdcontentarticle2child}>
            Eminent = prominent or famous (most common)
          </div>
          <div className={styles.text2}>Examples:</div>
          <div className={styles.thirdcontentarticle2child3}>
            <span>1.</span>{" "}
            <div>
              Eminent Domain is the government using its prominent position in
              society as an excuse to take private land.
            </div>
          </div>
          <div className={styles.thirdcontentarticle2child3}>
            <span>2.</span>{" "}
            <div>
              When Bill Gates had a banquet for all the tech innovators of
              America, there were many eminent businessmen in attendance.
            </div>
          </div>
        </p>
        <p className={styles.fourthcontentarticle2}>
          “Who Doesn’t Love Pop Rocks?” (Illustration: Tony Jackson)
        </p>
        <p className={styles.thirdcontent}>
          <div className={styles.thirdcontentarticle2child}>
            Imminent = immediately threatening, coming soon
          </div>
          <div className={styles.text2}>Examples:</div>
          1.The storm on the horizon was imminent. <br />
          2.My big break was just around the corner; I could feel its imminence.{" "}
          <br />
          3.If you put pop rocks in your cat’s litter box, a bad situation is
          imminent. <br />
        </p>
        <p className={styles.thirdcontent}>
          <div className={styles.thirdcontentarticle2child}>
            Immanent = inherent, present through the universe (God or something
            immaterial), exists within, intrinsic (least common)
          </div>
          <div className={styles.text2}>Examples:</div>
          1.God’s power is immanent in our lives. <br />
          <div className={styles.thirdcontentarticle2child3}>
            <span>2.</span>{" "}
            <div>
              Hunger is an immanent part of human existence. Unless you’re
              eating all the time. Then I guess it’s not.
            </div>
          </div>
        </p>
        <p>
          <div className={styles.fifthcontentarticle2child1}>
            Here are a few  TRICKS that might help you remember the differences:
          </div>
          <span className={styles.fifthcontentarticle2child2i}>Immanent</span> –
          God created man in His own image—spirituality or other intangible
          things (usually, though
          <br />
          not always). You probably won’t need to use this one much though, so
          just focus on learning the difference between the other two. <br />
          <div>
            <span className={styles.fifthcontentarticle2child2i}>Imminent</span>{" "}
            – Immediate or “It’s going to happen in a minute.”
          </div>
          <p className={styles.fourthcontentarticle2}>
            “Let’s Get Down to Business.” (Illustration: Tony Jackson)
          </p>
          <div className={styles.fifthcontentarticle2child2}>
            <span className={styles.fifthcontentarticle2child2i}>Eminent</span>{" "}
            – Eminem is arguably the most famous/prominent rapper in the world.{" "}
          </div>
          <div className={styles.fifthcontentarticle2child3}>
            Maybe this isn’t something you’ll ever need to know (in a practical
            sense), but it will broaden your understanding of the English
            language if you learn the differences anyway. So there you go. Go
            forth in English Eminence and prepare for your imminent success in
            the English-speaking world.
          </div>
        </p>
        <p className={styles.lasttest}>JT</p>
      </div>

      <div className={styles.fourthcontent}>
        <Link href="/advice-for-english-learners" className={styles.button1}>
          <button>Next Article</button>
        </Link>
        <Link href="/articles" className={styles.button2}>
          <button>Articles Home</button>
        </Link>
        <Link href="/the-subjunctive-mood" className={styles.button2}>
          <button>Previous Article</button>
        </Link>
      </div>
    </>
  );
}
