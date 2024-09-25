import styles from "../articlescss/article.module.css";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className={styles.article1}>
        <h1 className={styles.firstcontent}>
          <div className={styles.text1}>Finding the Proofreader Within You</div>
          <div className={styles.text2}>by Iris Price</div>
        </h1>

        <p className={styles.secondcontent}>
            <div className={styles.fourthcontentarticle2}>
          Illustration: Michael Thweatt
          </div>
          <div className={styles.secondcontent}>
            Developing your proofreading skills is essential to successful
            writing. Let’s face it: Finding someone who has the time or interest
            to revise your papers can be a challenge. You may have a friend or
            relative who either majored in English or specialized in writing and
            will be eager to help you, but most do not have such connections.
            However — help or no help — you are the most important editor of the
            final copy of your work, whether that be a paper for a class, cover
            letter, book, or even an email. Proofreaders are not born; they
            develop the skill and the key is to be strategic about it. Follow
            the list below, in order, and soon it will become habit. You might
            even become so proficient that you return the favor by proofreading
            a friend or colleague’s paper. <br />
          </div>
          <div className={styles.fourthcontentarticle2}>
            Illustration: Michael Thweatt
          </div>
          <div className={styles.thirdcontentarticle2child3}>
            <span>1.</span>{" "}
            <div>
              Start with a general overview of your work. Read for flow. Are
              your ideas presented logically? If not, you may consider changing
              the structure of  your paper, moving paragraphs and sentences,
              eliminating redundancies, or adding new sentences and transitional
              phrases (e.g. “although,” “however,” “similarly”) to create better
              flow.
            </div>
          </div>
          <div className={styles.thirdcontentarticle2child3}>
            <span>2.</span>{" "}
            <div>
              Correct grammar, spelling, and punctuation. You may have come
              across these errors during step one and it is fine to correct them
              at that stage.  However, when your focus is solely on grammar,
              spelling, or punctuation, it is likely you will find additional
              errors you missed.
            </div>
          </div>
          <div className={styles.thirdcontentarticle2child3}>
            <span>3.</span>{" "}
            <div>
              Minor changes. You are looking for minutiae: Checking numerical
              values, tab spacing, spacing between sentences, layout of charts
              and figures, and citations and references.
            </div>
          </div>
          <div className={styles.secondcontent}>
            After you have followed these 3 steps, set your work aside for a day
            and review it again using the 3 steps. This requires that you do not
            write your paper the night or morning before it is due. Few can
            write a first and final draft free of errors, so be sure to give
            yourself time to review your work.
            <br />
          </div>
          <div className={styles.fourthcontentarticle2}>
            Illustration: Michael Thweatt
          </div>
          <div className={styles.secondcontent}>
            Some find that reading their work aloud helps. You can also print
            your draft and mark it up old school: breaking out the ol’ pens,
            pencils, and paper with the proverbial red ink if you like. The most
            effective method is to use what works for you. Writing is
            challenging and I am not innocent to the all-nighter, but take my
            wisdom and give yourself time to write and review your writing AT
            LEAST once before submission. And remember, your written word is a
            reflection of you, so make sure it shines.
          </div>
          <p className={styles.lasttest}>IP</p>
        </p>
      </div>
      <div className={styles.fourthcontent}>
        <Link href="/articles/articlelist/compliment-complement" className={styles.button1}>
          <button>Next Article</button>
        </Link>
        <Link href="/articles" className={styles.button2}>
          <button>Articles Home</button>
        </Link>
        <Link href="/articles/articlelist/who-whom" className={styles.button2}>
          <button>Previous Article</button>
        </Link>
      </div>
    </>
  );
}
