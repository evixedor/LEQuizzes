import styles from "../articlescss/article.module.css";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className={styles.article1}>
        <h1 className={styles.firstcontent}>
          <div className={styles.text1}>Advice for English Learners: Read!</div>
          <div className={styles.text2}>by Emily Zeller</div>
        </h1>

        <p className={styles.secondcontent}>
          In this day and age of technology and its varied forms of
          entertainment, I’ve noticed that reading a good book unfortunately
          seems to be turning into an ancient pastime. Grandpa comes in the
          living room and finds you and your buddies all crowded around the TV,
          absorbed in Call of Duty. He watches you for a second, shakes his head
          and looks somewhat longingly at the dusty, cobwebbed bookshelf and
          mutters something along the lines of “In my day, all we had to do for
          fun was read a good book.” Admit it; something like this has happened
          in your lifetime. It’s certainly happened in mine. One of our core
          missions here at Exemplary English is to help people with the
          practical use of writing and reading. We encourage a combination of
          both reading and writing for up to 40 minutes a day. That means you
          should read for at least a half an hour and write or journal for at
          least 10. You might have a few questions on what are good books to
          read. Exemplary English encourages readers to try classic material
          such as Pulitzer winners and magazines like “The New Yorker” and
          “Newsweek,”  “Childcraft,” “Highlights for Kids,” and “National
          Geographic for Kids.” Younger learners may enjoy stories like the
          Madeline series, The Beatrix Potter series, and the Pippi Longstocking
          series. Learners who struggle more with reading can also benefit from
          abridged, illustrated classics. Everyone’s reading choices are
          different. You are not expected to love every book you read. If people
          suggest you will love a book, and give it to you, you just might put
          it down after a few pages and never pick it up again. That is okay.
          Experiment with new genres (categories) of literature. Get to know
          yourself through books. Do you like adventure? Then you might enjoy
          Huckleberry Finn or Tom Sawyer by Mark Twain. Do you like fantasies
          and mythology? Try authors like J.R.R Tolkien, Peter S. Beagle and J.K
          Rowling. Do you love European/English literature? Try Charles Dickens.
          There are endless possibilities when it comes to enjoying reading.
          There are some people out there who say that some books are not the
          right kind for young people to be learning or even to be reading.  It
          is true that some books are hit-and-miss as far as the word ‘classic’
          is defined; you also may not find Twilight or Harry Potter on the
          reading list in universities. But reading should be a pleasurable
          activity. If you enjoy reading, then we here at Exemplary English
          applaud you! Reading is all about learning to appreciate and love the
          English language and literacy. Learning should be both practical and
          fun. If English is your second language or if you speak English but
          also have learned another language, then I also suggest reading books
          in the language of your choice. Reading books about or from different
          cultures is also a great way to learn about the world around you. I
          once read a book that taught basic Hungarian and – after several
          months of study and practice – I was able to communicate with a little
          boy in my work who spoke and only understood Hungarian. Take note:
          learning another language DOES NOT happen overnight. It takes a lot of
          time, practice and study. But I digress…. Even a translated book can
          be enjoyable and informative for those who do not wish to learn
          another language. Reading is more fun when you are comfortable. Be
          sure you have no other distractions or obligations. A little music is
          fine, but only loud enough to be within your hearing range. It’s kind
          of hard to read while One Direction is blaring in the background. Make
          sure you have a comfy chair or another favorite spot in which to enjoy
          your book. Above all, enjoy reading! If you find reading to be more
          like a chore, then perhaps another book or a different time would be
          better for you. Only you can make these choices for yourself. Learn to
          recognize your own comfort zone. Here are a couple of my favorite
          books. Charlotte’s Web by E.B White If you love stories with animals,
          this beautiful tale of friendship between two unlikely farm creatures
          will delight readers of all ages. Wilbur is a piglet who learns the
          power of friendship and sacrifice when he meets Charlotte, a common
          grey spider who lives in the loft above his sty. When Wilbur’s life is
          in danger from being turned into a crispy bacon breakfast, Charlotte
          turns a spider web into a miracle that changes both of their lives
          forever. While the ending might make you cry, I highly recommend it
          for anyone who loves animals and isn’t afraid to befriend a spider.
          Peter Pan by James Barrie This is one of my all-time favorites.  Have
          you ever dreamed of an island occupied by pirates, Indians and lost
          boys? Have you ever jumped off of your tall porch in order to try to
          fly to same island, resulting in your mom yelling at you for being so
          foolish? (Note: Just because I tried this after reading Peter Pan
          doesn’t mean you should.) This classic children’s fantasy helped to
          shape my own interest in imaginative and fantasy writing. Barrie’s
          imaginative and colorful characters are delightful to get to know.
          You’ll fall in love with the cocky Peter, a boy who refuses to grow
          up; you’ll shiver with delight at the pirate antics of the dastardly
          Captain Hook, and you’ll be enchanted by the mischievous fairy,
          Tinkerbell. As for writing, 10 minutes of writing is encouraged for
          most beginning writers.   However, no writer is restricted just to a
          few minutes. All writing levels have their own time and pace. As a
          seasoned writer, I devote about two hours a day where I sit at my
          computer and blog about my favorite activities and hobbies. Or if I’m
          feeling a bit old fashioned, I take out one of my many spiral
          notebooks and just journal my thoughts. I also like to write lists,
          short stories and even sometimes plays or screenplays. Alongside this
          leisurely writing, as a current college student I also have countless
          papers and projects to complete.It can sometimes be tough, but I still
          try to devote this special two hour block of my busy day specifically
          for a good sit down where I can just write. Good writers start out
          small. You might only like to write specifically for a purpose such as
          school. That is okay. Not everyone likes to spend a lot of time
          writing. But the more you learn to love writing, the more you will
          gain skills that allow you to write more than just for academic
          reasons. In conclusion, reading and writing go hand in hand. Take a
          half hour out of your day and find a good book, one that YOU want to
          read and go on a fantastic journey. Whether that journey is with
          Frodo, Edward Cullen, Harry Potter or David Copperfield, I encourage
          you to take that time to learn to love books. Also, your poor XBOX
          360’s will thank you for a deserving break. Happy Writing and Reading!
          <p className={styles.lasttest}>EZ</p>
        </p>
      </div>
      <div className={styles.fourthcontent}>
        <Link href="/who-whom" className={styles.button1}>
          <button>Next Article</button>
        </Link>
        <Link href="/articles" className={styles.button2}>
          <button>Articles Home</button>
        </Link>
        <Link href="/imminent-eminent-immanent" className={styles.button2}>
          <button>Previous Article</button>
        </Link>
      </div>
    </>
  );
}
