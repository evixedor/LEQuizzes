import styles from "../../../stylesheets/articles.css";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <>
      <div className={styles.article1}>
        <h1 className={styles.firstcontent}>
          <div className={styles.text1}>English Language Quotes</div>
          <div className={styles.text2}>by Launch English</div>
        </h1>
        <p className={styles.secondcontent}>
          <p className={styles.secondcontent}>Famous Quotes About Language….</p>
          <p className={styles.secondcontent}>
            “There is no mode of action, no form of emotion, that we do not
            share with the lower animals. It is only by language that we rise
            above them.”  (Oscar Wilde)
          </p>
          <p className={styles.secondcontent}>
            “The limits of my language means the limits of my world,”  (Ludwig
            Wittgenstein)
          </p>
          <p className={styles.secondcontent}>
            “Most of the fundamental ideas of science are essentially simple,
            and may, as a rule, be expressed in a language comprehensible to
            everyone.”  (Albert Einstein)
          </p>
          <p className={styles.secondcontent}>
            “A poet is, before anything else, a person who is passionately in
            love with language.”  (W.H. Auden)
          </p>
          <p className={styles.secondcontent}>
            “He who does not love his own language is worse than an animal and
            smelly fish.”  (Jose Rizal)
          </p>
          <p className={styles.secondcontent}>
            “I’m very sensitive to the English language.  I studied the
            dictionary obsessively when I was a kid and collect old
            dictionaries.  Words, I think, are very powerful and they convey an
            intention.”  (Drew Barrymore)
          </p>
          <p className={styles.secondcontent}>
            “If the English language made any sense, lackadaisical would have
            something to do with a shortage of flowers.”  (Doug Larson)
          </p>
          <p className={styles.secondcontent}>
            “To handle a language skillfully is to practice a kind of evocative
            sorcery.”  (Charles Baudelaire)
          </p>
          <p className={styles.secondcontent}>
            “The only language men ever speak perfectly is the one they learn in
            babyhood, when no one can teach them anything!”  (Maria Montessori)
          </p>
          <p className={styles.secondcontent}>
            “Everything in writing begins with language.  Language begins with
            listening.”  (Jeanette Winterson)
          </p>
          <p className={styles.secondcontent}>
            “Language is the friendliest of the things from which we cannot
            escape.”  (Mason Cooley)
          </p>
          <p className={styles.secondcontent}>
            “Our language is the reflection of ourselves.  A language is an
            exact reflection of the character and growth of its speakers.”
             (Cesar Chavez)
          </p>
          <p className={styles.secondcontent}>
            “All speech, written or spoken, is a dead language, until it finds a
            willing and prepared hearer.”  (Robert Louis Stevenson)
          </p>
          <p className={styles.secondcontent}>
            “Literature is the expression of a feeling of deprivation, a
            recourse against a sense of something missing.  But the contrary is
            also true; language is what makes us human.  It is a recourse
            against the meaningless noise and silence of nature and history.”
             (Octavio Paz)
          </p>
          <p className={styles.secondcontent}>
            “We should never denigrate any other culture but rather help people
            to understand the relationship between their own culture and the
            dominant culture.  When you understand another culture or language,
            it does not mean that you have to lose your own culture.”  (Edward
            T. Hall)
          </p>
          <p className={styles.secondcontent}>
            “What I take from writers I like is their economy – the ability to
            use language to very effective ends.  The ability to have somebody
            read something and see it, or for somebody to paint an entire
            landscape of visual imagery with just sheets of words – that’s
            magical.  (Mos Def)
          </p>
          <p className={styles.secondcontent}>
            “Language is the blood of the soul into which thoughts run and out
            of which they grow.”  (Oliver Wendell Holmes)
          </p>
          <p className={styles.secondcontent}>
            “Language ought to be the joint creation of poets and manual
            workers.”  (George Orwell)
          </p>
          <p className={styles.secondcontent}>
            “We tend to look through language and not realize how much power
            language has.”  (Deborah Tannen)
          </p>
          <p className={styles.secondcontent}>
            “Although spoken English doesn’t obey the rules of written language,
            a person who doesn’t know the rules thoroughly is at a great
            disadvantage.”  (Marilyn vos Savant)
          </p>
          <p className={styles.secondcontent}>
            “Language is not only the vehicle of thought.  It is a great and
            efficient instrument in thinking.”  (Humphrey Davy)
          </p>
          <p className={styles.secondcontent}>
            “The art of communication is the language of leadership.”  (James
            Humes)
          </p>
          <p className={styles.secondcontent}>
            “I am very aware that playwrights, particularly good ones, have an
            intention for everything they write.  Language and punctuation is
            used specifically, and most of the time actors can find wonderful
            clues about character in the rhythm and cadence of the language
            used.”  (Laura Linney)
          </p>
          <p className={styles.secondcontent}>
            “I mean, language fascinates me anyway, and different words have
            different energies and you can change the whole drive of a
            sentence.”  (Alan Rickman)
          </p>
          <p className={styles.secondcontent}>
            “We’ve driven teenagers crazy in every language.”  (Robert B.
            Sherman)
          </p>
          <p className={styles.secondcontent}>
            “Playing golf is like learning a foreign language.”  (Henry
            Longhurst)
          </p>
          <p className={styles.secondcontent}>
            “Make definite assertions.  Avoid tame, colorless, hesitating,
            non-committal language.”  (William Strunk, Jr)
          </p>
          <p className={styles.secondcontent}>
            “Do not be troubled for a language.  Cultivate your soul and she
            will show herself.”  (Eugene Delacroix)
          </p>
        </p>
      </div>
      <div className={styles.fourthcontent}>
        <Link href="/articles/articlelist/american-dialects" className={styles.button1}>
          <button>Next Article</button>
        </Link>
        <Link href="/articles" className={styles.button2}>
          <button>Articles Home</button>
        </Link>
        <Link href="/articles/articlelist/commas" className={styles.button2}>
          <button>Previous Article</button>
        </Link>
      </div>
    </>
  );
}
