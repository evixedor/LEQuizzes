// ArticlesMain.js
import React from "react";

import Link from "next/link";

const ArticlesMain = ({ quizResult, questions, name }) => {
	

	return (
		<>
      <div id="container">
        <div class="col-12 menu">
          <h1>Grammar Artifdcles</h1>
          <ul>
            <li>
              <a href="/Users/evi-edor/Desktop/LEQuizzes/lequizzesbknd/public/articles/subjunctivemood.html"
                >The Subjunctive Mood<span class="authorNameMain">
                  by Katherine Schwartz</span
                ></a
              >
            </li>
            <li>
              <a href="imminent.html"
                >Imminent vs Eminent vs Immanent<span class="authorNameMain">
                  by Jillian Torrassa</span
                ></a
              >
            </li>
            <li>
              <a href="read.html"
                >The Best Advice for English Learners: READ!<span
                  class="authorNameMain"
                >
                  by Emily Zeller</span
                ></a
              >
            </li>
            <li>
              <a href="whowhom.html"
                >Who and Whom<span class="authorNameMain">
                  by Emily Zeller</span
                ></a
              >
            </li>
            <!--<li><a href="#">Top 5 Books for the 5th Grader by Chris Vasquez</a></li>-->
            <li>
              <a href="proofreader.html"
                >Finding the Proofreader Within You<span class="authorNameMain">
                  by Iris Price</span
                ></a
              >
            </li>
            <li>
              <a href="compliment.html"
                >Compliment vs Complement<span class="authorNameMain">
                  by Jillian Torrassa</span
                ></a
              >
            </li>
            <li>
              <a href="punctuation.html"
                >The Importance of Punctuation!<span class="authorNameMain">
                  by Emily Zeller</span
                ></a
              >
            </li>
            <li>
              <a href="semicolon.html"
                >The Semicolon<span class="authorNameMain">
                  by Emily Zeller</span
                ></a
              >
            </li>
            <li>
              <a href="commas.html"
                >The Long and Short of It: Commas<span class="authorNameMain">
                  by Jillian Torrassa</span
                ></a
              >
            </li>
            <li>
              <a href="languagequotes.html"
                >Famous Quotes About Language<span class="authorNameMain">
                  by Vor English</span
                ></a
              >
            </li>
            <li>
              <a href="americandialects.html"
                >A Crash Course in American Dialects<span class="authorNameMain">
                  by Alexandra Ambrose</span
                ></a
              >
            </li>
            <li>
              <a href="elusive.html"
                >Allusive vs Illusive vs Elusive<span class="authorNameMain">
                  by Alexandra Ambrose</span
                ></a
              >
            </li>
            <li>
              <a href="wherespeakenglish.html"
                >Where in the World Do People Speak English?<span
                  class="authorNameMain"
                >
                  by Alexandra Ambrose</span
                ></a
              >
            </li>
            <li>
              <a href="transitive.html"
                >Transitive vs Intransitive Verbs<span class="authorNameMain">
                  by Emily Rowan</span
                ></a
              >
            </li>
            <li>
              <a href="punctuation2.html"
                >More About Punctuation<span class="authorNameMain">
                  by Jillian Torrassa</span
                ></a
              >
            </li>
            <li>
              <a href="me.html"
                >Me is Not a Bad Word<span class="authorNameMain">
                  by Ellen Kersey</span
                ></a
              >
            </li>
            <li>
              <a href="apostrophes.html"
                >Apostrophe's Are Often Misused<span class="authorNameMain">
                  by Ellen Kersey</span
                ></a
              >
            </li>
            <li>
              <a href="cliches.html"
                >Cliches/Aphorisms<span class="authorNameMain">
                  by Michael Hoeft</span
                ></a
              >
            </li>
            <!--<li><a href="#">Top 10 Stephen King Horror Novels by Joshua Hendrickson</a></li>-->
            <!--<li><a href="#">Top 10 Science Fiction Novels for Summer Reading by Joshua Hendrickson</a></li>-->
          </ul>
        </div>
      </div>
		</>
	);
};

export default ScoreCard;