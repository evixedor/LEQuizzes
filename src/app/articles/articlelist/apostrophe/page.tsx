import styles from "../../../stylesheets/articles.css";
import Link from "next/link";
import React from 'react'

export default function Page() {
  return (
    <>
      <div className={styles.article1}>
        <h1 className={styles.firstcontent}>
          <div className={styles.text1}>Apostrophe's Are Often Misused</div>
          <div className={styles.text2}>by Ellen Kersey</div>
        </h1>
        <p className={styles.secondcontent}>
          You’ve seen the incorrectly-written signs: <br />
          Special dinner for mother’s and grandmother’s <br />
          Used video’s on sale <br />
          And, of course, the apostrophe in the title of this article, which is
          not only unnecessary, but wrong indeed! <br />
          Some people have no idea where to put apostrophes. They are aware of
          them, but never learned what to do with them, so they add them here
          and there – maybe hoping readers will think they are intellectual.{" "}
          <br />
          Well YOU can KNOW where to put them and how to use them correctly.
          Just follow the rules below– <br />
          But before we get to the rules, here are the only three reasons for
          using apostrophes: <br />
          <div className={styles.thirdcontentarticle2child3}>
            <span>1.</span>{" "}
            <div>
              contractions — <br />
              do not = don’t <br />
              cannot = can’t <br />
              will not = won’t
            </div>
          </div>
          English is the only language that uses contractions. We may use them
          because we prefer making words easier to say – or maybe we are simply
          lazy. The French would say, “La plume de ma tante” and “le table do
          mon oncle” – “the pen of my aunt” and “the table of my uncle.” But
          that would be too wordy for us English speakers, so we make one word
          out of two. We would say, “my aunt’s pen” and “my uncle’s table.”{" "}
          <br />
          <div className={styles.thirdcontentarticle2child3}>
            <span>2.</span>{" "}
            <div>
              to show ownership – <br />
              my dad’s car <br />
              the doctor’s office <br />a dog’s toy
            </div>
          </div>
          3.to clarify If I were to try to tell you “you need to dot your is and
          cross you ts,” I would need some apostrophes to make it clear that I’m
          talking about the letters “i” and “t.” So I would write, “You need to
          dot your i’s and cross your t’s.” Using the computer, I would be able
          to write, “You need to dot your is and cross your ts,” putting the
          letters I’m referring to in italics. This might work, but, as you can
          see, it might still be confusing. An important note: Apostrophes are
          never used to make words plural: the plural of “hero” is “heroes,” not
          “hero’s.”  The plural of “video” is simply “videos,” not “video’s.”
          Remember, earlier I told you I would give you some rules for using
          apostrophes that will help you to KNOW where to put them. These rules
          are for using apostrophes to show ownership, probably the trickiest
          aspect. A background story: When I was in the sixth grade, our teacher
          was giving us a test on using apostrophes to show ownership. I’m sure
          she had referred to the lessons in the book, which were lengthy,
          confusing, and hard to understand. On the test was this phrase: the
          childrens toys. I knew the word “childrens” needed an apostrophe, but
          I did not know where to put it. So, sneaky child that I was, I sort of
          snuck it in right above the “s.” I hoped my teacher would assume that
          it was wherever it was supposed to be. Sad to say, she called me up to
          her desk and said, “Ellen, where is this apostrophe?” I don’t remember
          whether I guessed right or wrong, but I remember that I had to guess
          because I didn’t know. Follow these three rules, and you will never
          have to guess. But…you must totally disallow those old standards: If
          the word ends with “s,” put the apostrophe before the “s” if the word
          is singular and put the apostrophe after the “s” if the word is
          plural… And never say, “Is it apostrophe s or s apostrophe?” Here are
          the rules: 1.Write the name of the owner. 2.Add an apostrophe. 3.Add
          an “s” if you hear it. Let’s try a few examples: Let’s say one boy
          owns a scooter.   Following the three rules, we would do this: a) boy
          b) boy’
          <div className={styles.thirdcontentarticle2child3}>
            <span>c) </span>{" "}
            <div>
              boy’s <br />
              The boy’s scooter is blue.
            </div>
          </div>
          Let’s say that three boys own scooters. a) boys b) boys’
          <div className={styles.thirdcontentarticle2child3}>
            <span>c) </span>{" "}
            <div>
              boys’ (I won’t add an “s” because I don’t hear another “s.”){" "}
              <br />
              The boys’ scooters are blue.
            </div>
          </div>
          Let’s try something a little harder: The children own books.
          a) children b) children’
          <div className={styles.thirdcontentarticle2child3}>
            <span>c) </span>{" "}
            <div>
              children’s <br />
              The children’s books are all organized on the bookshelf.
            </div>
          </div>
          The men own cars. a) men b) men’
          <div className={styles.thirdcontentarticle2child3}>
            <span>c) </span>{" "}
            <div>
              men’s <br />
              The men’s cars all run well.
            </div>
          </div>
          Now let’s try something even trickier: <br />
          Mr. and Mrs. Jones own their house. They even consider that the house
          also belongs to their children. So how are we going to write that?{" "}
          <br />
          First, we have to figure out who the owner is. (See the samples above:
          the owners were “boy,” “boys,” “children,” and “men.”) <br />
          It seems that all the family members own the house, so we can’t just
          say it is the “Jones’ house.” First, we have to make “Jones” plural to
          indicate all the members of the family. <br />
          How do we make a word plural that ends in “s”? <br />
          Let’s consider “glass” for example. <br />
          We make “glass” plural by adding “es” = glasses. <br />
          So we will do the same thing with “Jones.” <br />
          We will add “es” and end up with the Joneses. <br />
          Now we can consider how to make the owner show ownership. <br />
          We will follow the three rules: <br />
          a) Joneses (that’s the name of the owners of the house) <br />
          b) Joneses’ (we are adding the apostrophe) <br />
          c) Joneses’ (we are not adding an “s,” because we certainly won’t add
          another “s.”) <br />
          <p className={styles.secondcontent}>
            The Joneses’ house is deep in the forest. <br />
            If you have questions about apostrophes, don’t hesitate to contact
            me. I love apostrophes, but, just like my children, I get upset if
            they aren’t doing what they are supposed to do.
          </p>
          <p className={styles.lasttest}>EK</p>
        </p>
      </div>
      <div className={styles.fourthcontent}>
        <Link href="/articles/articlelist/cliches-aphorisms"  className={styles.button1}>
          <button>Next Article</button>
        </Link>
        <Link href="/articles" className={styles.button2}>
          <button>Articles Home</button>
        </Link>
        <Link href="/articles/articlelist/me" className={styles.button2}>
          <button>Previous Article</button>
        </Link>
      </div>
    </>
  );
}
