import styles from "../../../stylesheets/articles.css";
import Link from "next/link";
import React from 'react'

export default function Page() {
	return (
		<>
			<div className={styles.article1}>
				<h1 className={styles.firstcontent}>
					<div className={styles.text1}>Famous Cliches/Aphorisms</div>
					<div className={styles.text2}>by Mike Hoeft</div>
				</h1>
				<p className={styles.secondcontent}>
					CLICHES/APHORISMS 1ST (Mike Hoeft)  “A rose by any other name would
					smell as sweet.”  This oft-quoted Shakespeare line comes from Juliet
					herself, of the tragic Romeo and Juliet.  In Act 2, Scene 2, Juliet
					claims that the names of things don’t matter; rather, what matters is
					“what” things are.  “Namely,” it wouldn’t matter if an actual rose was
					called “junk,” for example.  What matters is the essence and
					unmistakable beauty of a “rose” that belies any name that is accorded
					to it.  She specifically references the delightful fragrance of a
					“rose” here, which brings forth an overall positive feeling that is
					invoked by anyone being near this sweet-smelling crimson flower. The
					actual reference has to do with the long-standing acrimony between
					Juliet’s and Romeo’s respective families, and hence the distinction of
					their different surnames, eg Juliet being a member of the “Capulet”
					family and Romeo being a member of the “Montague” family. Juliet is
					saying that “who cares what his last name is. Does it take anything
					away from the fact that he is a terrific person and I love him?”  She
					adds (and he agrees!) that they should just ignore their last names
					because their families have been in discord with one another for some
					time; Juliet is exclaiming that love knows no bounds, and that
					includes the last name of someone whose family is in contention with
					her own. Juliet: O Romeo, Romeo! wherefore art thou Romeo? Deny thy
					father and refuse thy name; Or, if thou wilt not, be but sworn my
					love, And I'll no longer be a Capulet.  Romeo:  [Aside] Shall I hear
					more, or shall I speak at this?  Juliet:  'Tis but thy name that is my
					enemy; Thou art thyself, though not a Montague. What's Montague? it is
					nor hand, nor foot, Nor arm, nor face, nor any other part Belonging to
					a man. O, be some other name! What's in a name? that which we call a
					rose By any other name would smell as sweet; So Romeo would, were he
					not Romeo call'd, Retain that dear perfection which he owes Without
					that title. Romeo, doff thy name, And for that name which is no part
					of thee Take all myself.  Romeo:  I take thee at thy word: Call me but
					love, and I'll be new baptized; Henceforth I never will be Romeo. This
					colloquialism would be used in that context whereby someone is making
					a jestful remark about the name of someone (maybe it’s an ugly name or
					something like that), and he/she is saying that the “person” and not
					the “name” is what matters. This could be stated in a business
					setting, but more firmly belongs in a social, more light-hearted
					situation and venue. As it is very lofty language from “the Bard”
					himself, it could be used as sarcasm or as a dig on someone’s last
					name, first name, or even their (presumably lowly) occupation or the
					such.  The speaker ought to be careful that this remark isn’t taken in
					a mean way and that it is received by an audience that would know
					something about Shakespeare and this famous line. Or the person can be
					talking to himself/herself in a snarky way or even a fun-loving
					way. “Abandon ship” This saying means exactly what most people would
					think it means:  “Let’s get the heck out of here ASAP (as soon as
					possible).”  Although it was probably used many times before, a famous
					origin of this saying was in the book Utopia, whereby Thomas More
					exclaims plainly: “You wouldn't abandon ship in a storm just because
					you couldn't control the winds.”  Thomas More here focuses on support
					and encouragement of the person/persons in the specific situation, but
					people nowadays would use it in one of two ways: 
					<div className={styles.thirdcontentarticle2child3}>
						<span>1.</span>{" "}
						<div>
							Let’s NOT abandon ship (and let’s finish what we started), whether
							it’s a company or a relationship or a level of schooling, etc. or
						</div>
					</div>
					<div className={styles.thirdcontentarticle2child3}>
						<span>2.</span>{" "}
						<div>
							Let’s abandon ship and END what we started (most often with good
							intentions).
						</div>
					</div>
					Most often, we’ve heard it spoken by a third party: “Don’t abandon
					ship just because…[this or that reason]” or “Maybe you guys should
					abandon ship at this point.” It can also be used in a comical way,
					with a speaker jovially calling out for his/her teammate/teammate to
					“abandon ship!” and all of them get the heck away from the activity
					they were previously engaged in.       
				</p>
			</div>
			<div className={styles.fourthcontent}>
				<Link href="/articles" className={styles.button1}>
					<button>Articles Home</button>
				</Link>
				<Link
					href="/articles/articlelist/apostrophe"
					className={styles.button2}
				>
					<button>Previous Article</button>
				</Link>
			</div>
		</>
	);
}
