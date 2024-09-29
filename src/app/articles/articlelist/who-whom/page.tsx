import styles from "../../../stylesheets/articles.css";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <>
      <div className={styles.article1}>
        <h1 className={styles.firstcontent}>
          <div className={styles.text1}>Who vs Whom</div>
          <div className={styles.text2}>by Emily Zeller</div>
        </h1>
        <p className={styles.secondcontent}>
          These two words can be so confusing to even the seasoned writer. I
          mean really? How many of us use the word whom in our daily lives? A
          lot of writers, including myself, think that ‘whom’ is a bit
          persnickety. Perhaps if we imagined ourselves living in Tudor England
          about the time of famous playwright Bill Shakespeare, whom might seem
          more like a ‘normal’ part of our everyday vocabulary. Illustration:
          Dominique Greene “To whom shall I send this letter today? Ah yes,
          ExemplaryEnglish.com.” I doth hear that they help many who seeketh
          help in grammar.” Who and whom can be quite tricky, but let’s break it
          down and find out how we can use these words appropriately. Who vs.
          Whom: Just when do we use them? Let’s talk about who and whom. How do
          we differentiate between the two? Who: Who is used as the subject of a
          verb or complement of a linking verb. It is a nominative (relating)
          pronoun. Example: Image: Camille Charles It was I who wrote the paper
          on Monday. Can you find the verbs? No scrolling down now….  : P Here’s
          a hint: a verb is an action or a state of being.  What is happening?
          Did you find them? Great! Now, find the subjects for each verb.  
          Hint: What is the sentence talking about? Who or what is the focus?
          Answers: The verbs are “was” and “wrote.” It was I who wrote the paper
          on Monday. The subjects are “I” and “who.” It was I who wrote the
          paper on Monday Whom: Whom is used as the object of the verb or the
          object of a preposition. Hence why it is an objective pronoun.
          Example: You asked whom to the dance tonight? The subject is you and
          the verb is asked.  The pronoun whom is following the verb and is the
          object of the verb; therefore, whom is a correct choice for this
          sentence. Be careful though. Make sure the prepositional pronoun in
          question isn’t also a subject—if it is, then you use who. Example: I
          cheered for who played hardest. While the pronoun follows a
          preposition (for), it’s also the subject of the second verb (played).
          When placed as a subject, always use who. In conclusion, remember
          these tips when in doubt:
          <div className={styles.thirdcontentarticle2child3}>
            <span>1.</span>{" "}
            <div>
          When trying to decide whether who or whom
          is correct, simplify the sentence. It helps to move the words around
          in your head to identify the word relationships. For example:
          “Princess Peach and her ladies-in-waiting only invited people to their
          party [who or whom] they considered to love parties as much as they
          did.” The simplified mental version becomes: “whom they considered.”
           (“whom” is correct) 
          </div> 
          </div> 
          <div className={styles.thirdcontentarticle2child3}>
            <span>2.</span>{" "}
            <div>
          The distinction between who and whom is less
          important in informal spoken language than it is in formal written
          language. (Formal language is used academically and professionally.)
          (Informal language is more casual and often contains slang and other
          common vernacular) Remember Fellow Writers…. There is much confusion
          and misuse on this topic. Just as correctly using whom may make others
          think that you are super smart, misusing it may make you seem a bit
          silly. Never use whom as a subject pronoun. This is as incorrect as
          using who where whom is required. Many people will mistakenly believe
          that you are trying to be formal. “Whom are you?” is wrong. It is
          meant to be “Who are you?” Happy Writing.
          </div>
          </div>
        </p>
        <p className={styles.lasttest}>EZ</p>
      </div>

      <div className={styles.fourthcontent}>
        <Link href="/articles/articlelist/proofreader" className={styles.button1}>
          <button>Next Article</button>
        </Link>
        <Link href="/articles" className={styles.button2}>
          <button>Articles Home</button>
        </Link>
        <Link href="/articles/articlelist/advice-for-english-learners" className={styles.button2}>
          <button>Previous Article</button>
        </Link>
      </div>
    </>
  );
}
