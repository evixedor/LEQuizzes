import styles from "../../../stylesheets/articles.css";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <>
      <div className={styles.article1}>
        <h1 className={styles.firstcontent}>
          <div className={styles.text1}>"Me" Is Not a Bad Word</div>
          <div className={styles.text2}>by Ellen Kersey</div>
        </h1>
        <p className={styles.secondcontent}>
          When Charley was a little lad playing outside with his friend Billy,
          he ran into the house and asked his mom, “Mommy, can me and Charley
          have a cookie?” <br />
          His mom, wanting to help him with his grammar, said, “Can Charley and
          I have a cookie?” She corrected him for two reasons: (1) “I” is a
          subject pronoun, so he needed to use that word instead of “me” (an
          object pronoun); and (2) she wanted him to realize that he should put
          his friend, not himself, first in the conversation. <br />
          It is my theory that this story of Charley and his mom could be the
          story of any kid and his or her mother. The mother’s intent was to
          help him correct his grammar. But, sadly, Charley intuitively thought
          his mom was telling him, “’Me’ is a bad word. I shouldn’t use it.”{" "}
          <br />
          And thus we have become a nation of people, college graduates and high
          school dropouts included, who won’t use the word “me.” To escape it,
          we use “I,” in cases like these: <br />
          INCORRECT: <br />
          1) Mother took Sally and I to the movies. <br />
          2) Please have your paper edited by Mr. Smith or I. <br />
          3) Mrs. Brown gave the highest grades to Janice and I. <br />
          Ask users why they used “I” instead of “me” in these cases, and the
          reply is usually, “It sounds better” or “It sounds nicer.” And once
          again, we can blame Charley’s mother, who was, of course, not at
          fault. <br />
          How can we determine when to use “me”? In the examples above,
          eliminate the first part of the duo: would you say, “Mother took I to
          the movies”? Or “Please have your paper edited by I?” Or “Mrs. Brown
          gave the highest grade to I”? That’s the test! In each of these cases,
          it is natural to use “me.” You don’t need to understand subject and
          object pronouns (although that helps); in this case, you can do what
          sounds right, and it will be right. <br />
          And it seems that me’s partner my is also having problems. In a recent
          Facebook posting, I read something like this: “Please help us since
          George’s and I’s jobs were lost after the business closed.”  And this
          comment was made by a college graduate! <br />
          So remember … me and my are perfectly good words. You don’t want to
          say – like Tarzan – “Me like Jane,” but you do want to say “Jane likes
          me.” <br />
          If you know the difference between a subject and an object, you will
          know that the “subject” is “I” and an object is “me.”  So the first
          sentence of the following correct sentences states that “Mother”
          (subject) “took” (verb) “Sally and me” (direct object) “to the
          movies.” <br />
          CORRECT SENTENCES: <br />
          1) Mother took Sally and me to the movies. <br />
          2) Please have your paper edited by Mr. Smith or me. <br />
          3) Mrs. Brown gave the highest grades to Janice and me.
        </p>
      </div>
      <div className={styles.fourthcontent}>
        <Link href="/articles/articlelist/apostrophe" className={styles.button1}>
          <button>Next Article</button>
        </Link>
        <Link href="/articles" className={styles.button2}>
          <button>Articles Home</button>
        </Link>
        <Link href="/articles/articlelist/more-about-punctuation" className={styles.button2}>
          <button>Previous Article</button>
        </Link>
      </div>
    </>
  );
}
