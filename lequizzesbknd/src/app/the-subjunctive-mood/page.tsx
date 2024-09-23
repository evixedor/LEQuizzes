import styles from "../articlescss/article.module.css";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <article className={styles.article1}>
        <div>
          <h1 className={styles.firstcontent}>
            <span className={styles.text1}>
              The Subjunctive Mood - What's That?
            </span>
            <div className={styles.text2}> by Katherine Schwartz</div>
          </h1>
        </div>
        <p className={styles.secondcontent}>
          Well, first, you may wonder what a mood is at all. As its name
          suggests, a mood gives a certain <br /> undertone or sense to what
          you’re saying, with just a few small changes to a sentence. Sounds{" "}
          <br /> like a funny idea, but it’s easier to recognize once put into
          action.
        </p>
        <p className={styles.thirdcontent}>
          You can pretty easily identify “Go to school!” as being in a command
          form, also known as the <br /> imperative mood. You may not realize
          your understanding of this command rests on the verb <br /> form being
          correct – “Go”, not “You go”, or “You’re going.” Besides the
          imperative, there are <br /> actually three other moods in English.
          Today we’ll focus on arguably the most challenging one, <br /> the
          subjunctive.
        </p>

        <p className={styles.highlight1}>I wouldn’t do that if I were you.</p>
        <p className={styles.highlight2}>
          It is important that she be to class on time.
        </p>
        <p className={styles.highlight2}>He recommends that you read more.</p>
        <p className={styles.thirdcontent}>
          What do these sentences have in common? They are all using the
          subjunctive.  The key to <br /> recognizing a mood is in the verb;
          here we have some funny-sounding things going on, like “I <br /> were”
          and “she be”.
        </p>
        <p className={styles.thirdcontent}>
          Shouldn’t it be “I was” and “she is”? Why did we suddenly change the
          verb conjugation? Well, <br /> when the beginning of a clause begins
          with something like “It is important that…” or “It is <br />{" "}
          recommended that…”, then the subjunctive must follow.  That’s just the
          way it is! It’s a little <br /> confusing, and a lot of people just
          skip setting up sentences in the subjunctive because they think <br />{" "}
          it sounds awkward.  The reason it sounds awkward is because they don’t
          know what to do with <br /> the verb – but now you will know! Here are
          some more examples:
        </p>
        <p className={styles.highlight1}>
          David advises that his sister do her chores.
        </p>
        <p className={styles.highlight2}>
          It is crucial that we go to the store and buy pizza rolls.
        </p>
        <p className={styles.highlight2}>
          It’s a bad idea that Jessica skip class.
        </p>
        <p className={styles.highlight2}>
          It was requested that he submit his paper by Friday.
        </p>
        <p className={styles.highlight2}>Maybe he won’t be ready by Friday?</p>
        <p className={styles.thirdcontent}>
          Note that you don’t have to use subjunctive in these types of
          situations that have a similar <br /> meaning:
        </p>
        <p className={styles.highlight1}>
          David advises his sister to do her chores.
        </p>
        <p className={styles.highlight2}>
          It is crucial to go to the store and buy pizza rolls.
        </p>
        <p className={styles.thirdcontent}>
          How is it formed? You’ve probably caught on by now, but the
          subjunctive form of a verb is easy to <br /> make.  Take the
          infinitive, or just your standard form of the verb (to go, to walk, to
          talk, to run, <br /> etc.) and put it where you normally would.  “He
          goes” turns into “he go”.   Similarly, “we go” <br /> turns into…”we
          go”?  Yep, it sounds exactly the same.  Really, the only time you
          actually have to <br />
          think about the verb conjugation is when you are talking about “he” or
          “she” as the subject. Of <br /> course, there is one exception to
          forming the subjunctive: to be. For example, my earlier <br />{" "}
          sentence, “It is important that she be to class on time,” is correct. 
          In this case, any subject you <br /> use will be “be” – I be, he be,
          she be, you be, we be, they be! Whew. Okay, so what about the sentence
          at the <br />
          beginning that says “I wouldn’t do that if I were you”?  There’s no
          “it is important <br /> that…” type of thing going on here, so why
          doesn’t it say “was” instead of “were”? And why isn’t it <br /> “be”
          like we were just talking about?
        </p>
        <p className={styles.thirdcontent}>
          The quick answer is because English is funny that way. To explain it
          with more confusing <br /> grammar words, it’s because we technically
          have to put it into past subjunctive. Oh no! There’s a <br /> past?
          Good news; it’s only different with “to be.” We use past subjunctive
          in situations where we <br /> say “as if”, “wish”, “suppose”, and
          “if.”
        </p>
        <p className={styles.highlight1}>
          If I were President, everyone would get a free car.
        </p>
        <p className={styles.highlight2}>It’s not as if she were dumb.</p>
        <p className={styles.highlight2}>
          If I went to the dance, would you come with me?
        </p>
        <p className={styles.highlight2}>
          He wishes he were in the play with his friends.
        </p>
        <p className={styles.highlight2}>I wouldn’t do that if I were you.</p>
        <p className={styles.highlight2}>
          If I were your boyfriend, I’d never let you go.
        </p>
        <p className={styles.thirdcontent}>
          Why does it matter? The subjunctive is a great way to demonstrate your
          fabulous writing skills. <br /> Even though you can almost always
          rearrange a sentence to avoid the subjunctive, it is still a nice{" "}
          <br />
          tool to understand, especially in formal situations like papers and
          presentations. You can also <br /> impress everyone with your superior
          grasp on grammar as you correct Justin Bieber in <br /> Boyfriend, and
          refer to the subjunctive.
        </p>
        <p className={styles.lasttest}>KS</p>
      </article>
      <div className={styles.fourthcontent}>
        <Link href="/articles" className={styles.button1}>
          <button>Grammar Articles Home</button>
        </Link>
        <Link href="/imminent-eminent-immanent" className={styles.button2}>
          <button>Next Grammar Article</button>
        </Link>
      </div>
    </>
  );
}
