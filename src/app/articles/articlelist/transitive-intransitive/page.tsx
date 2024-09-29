import styles from "../../../stylesheets/articles.css";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <>
      <div className={styles.article1}>
        <h1 className={styles.firstcontent}>
          <div className={styles.text1}>Transitive vs Intransitive Verbs</div>
          <div className={styles.text2}>by Emily Rowan</div>
        </h1>
        <p className={styles.secondcontent}>
          Before we delve into the main focus of this article, we will need to
          refresh our memories and recall direct objects. A direct object is a
          noun phrase which identifies a person or thing that receives the
          action of a transitive verb. <br />
          Example: <br />
          I broke the window. <br />
          Broke is the verb of the sentence. <br />
          I broke what? The window. <br />
          Window is the direct object of the sentence. <br />
          Now that we can identify the direct object of a sentence, we’ll begin
          applying that knowledge to decipher the difference between transitive
          and intransitive verbs, as well as recognizing them in our lessons.{" "}
          <br />
          Transitive verbs are words that depend on an a direct object to
          receive the action of the verb. <br />
          Example: <br />
          My sister borrowed the car. <br />
          What is it that my sister borrowed? The car. <br />
          Borrowed would be the transitive verb of the sentence,while the phrase
          the car would be the direct object.
          <p className={styles.secondcontent}>
            Unlike transitive verbs, intransitive verbs do not require a direct
            object nor do they have a noun to receive the action of the verb.{" "}
            <br />
            Examples: <br />
            The bird flew. <br />
            My sister blushed. <br />
            My mother laughed. <br />
            My father told jokes. <br />
            Verbs can be either transitive or intransitive depending upon the
            context of the sentence at hand. <br />
            Examples: <br />
            Transitive: <br />
            He ate the rest of the pie. <br />
            Monica drove the car to the theater. <br />
            Intransitive: <br />
            He ate. <br />
            Monica drove. <br />
            Emily Rowan is a resident of Stockton, California. She is a content
            creator and learner coach here.  She has been passionate about
            English grammar since she was a little girl, and Exemplary English
            is proud to have her aboard.    
          </p>
        </p>
      </div>
      <div className={styles.fourthcontent}>
        <Link href="/articles/articlelist/more-about-punctuation" className={styles.button1}>
          <button>Next Article</button>
        </Link>
        <Link href="/articles" className={styles.button2}>
          <button>Articles Home</button>
        </Link>
        <Link href="/articles/articlelist/where-in-the-world" className={styles.button2}>
          <button>Previous Article</button>
        </Link>
      </div>
    </>
  );
}
