import styles from "../articlescss/article.module.css";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className={styles.article1}>
        
        <h1 className={styles.firstcontent}>
          <div className={styles.text1}>
            A Crash Course in American Dialects
          </div>
          <div className={styles.text2}>by Alexandra Ambrose</div>
        </h1>
        <p className={styles.secondcontent}>
          What exactly is the American accent? <br />
          Is it a Southern drawl, Californian Valley girl speech, or slow
          Midwestern accent of a cowboy in a Western movie? <br />
          Does one standard American dialect exist? <br />
          (Reminder: a dialect is a pattern of pronunciation or grammar
          particular to a specific region.) <br />
          The answer is no, not really. <br />
          This is a rough (and oversimplified) map of American dialects: <br />
          <p className={styles.secondcontent}>
            (Map from: www.ling.upenn.edu ) <br />
            Here is another dialect map divided into more specific regions:{" "}
            <br />
          </p>
          <p className={styles.secondcontent}>
            (Map from: www.uta.fi) <br />
            According to PBS’ video series (based on the wonderful book) “Do You
            Speak American?” there are 3 to 24 (or more) American dialects. The
            number depends on which linguistic expert you consult. <br />
            In order to make this a little simpler, I will focus on the most
            commonly agreed upon dialects including New England, Lower or
            Coastal South, Upper South, Midlands, and Southern California or
            Valley Girl. <br />
          </p>
          <p>
            Like, totally animated, right? <br />
            First, let’s start with New England Dialects. <br />
            These were influenced by Puritan settlers. <br />
            They tend to omit the final r in words, so they would say fah rather
            than far. <br />
            Some speakers also insert the word wicked into sentences to mean
            very. For example, “That was wicked awesome!” means that was really
            cool. <br />
            Some words we use that come from New England dialect include:
            conniption fit, scrimp, pesky, and snicker. <br />
            Then, we have the Lower or Coastal South associated with the
            Southern drawl style of speech. <br />
            This area was first settled by English Royalists with their
            servants. These Royalists brought the Southern English drawl and use
            of ain’t with them to America. <br />
            Southern dialect speakers also accent the first syllable of words,
            like gee-tar (guitar) or Jew-ly (July). Most vowels in Southern
            speech become long and accentuated, as in eggs turns into aigz.{" "}
            <br />
            Some Southern words include: snickerdoodles, tacky, varmint, and
            vittles.
          </p>
          <p className={styles.secondcontent}>
            Appalachian Region of the US. <br />
            The Upper South or Appalachian region was settled by poor Scots
            Irish settlers during the 18th and early 19th century. <br />
            In opposition to the Lower South, these speakers flatten diphthongs
            (or long vowels), making fire sound like far and tire sound like
            tar. <br />
            Speakers of the Upper Southern Dialect are also characterized by an
            intrusive t in their speech, which makes once sound like oncet.
            Similarly, they have an h retention in words like it and ain’t which
            the would pronounce like hit and hain’t. <br />
          </p>
          <p className={styles.secondcontent}>
            Midwest Region of US <br />
            The Midlands or Midwest was settled by Quakers and their dialect
            mixed with that of the later Swedish and German settlers in the
            area. <br />
            Long vowels are also pronounced without diphthongs or long sounds.
            For example, wide would sound more like wahde. <br />
            This area is considered the one with the least variation from place
            to place.
          </p>
          <p className={styles.secondcontent}>
            West Region of US <br />
            While most of the West (as you can see in the dialect maps) is
            grouped together as having a singular dialect, this really isn’t
            true. One of the distinctive variations has been brought about by
            the California Vowel Shift. While many other places experience vowel
            shifts, which are changes in the way vowels are pronounced, this one
            is significant because it characterizes a popular dialect the West
            Coast, especially, is known for: Valley Girl speech. <br />
            This is characterized by the insertion of like, the pronunciation
            change of that to thaht, and uptalk, which ends every sentence like
            a question using a higher tone. This hasn’t just affected California
            however; many of the characteristics of this dialect are spreading
            throughout the U.S. <br />
            This list of dialects does not include Chicano English, African
            American Vernacular English, or many other variations of dialects in
            smaller areas. The U.S. is not only a melting pot of cultural
            backgrounds, but it is also a melting pot of approaches to the
            English language. <br />
            It’s easy to stereotype these dialects (and trust me, I have my own
            biases too), but they are all equally a valid part of our American
            identity. Each dialect is influenced by the first settlers of the
            area and continues to be used in order to preserve a sense of local
            identity.
          </p>
          <p className={styles.lasttest}>AA</p>
          <p className={styles.secondcontent}>
            Sources: Dr. Edwin Battistella’s powerpoints for American Dialects{" "}
            <br />
            The “Do You Speak American?” website: http://www.pbs.org/speak/
          </p>
        </p>

      </div>

      <div className={styles.fourthcontent}>

        <Link href="/articles/articlelist/allusive-illusive-elusive" className={styles.button1}>
          <button>Next Article</button>
        </Link>

        <Link href="/articles" className={styles.button2}>
          <button>Articles Home</button>
        </Link>

        <Link href="/articles/articlelist/english-language-quotes" className={styles.button2}>
          <button>Previous Article</button>
        </Link>
        
      </div>
    </>
  );
}
