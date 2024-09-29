"use client";

import React from 'react'

import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Button,
} from "@material-tailwind/react";

export default function Page() {
	return (
		<Card className="mt-6 w-100 p-5">
			<h2 className="text-sky-400">Grammar Articles</h2>
			<CardBody>
				<Typography>
					<div className="col-12 menu text-sky-400">
						<ul>
							<li>
								<a href="/articles/articlelist/subjunctivemood">
									The Subjunctive Mood
									<span className="authorNameMain"> by Katherine Schwartz</span>
								</a>
							</li>
							<li>
								<a href="/articles/articlelist/imminent-eminent-immanent">
									Imminent vs Eminent vs Immanent
									<span className="authorNameMain"> by Jillian Torrassa</span>
								</a>
							</li>
							<li>
								<a href="/articles/articlelist/advice-for-english-learners">
									The Best Advice for English Learners: READ!
									<span className="authorNameMain"> by Emily Zeller</span>
								</a>
							</li>
							<li>
								<a href="/articles/articlelist/who-whom">
									Who and Whom
									<span className="authorNameMain"> by Emily Zeller</span>
								</a>
							</li>
							<li>
								<a href="/articles/articlelist/proofreader">
									Finding the Proofreader Within You
									<span className="authorNameMain"> by Iris Price</span>
								</a>
							</li>
							<li>
								<a href="/articles/articlelist/compliment-complement">
									Compliment vs Complement
									<span className="authorNameMain"> by Jillian Torrassa</span>
								</a>
							</li>
							<li>
								<a href="/articles/articlelist/the-importance-of-punctuation">
									The Importance of Punctuation!
									<span className="authorNameMain"> by Emily Zeller</span>
								</a>
							</li>
							<li>
								<a href="/articles/articlelist/semicolon">
									The Semicolon
									<span className="authorNameMain"> by Emily Zeller</span>
								</a>
							</li>
							<li>
								<a href="/articles/articlelist/commas">
									The Long and Short of It: Commas
									<span className="authorNameMain"> by Jillian Torrassa</span>
								</a>
							</li>
							<li>
								<a href="/articles/articlelist/english-language-quotes">
									Famous Quotes About Language
									<span className="authorNameMain"> by Vor English</span>
								</a>
							</li>
							<li>
								<a href="/articles/articlelist/american-dialects">
									A Crash Course in American Dialects
									<span className="authorNameMain"> by Alexandra Ambrose</span>
								</a>
							</li>
							<li>
								<a href="/articles/articlelist/allusive-illusive-elusive">
									Allusive vs Illusive vs Elusive
									<span className="authorNameMain"> by Alexandra Ambrose</span>
								</a>
							</li>
							<li>
								<a href="/articles/articlelist/where-in-the-world">
									Where in the World Do People Speak English?
									<span className="authorNameMain"> by Alexandra Ambrose</span>
								</a>
							</li>
							<li>
								<a href="/articles/articlelist/transitive-intransitive">
									Transitive vs Intransitive Verbs
									<span className="authorNameMain"> by Emily Rowan</span>
								</a>
							</li>
							<li>
								<a href="/articles/articlelist/more-about-punctuation">
									More About Punctuation
									<span className="authorNameMain"> by Jillian Torrassa</span>
								</a>
							</li>
							<li>
								<a href="/articles/articlelist/me">
									Me is Not a Bad Word
									<span className="authorNameMain"> by Ellen Kersey</span>
								</a>
							</li>
							<li>
								<a href="/articles/articlelist/apostrophe">
									Apostrophe's Are Often Misused
									<span className="authorNameMain"> by Ellen Kersey</span>
								</a>
							</li>
							<li>
								<a href="/articles/articlelist/cliches-aphorisms">
									Cliches/Aphorisms
									<span className="authorNameMain"> by Michael Hoeft</span>
								</a>
							</li>
						</ul>
					</div>
				</Typography>
			</CardBody>
			<CardFooter className="pt-0 bg-sky-400">
				<Button>Read More</Button>
			</CardFooter>
		</Card>
	);
}
