import styles from "../articlescss/article.module.css";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className={styles.article1}>
        <h1 className={styles.firstcontent}>
          <div className={styles.text1}>Allusive vs Illusive vs Elusive</div>
          <div className={styles.text2}>by Alexandra Ambrose</div>
        </h1>
        <p className={styles.secondcontent}>
          Word Confusion: Is it “Allusive,” “Illusive,” or “Elusive?” (Alexandra
          Ambrose) <br />
          Homophones like allusive, illusive, and elusive can be extremely
          confusing. They sound the same (unless you really stress the initial
          vowel sounds), yet they are spelled differently and have completely
          different meanings. How do you differentiate them? <br />
          First, allusive comes from the word allusion, meaning a reference to
          another text. This can be a quote, name, similar type of phrasing,
          etc. <br />
          An example of an allusive text is T.S. Eliot’s poem “The Waste Land.”
          This poem has pages of end notes explaining the many classical,
          Shakespearean, and cultural allusions included in the poem.
          <p className={styles.secondcontent}>
            These fragments I have shored against my ruins. <br />
            Copy and paste this link to “The Waste Land” so you can investigate
            for yourself: <br />
            http://www.bartleby.com/201/1.html <br />
            Note: Eliot’s “The Waste Land” is one of the most important poems of
            all time. It launched the Modernist movement and changed poetry
            forever. In spite of its many obscure allusions and broken
            narrative, it was quite popular when published. <br />
            Check it out. Is it a good poem or just an interesting experiment?
            You decide. <br />
            Another example is the allusive title of the F. Scott Fitzgerald
            novel “Tender is the Night.”
          </p>
          <p className={styles.secondcontent}>
            This title is taken from a line in John Keats’ poem “Ode to a
            Nightingale.” <br />
            Copy and paste this into your browser – “Ode to a Nightingale”:{" "}
            <br />
            http://www.bartleby.com/101/624.html <br />
            Again, when trying to remember what allusive means, think allusion.
            Does your text allude to or refer in some way to another text?{" "}
            <br />
            The Oxford English Dictionary defines illusive as “tends to deceive
            by unreal appearances”. <br />
            (The OED is an incredible reference tool and many college campuses
            provide access to it. If you have the opportunity, explore the
            website and learn the history of words for yourself. <br />
            An example of illusive in a sentence is: “When you get close to a
            mirage, it ceases to be illusive.” <br />
            When trying to remember whether a text is illusive, think of an
            illusion or an image that isn’t real (eg “illusory”). <br />
            Finally, we have elusive. Something is elusive when it escapes
            simple definition or clarification. <br />
            The work of Modernist poet Gertrude Stein plays with the sound of
            language and word association. Because of this, the meanings of her
            poems remain elusive. <br />
            For example, in the short poem “Roast potatoes for” (which is the
            entire poem) there is no way to construct a single meaning or
            reading of the poem from only these three words. <br />
            If you are interested in reading more from Stein’s book, Tender
            Buttons, copy and paste this: <br />
            http://www.bartleby.com/140/2.html
          </p>
          <p className={styles.secondcontent}>
            Stein’s work clearly demonstrates how elusive language can be.{" "}
            <br />
            “In Parenthesis” by David Jones also is another elusive work as it
            is even unclear whether it should be classified as a novel or a long
            poem. <br />
            My favorite quote from the book is a great example of this: <br />
            “Stealthly, imperceptibly stript back, thinning <br />
            night wraps <br />
            unshrouding, unsheafing– <br />
            and insubstantial barriers dissolve. <br />
            This blind night-negative yields uncertain flux.” (59) <br />
            The way this particular quote appears on the page makes it look like
            it’s written as poem, but other places in the novel are organized as
            regular prose.
          </p>
          <p className={styles.secondcontent}>
            Read Jones’ work for yourself. See if you can navigate the elusive
            shifts between poetry and prose. <br />
            When trying to remember when a text is elusive, ask yourself if it
            eludes, or escapes, meaning? <br />
            Next time you hear, speak, read, or write the words allusive,
            illusive, and elusive, remember that each has a distinct meaning.{" "}
            <br />
            Test yourself: Does it <br />
            a) refer to another text (allusion), <br />
            b) make use of illusion (illusion), <br />
            c) escape meaning or definition? (elusive) <br />
            <p className={styles.lasttest}>AA</p>
          </p>
        </p>
      </div>
      <div className={styles.fourthcontent}>
        <Link href="/where-in-the-world" className={styles.button1}>
          <button>Next Article</button>
        </Link>
        <Link href="/articles" className={styles.button2}>
          <button>Articles Home</button>
        </Link>
        <Link href="/american-dialects" className={styles.button2}>
          <button>Previous Article</button>
        </Link>
      </div>
    </>
  );
}
