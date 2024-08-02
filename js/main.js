/** Responsive Navbar **/

        function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
        }

/** Smooth Scrolling**/
 $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    });

/** Main Diagnostic Quiz Function **/

(function () {
    var questions = [

      //Section 1: Listening (100 Problems, 75 minutes)
      //Part 1: Photographs 1-10 OK
      //Part 2: Question-Response 11-40 OK

      //Part 3: Conversations 41-66 (currently at 56) OK
      //Need 26 Conversations

      //add these up-completed
      //41-45 (5)
      //46-50 (5)
      //51-56 (6)
      //91-95 (5)
      //96-100 (5)

      //Part 4: Short Talks 67-100
      //need 34

      //add these up
      //57-61 (6)
      //62-66 (5)
      //76-80 (5)
      //87-90 (4)
      //need 14 ([[create 14 pull from 67-70 (4) DONE, 81-86 (6) DONE, 154-157 (4) DONE)]]
      //go all the way to 100

      //158 is loose/where to put it?

      //Section 2: Reading (100 Problems, 75 minutes)

      //Part 5: Incomplete Sentences (One Blank) 101-140 OK

      //Part 6: Error Recognition or Text Completion (Multiple Blanks) 141-158
      //18 needed

      //add these up
      //141-143 (3)
      //144-146 (3)
      //147-149 (3)
      //150-153 (4)
      //we need 5 -- [[create 5 from (71-75) as Text Completion]]



      //Part 7: Reading Comprehension 159-200
      //need 42

      //add these up
      //67-70 (4) sent to toeic3 (earmarked swapped)
      //71-75 (5) sent to toeic3(earmarked swapped)
      //81-86 (6) sent to toeic3(earmarked swapped)
      //154-158 (5) sent to toeic3(earmarked swapped except for 158)

      //159-163 (5)
      //164-167 (4)
      //168-172 (5)
      //173-177 (5)
      //178-182 (5)
      //183-187 (5)
      //188-192 (5)
      //193-197 (5)
      //198-200 (3)
      //got 62 of these...(need to LOSE 20 send to other toeic3)




        {
          //
          //#1
          //2c - 2person conf call
          //https://docs.google.com/document/d/1Fh9vvneRlcoN3eyXCaVTVl2_Tmitdh1j5QCRU_PCY6Y/edit
          qType: "Section 1: Listening Test (Part 1: Photographs)",
          question: "Listen to the recording and choose the best answer.",
          choices: ["A", "B", "C", "D"],
          correctAnswer: 2,
          audio: "1_toeic2.mp3",
          image: "img/mancomputer1.jpg"
        },
//
        { //2
          //
          //b1 - skyscrapers
          //mwh vo
          qType: "Section 1: Listening Test (Part 1: Photographs)",
          question: "Listen to the recording and choose the best answer.",
          choices: ["A", "B", "C", "D"],
          correctAnswer: 1,
          audio: "2_toeic2.mp3",
          image: "img/buildings1.jpg"
        },
//
        {
          //3
          //c2

          // mh vo
          qType: "Section 1: Listening Test (Part 1: Photographs)",
          question: "Listen to the recording and choose the best answer.",
          choices: ["A", "B", "C", "D"],
          correctAnswer: 2,
          audio: "3_toeic2.mp3",
          image: "img/emptychairs1.jpg"
        },

        {
          //4
          //
          //
          //mwh,vo d3 - 2 women conf rm
          qType: "Section 1: Listening Test (Part 1: Photographs)",
          question: "Listen to the recording and choose the best answer.",
          choices: ["A", "B", "C", "D"],
          correctAnswer: 3,
          image: "img/women1.jpg",
          audio: "4_toeic2.mp3"
},

{



    //5
    //mwh, vo c2 - students auditorium
    qType: "Section 1: Listening Test (Part 1: Photographs)",
    question: "Listen to the recording and choose the best answer.",
    choices: ["A", "B", "C", "D"],
    correctAnswer: 2,
    image: "img/students1.jpg",
    audio: "5_toeic2.mp3"
  },

        {
          //6
   //mwh,vo - adults sitting in hall b1
   qType: "Section 1: Listening Test (Part 1: Photographs)",
   question: "Listen to the recording and choose the best answer.",
   choices: ["A", "B", "C", "D"],
   correctAnswer: 1,
   audio: "6_toeic2.mp3",
   image: "img/adultstudents1.jpg"
        },
//
        {//7
              //mwh, daniela vo - woman presents in conf room d3
              qType: "Section 1: Listening Test (Part 1: Photographs)",
              question: "Listen to the recording and choose the best answer.",
              choices: ["A", "B", "C", "D"],
              correctAnswer: 3,
              // audio: "uber.mp3"
            // qType: "Part 5: Incomplete Sentences",
            // question: "Many stock _____ predict that the company's share price is wildly overalued, with a few predicting further a price drop of 25% or more in the coming quarter.",
            // choices: ["analyze", "analysis", "analysts", "analyses"],
            // correctAnswer: 2,
            image: "img/company1.jpg",
            audio: "7_toeic2.mp3"
            // content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat interdum mauris et volutpat. Ut gravida dolor sed turpis accumsan euismod. Pellentesque condimentum purus a laoreet semper. Quisque eleifend viverra vulputate. Vivamus rutrum arcu et arcu interdum gravida. Quisque id metus commodo, imperdiet sem non, semper justo. Nam dictum in purus sit amet dignissim. Integer auctor placerat felis eget vehicula. Ut vitae augue in arcu imperdiet vehicula. Morbi placerat sodales blandit. Suspendisse ac pharetra quam."
        },
//
        {

//8

    // 8 mwh,vo c2 - table wooden
    qType: "Section 1: Listening Test (Part 1: Photographs)",
    question: "Listen to the recording and choose the best answer.",
    choices: ["A", "B", "C", "D"],
    correctAnswer: 2,
    // audio: "promotion.mp3"
            // qType: "Part 5: Incomplete Sentences",
            // question: "She was _____ upset that her carpool cohort wouldn't come 30 minutes earlier to pick her up on Friday.",
            // choices: ["possible", "positive", "likely", "most of"],
            // correctAnswer: 2,
    image: "img/table1.jpg",
    audio: "8_toeic2.mp3"
            // content: "Consectetur adipiscing elit. Integer feugiat interdum mauris et volutpat. Ut gravida dolor sed turpis accumsan euismod. Pellentesque condimentum purus a laoreet semper. Quisque eleifend viverra vulputate. Vivamus rutrum arcu et arcu interdum gravida. Quisque id metus commodo, imperdiet sem non, semper justo. Nam dictum in purus sit amet dignissim. Integer auctor placerat felis eget vehicula. Ut vitae augue in arcu imperdiet vehicula. Morbi placerat sodales blandit. Suspendisse ac pharetra quam."
        },
//
        {//

          //9

   //9 mwh,vo c2 - man,woman,high-five,indoor
   qType: "Section 1: Listening Test (Part 1: Photographs)",
   question: "Listen to the recording and choose the best answer.",
   choices: ["A", "B", "C", "D"],
   correctAnswer: 2,
   // audio: "boatchalet.mp3"
            // qType: "Part 5: Incomplete Sentences",
            // question: "_____ paid maternity and paternity leave were both described as perks of the job before he was hired, Stephen was understandably annoyed when he read his work agreement that there was no such language in the offering document.",
            // choices: ["Meanwhile", "Most", "Since", "While"],
            // correctAnswer: 2,
   image: "img/highfive.jpg",
   audio: "9_toeic2.mp3"
            // content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat interdum mauris et volutpat. Ut gravida dolor sed turpis accumsan euismod. Pellentesque condimentum purus a laoreet semper. Quisque eleifend viverra vulputate. Vivamus rutrum arcu et arcu interdum gravida. Quisque id metus commodo, imperdiet sem non, semper justo. Nam dictum in purus sit amet dignissim. Integer auctor placerat felis eget vehicula. Ut vitae augue in arcu imperdiet vehicula. Morbi placerat sodales blandit. Suspendisse ac pharetra quam."
        },


        {//10

   //mwh, vo - a0 - women, meditate
   qType: "Section 1: Listening Test (Part 1: Photographs)",
   question: "Listen to the recording and choose the best answer.",
   choices: ["A", "B", "C", "D"],
   correctAnswer: 0,
   // audio: "boatchalet.mp3"
            // qType: "Part 6: Text Completion",
            // question: "What is the correct word that belongs in the '30' slot?",
            // choices: ["offer", "offers", "offering", "offered"],
   image: "img/meditate1.jpg",
   audio: "10_toeic2.mp3"
            // content: "Dear Mr. Anderson: Thank you very much for ____30____ me an opportunity to interview for the Sales Representative position at Ramarcher. This letter is to ____31____ our meeting time at 9:00 a.m. on Tuesday, March 18, 2018. I am very excited to have the chance to discuss my qualifications and the needs of your organization.  Thank you for your time and consideration. I look forward to meeting you.  Sincerely, Carolyn Vandergeld",
        },


//3 multiple-choice
        {//11

      //mwh, daniela vo - a0 stefan did
      qType: "Section 1: Listening Test (Part 2: Question-Response)",
      question: "Listen to the recording and choose the best answer.",
      choices: ["A", "B", "C"],
      correctAnswer: 0,
      audio: "11_toeic2.mp3"
        },

        {//12

      //mwh, daniela vo - a0 - she slept a lot, save
      qType: "Section 1: Listening Test (Part 2: Question-Response)",
      question: "Listen to the recording and choose the best answer.",
      choices: ["A", "B", "C"],
      correctAnswer: 0,
      // audio: "boatchalet.mp3"
            // qType: "Part 6: Text Completion",
            // question: "What is the correct word that belongs in the '30' slot?",
            // choices: ["offer", "offers", "offering", "offered"],
      // image: "img/meditate1.jpg",
      audio: "12_toeic2.mp3"
            // content: "Dear Mr. Anderson: Thank you very much for ____30____ me an opportunity to interview for the Sales Representative position at Ramarcher. This letter is to ____31____ our meeting time at 9:00 a.m. on Tuesday, March 18, 2018. I am very excited to have the chance to discuss my qualifications and the needs of your organization.  Thank you for your time and consideration. I look forward to meeting you.  Sincerely, Carolyn Vandergeld",
        },
        {//13

      //mwh, daniela vo -b1 - on dining room table
      qType: "Section 1: Listening Test (Part 2: Question-Response)",
      question: "Listen to the recording and choose the best answer.",
      choices: ["A", "B", "C"],
      correctAnswer: 1,
      audio: "13_toeic2.mp3"
        },
        {//14

      //mwh, daniela vo - a0 - no, just met
      qType: "Section 1: Listening Test (Part 2: Question-Response)",
      question: "Listen to the recording and choose the best answer.",
      choices: ["A", "B", "C"],
      correctAnswer: 0,
      // audio: "boatchalet.mp3"
            // qType: "Part 6: Text Completion",
            // question: "What is the correct word that belongs in the '30' slot?",
            // choices: ["offer", "offers", "offering", "offered"],
      // image: "img/meditate1.jpg",
      audio: "14_toeic2.mp3"
            // content: "Dear Mr. Anderson: Thank you very much for ____30____ me an opportunity to interview for the Sales Representative position at Ramarcher. This letter is to ____31____ our meeting time at 9:00 a.m. on Tuesday, March 18, 2018. I am very excited to have the chance to discuss my qualifications and the needs of your organization.  Thank you for your time and consideration. I look forward to meeting you.  Sincerely, Carolyn Vandergeld",
        },
        {//15

      //mwh, daniela vo - a0 - take time
      qType: "Section 1: Listening Test (Part 2: Question-Response)",
      question: "Listen to the recording and choose the best answer.",
      choices: ["A", "B", "C"],
      correctAnswer: 0,
      // audio: "boatchalet.mp3"
            // qType: "Part 6: Text Completion",
            // question: "What is the correct word that belongs in the '30' slot?",
            // choices: ["offer", "offers", "offering", "offered"],
      // image: "img/meditate1.jpg",
      audio: "15_toeic2.mp3",
            // content: "Dear Mr. Anderson: Thank you very much for ____30____ me an opportunity to interview for the Sales Representative position at Ramarcher. This letter is to ____31____ our meeting time at 9:00 a.m. on Tuesday, March 18, 2018. I am very excited to have the chance to discuss my qualifications and the needs of your organization.  Thank you for your time and consideration. I look forward to meeting you.  Sincerely, Carolyn Vandergeld",
        },

        {//16

      //mwh, daniela vo - c2 - month before
      qType: "Section 1: Listening Test (Part 2: Question-Response)",
      question: "Listen to the recording and choose the best answer.",
      choices: ["A", "B", "C"],
      correctAnswer: 2,
      // audio: "boatchalet.mp3"
            // qType: "Part 6: Text Completion",
            // question: "What is the correct word that belongs in the '30' slot?",
            // choices: ["offer", "offers", "offering", "offered"],
      // image: "img/meditate1.jpg",
      audio: "16_toeic2.mp3",
            // content: "Dear Mr. Anderson: Thank you very much for ____30____ me an opportunity to interview for the Sales Representative position at Ramarcher. This letter is to ____31____ our meeting time at 9:00 a.m. on Tuesday, March 18, 2018. I am very excited to have the chance to discuss my qualifications and the needs of your organization.  Thank you for your time and consideration. I look forward to meeting you.  Sincerely, Carolyn Vandergeld",
        },
        {//17

      //mwh, daniela vo -b1 - old
      qType: "Section 1: Listening Test (Part 2: Question-Response)",
      question: "Listen to the recording and choose the best answer.",
      choices: ["A", "B", "C"],
      correctAnswer: 1,
      // audio: "boatchalet.mp3"
            // qType: "Part 6: Text Completion",
            // question: "What is the correct word that belongs in the '30' slot?",
            // choices: ["offer", "offers", "offering", "offered"],
      // image: "img/meditate1.jpg",
      audio: "17_toeic2.mp3",
            // content: "Dear Mr. Anderson: Thank you very much for ____30____ me an opportunity to interview for the Sales Representative position at Ramarcher. This letter is to ____31____ our meeting time at 9:00 a.m. on Tuesday, March 18, 2018. I am very excited to have the chance to discuss my qualifications and the needs of your organization.  Thank you for your time and consideration. I look forward to meeting you.  Sincerely, Carolyn Vandergeld",
        },
        {//18

      //mwh, daniela vo -a0 - 7 or 8
      qType: "Section 1: Listening Test (Part 2: Question-Response)",
      question: "Listen to the recording and choose the best answer.",
      choices: ["A", "B", "C"],
      correctAnswer: 0,
      // audio: "boatchalet.mp3"
            // qType: "Part 6: Text Completion",
            // question: "What is the correct word that belongs in the '30' slot?",
            // choices: ["offer", "offers", "offering", "offered"],
      // image: "img/meditate1.jpg",
      audio: "18_toeic2.mp3",
            // content: "Dear Mr. Anderson: Thank you very much for ____30____ me an opportunity to interview for the Sales Representative position at Ramarcher. This letter is to ____31____ our meeting time at 9:00 a.m. on Tuesday, March 18, 2018. I am very excited to have the chance to discuss my qualifications and the needs of your organization.  Thank you for your time and consideration. I look forward to meeting you.  Sincerely, Carolyn Vandergeld",
        },
        {//19

      //mwh, daniela vo - c2 - armed, won't
      qType: "Section 1: Listening Test (Part 2: Question-Response)",
      question: "Listen to the recording and choose the best answer.",
      choices: ["A", "B", "C"],
      correctAnswer: 2,
      audio: "19_toeic2.mp3",
        },
        {//20

      //mwh, daniela vo -b1 truth
      qType: "Section 1: Listening Test (Part 2: Question-Response)",
      question: "Listen to the recording and choose the best answer.",
      choices: ["A", "B", "C"],
      correctAnswer: 1,
      // audio: "boatchalet.mp3"
            // qType: "Part 6: Text Completion",
            // question: "What is the correct word that belongs in the '30' slot?",
            // choices: ["offer", "offers", "offering", "offered"],
      // image: "img/meditate1.jpg",
      audio: "20_toeic2.mp3",
            // content: "Dear Mr. Anderson: Thank you very much for ____30____ me an opportunity to interview for the Sales Representative position at Ramarcher. This letter is to ____31____ our meeting time at 9:00 a.m. on Tuesday, March 18, 2018. I am very excited to have the chance to discuss my qualifications and the needs of your organization.  Thank you for your time and consideration. I look forward to meeting you.  Sincerely, Carolyn Vandergeld",
        },
        {//21

      //mwh, daniela vo -a0 - biased
      qType: "Section 1: Listening Test (Part 2: Question-Response)",
      question: "Listen to the recording and choose the best answer.",
      choices: ["A", "B", "C"],
      correctAnswer: 0,
      audio: "21_toeic2.mp3",
        },
        {//22

      //mwh, daniela vo -b1 - next week
      qType: "Section 1: Listening Test (Part 2: Question-Response)",
      question: "Listen to the recording and choose the best answer.",
      choices: ["A", "B", "C"],
      correctAnswer: 1,
      audio: "22_toeic2.mp3",
            // content: "Dear Mr. Anderson: Thank you very much for ____30____ me an opportunity to interview for the Sales Representative position at Ramarcher. This letter is to ____31____ our meeting time at 9:00 a.m. on Tuesday, March 18, 2018. I am very excited to have the chance to discuss my qualifications and the needs of your organization.  Thank you for your time and consideration. I look forward to meeting you.  Sincerely, Carolyn Vandergeld",
        },
        {//23

      //mwh, daniela vo -b1 - co-worker
      qType: "Section 1: Listening Test (Part 2: Question-Response)",
      question: "Listen to the recording and choose the best answer.",
      choices: ["A", "B", "C"],
      correctAnswer: 1,
      audio: "23_toeic2.mp3",
            // content: "Dear Mr. Anderson: Thank you very much for ____30____ me an opportunity to interview for the Sales Representative position at Ramarcher. This letter is to ____31____ our meeting time at 9:00 a.m. on Tuesday, March 18, 2018. I am very excited to have the chance to discuss my qualifications and the needs of your organization.  Thank you for your time and consideration. I look forward to meeting you.  Sincerely, Carolyn Vandergeld",
        },
        {//24

      //mwh, daniela vo - b1 - apply grad
      qType: "Section 1: Listening Test (Part 2: Question-Response)",
      question: "Listen to the recording and choose the best answer.",
      choices: ["A", "B", "C"],
      correctAnswer: 1,
      audio: "24_toeic2.mp3",
        },
        {//25

      //mwh, daniela vo - c2 - starts wed
      qType: "Section 1: Listening Test (Part 2: Question-Response)",
      question: "Listen to the recording and choose the best answer.",
      choices: ["A", "B", "C"],
      correctAnswer: 2,
      audio: "25_toeic2.mp3",
        },
        {//26

      //mwh, daniela vo - a0 get one tomorrow
      qType: "Section 1: Listening Test (Part 2: Question-Response)",
      question: "Listen to the recording and choose the best answer.",
      choices: ["A", "B", "C"],
      correctAnswer: 0,
      audio: "26_toeic2.mp3",
        },
        {//27

      //mwh, daniela vo - b1 - not erase
      qType: "Section 1: Listening Test (Part 2: Question-Response)",
      question: "Listen to the recording and choose the best answer.",
      choices: ["A", "B", "C"],
      correctAnswer: 1,
      // audio: "boatchalet.mp3"
            // qType: "Part 6: Text Completion",
            // question: "What is the correct word that belongs in the '30' slot?",
            // choices: ["offer", "offers", "offering", "offered"],
      // image: "img/meditate1.jpg",
      audio: "27_toeic2.mp3",
            // content: "Dear Mr. Anderson: Thank you very much for ____30____ me an opportunity to interview for the Sales Representative position at Ramarcher. This letter is to ____31____ our meeting time at 9:00 a.m. on Tuesday, March 18, 2018. I am very excited to have the chance to discuss my qualifications and the needs of your organization.  Thank you for your time and consideration. I look forward to meeting you.  Sincerely, Carolyn Vandergeld",
        },
        {//28

      //mwh, daniela vo - b1 - internet
      qType: "Section 1: Listening Test (Part 2: Question-Response)",
      question: "Listen to the recording and choose the best answer.",
      choices: ["A", "B", "C"],
      correctAnswer: 1,
      audio: "28_toeic2.mp3",
        },
        {//29

      //mwh, daniela vo - c2 - taught him
      qType: "Section 1: Listening Test (Part 2: Question-Response)",
      question: "Listen to the recording and choose the best answer.",
      choices: ["A", "B", "C"],
      correctAnswer: 2,
      audio: "29_toeic2.mp3",
        },
        {//30

      //mwh, daniela vo - c2 - money, because of it
      qType: "Section 1: Listening Test (Part 2: Question-Response)",
      question: "Listen to the recording and choose the best answer.",
      choices: ["A", "B", "C"],
      correctAnswer: 2,
      audio: "30_toeic2.mp3",
        },
        {//31

      //mwh, daniela vo a0 morale
      qType: "Section 1: Listening Test (Part 2: Question-Response)",
      question: "Listen to the recording and choose the best answer.",
      choices: ["A", "B", "C"],
      correctAnswer: 0,
      audio: "31_toeic2.mp3",
        },
        {//32

      //mwh, daniela vo -c2 hinder growth
      qType: "Section 1: Listening Test (Part 2: Question-Response)",
      question: "Listen to the recording and choose the best answer.",
      choices: ["A", "B", "C"],
      correctAnswer: 2,
      // audio: "boatchalet.mp3"
            // qType: "Part 6: Text Completion",
            // question: "What is the correct word that belongs in the '30' slot?",
            // choices: ["offer", "offers", "offering", "offered"],
      // image: "img/meditate1.jpg",
      audio: "32_toeic2.mp3",
            // content: "Dear Mr. Anderson: Thank you very much for ____30____ me an opportunity to interview for the Sales Representative position at Ramarcher. This letter is to ____31____ our meeting time at 9:00 a.m. on Tuesday, March 18, 2018. I am very excited to have the chance to discuss my qualifications and the needs of your organization.  Thank you for your time and consideration. I look forward to meeting you.  Sincerely, Carolyn Vandergeld",
        },

        {//33

      //mwh, daniela vo - a0 - back-end/front-end
      qType: "Section 1: Listening Test (Part 2: Question-Response)",
      question: "Listen to the recording and choose the best answer.",
      choices: ["A", "B", "C"],
      correctAnswer: 0,
      audio: "33_toeic2.mp3",
        },

        {//34

      //mwh, daniela vo - b1 - shoes
      qType: "Section 1: Listening Test (Part 2: Question-Response)",
      question: "Listen to the recording and choose the best answer.",
      choices: ["A", "B", "C"],
      correctAnswer: 1,
      // audio: "boatchalet.mp3"
            // qType: "Part 6: Text Completion",
            // question: "What is the correct word that belongs in the '30' slot?",
            // choices: ["offer", "offers", "offering", "offered"],
      // image: "img/meditate1.jpg",
      audio: "34_toeic2.mp3",
            // content: "Dear Mr. Anderson: Thank you very much for ____30____ me an opportunity to interview for the Sales Representative position at Ramarcher. This letter is to ____31____ our meeting time at 9:00 a.m. on Tuesday, March 18, 2018. I am very excited to have the chance to discuss my qualifications and the needs of your organization.  Thank you for your time and consideration. I look forward to meeting you.  Sincerely, Carolyn Vandergeld",
        },
        {//35

      //mwh, daniela vo -c2 - his approach, read
      qType: "Section 1: Listening Test (Part 2: Question-Response)",
      question: "Listen to the recording and choose the best answer.",
      choices: ["A", "B", "C"],
      correctAnswer: 2,
      audio: "35_toeic2.mp3",
            // content: "Dear Mr. Anderson: Thank you very much for ____30____ me an opportunity to interview for the Sales Representative position at Ramarcher. This letter is to ____31____ our meeting time at 9:00 a.m. on Tuesday, March 18, 2018. I am very excited to have the chance to discuss my qualifications and the needs of your organization.  Thank you for your time and consideration. I look forward to meeting you.  Sincerely, Carolyn Vandergeld",
        },
        {//36

      //mwh, daniela vo -c2 - i will try to
      qType: "Section 1: Listening Test (Part 2: Question-Response)",
      question: "Listen to the recording and choose the best answer.",
      choices: ["A", "B", "C"],
      correctAnswer: 2,
      audio: "36_toeic2.mp3",
            // content: "Dear Mr. Anderson: Thank you very much for ____30____ me an opportunity to interview for the Sales Representative position at Ramarcher. This letter is to ____31____ our meeting time at 9:00 a.m. on Tuesday, March 18, 2018. I am very excited to have the chance to discuss my qualifications and the needs of your organization.  Thank you for your time and consideration. I look forward to meeting you.  Sincerely, Carolyn Vandergeld",
        },
        {//37

      //mwh, daniela vo - c2 - 24-48 months
      qType: "Section 1: Listening Test (Part 2: Question-Response)",
      question: "Listen to the recording and choose the best answer.",
      choices: ["A", "B", "C"],
      correctAnswer: 2,
      audio: "37_toeic2.mp3",
            // content: "Dear Mr. Anderson: Thank you very much for ____30____ me an opportunity to interview for the Sales Representative position at Ramarcher. This letter is to ____31____ our meeting time at 9:00 a.m. on Tuesday, March 18, 2018. I am very excited to have the chance to discuss my qualifications and the needs of your organization.  Thank you for your time and consideration. I look forward to meeting you.  Sincerely, Carolyn Vandergeld",
        },
        {//38

      //mwh, daniela vo -a0 family
      qType: "Section 1: Listening Test (Part 2: Question-Response)",
      question: "Listen to the recording and choose the best answer.",
      choices: ["A", "B", "C"],
      correctAnswer: 0,
      // audio: "boatchalet.mp3"
            // qType: "Part 6: Text Completion",
            // question: "What is the correct word that belongs in the '30' slot?",
            // choices: ["offer", "offers", "offering", "offered"],
      // image: "img/meditate1.jpg",
      audio: "38_toeic2.mp3",
            // content: "Dear Mr. Anderson: Thank you very much for ____30____ me an opportunity to interview for the Sales Representative position at Ramarcher. This letter is to ____31____ our meeting time at 9:00 a.m. on Tuesday, March 18, 2018. I am very excited to have the chance to discuss my qualifications and the needs of your organization.  Thank you for your time and consideration. I look forward to meeting you.  Sincerely, Carolyn Vandergeld",
        },
        {//39

      //mwh, daniela vo - b1 - invest
      qType: "Section 1: Listening Test (Part 2: Question-Response)",
      question: "Listen to the recording and choose the best answer.",
      choices: ["A", "B", "C"],
      correctAnswer: 1,
      // audio: "boatchalet.mp3"
            // qType: "Part 6: Text Completion",
            // question: "What is the correct word that belongs in the '30' slot?",
            // choices: ["offer", "offers", "offering", "offered"],
      // image: "img/meditate1.jpg",
      audio: "39_toeic2.mp3",
            // content: "Dear Mr. Anderson: Thank you very much for ____30____ me an opportunity to interview for the Sales Representative position at Ramarcher. This letter is to ____31____ our meeting time at 9:00 a.m. on Tuesday, March 18, 2018. I am very excited to have the chance to discuss my qualifications and the needs of your organization.  Thank you for your time and consideration. I look forward to meeting you.  Sincerely, Carolyn Vandergeld",
        },
        {//40

      //mwh, daniela vo - c2 - indicators
      qType: "Section 1: Listening Test (Part 2: Question-Response)",
      question: "Listen to the recording and choose the best answer.",
      choices: ["A", "B", "C"],
      correctAnswer: 2,
      audio: "40_toeic2.mp3",
            // content: "Dear Mr. Anderson: Thank you very much for ____30____ me an opportunity to interview for the Sales Representative position at Ramarcher. This letter is to ____31____ our meeting time at 9:00 a.m. on Tuesday, March 18, 2018. I am very excited to have the chance to discuss my qualifications and the needs of your organization.  Thank you for your time and consideration. I look forward to meeting you.  Sincerely, Carolyn Vandergeld",
        },



        //41
        {

 //mwh, patti vo -
 qType: "Section 1: Listening Test (Part 3: Conversations)",
 question: "Listen to the recording. Now answer this question: 'What is the woman's initial suggestion about the inventory?'",
 choices: ["A) They need to sell the excess inventory they have.", "B) They need to buy inventory for the anticipated busy season.", "C) They need to work later and start work earlier.", "D) They need to hire more people in their department."],
 correctAnswer: 2,
 // audio: "boatchalet.mp3"
            // qType: "Part 6: Text Completion",
            // question: "What is the correct word that belongs in the '31' slot?",
            // choices: ["confirm", "deny", "revoke", "start"],
            // correctAnswer: 0,
            // //image: "img/ocean.jpg",
            // content: "Dear Mr. Anderson: Thank you very much for ____30____ me an opportunity to interview for the Sales Representative position at Ramarcher. This letter is to ____31____ our meeting time at 9:00 a.m. on Tuesday, March 18, 2018. I am very excited to have the chance to discuss my qualifications and the needs of your organization.  Thank you for your time and consideration. I look forward to meeting you.  Sincerely, Carolyn Vandergeld",
        },
{
          //42

    //mwh, patti vo -c2
    qType: "Section 1: Listening Test (Part 3: Conversations)",
    question: "Listen to the recording. Now answer this question: 'Based on the contextual evidence, what does 'scuttlebutt' mean?'",
    choices: ["A) dark and dreary", "B) crafty and wily", "C) rumors or gossip", "D) actual event"],
    correctAnswer: 2,
    // audio: "boatchalet.mp3"
        },
        {
          //43


    //mwh,patti vo - core products
    qType: "Section 1: Listening Test (Part 3: Conversations)",
    question: "Listen to the recording. Now answer this question: 'How many core products does the company have currently?'",
    choices: ["A) 3", "B) 4", "C) 5", "D) 7"],
    correctAnswer: 1,
    // audio: "bedtime.mp3"
            // qType: "Part 7: Reading Comprehension",
            // question: "Which of the following is a desired, but not necessary, qualification for an applicant to this job?",
            // choices: ["He/She must have experience working with children.", "He/She must not smoke.", "The applicant must be able to present himself/herself well.", "He/She must be able to work evenings at least some of the time."],
            // content: "Experienced Nanny Wanted: We are a professional couple looking for a caring, responsible, and experienced nanny to care for our two young children - a three-year-old boy and a 5-month old girl. You will be a nanny with at least three years experience in nannying, child care, or au pair work. You must love children and be mature, reliable, trustworthy, punctual and well presented. You will be required to work weekdays from 9am – 4pm, with occasional evenings/weekends for which you will be paid overtime. We are a non-smoking household and would prefer a non-smoker.",
            // correctAnswer: 1,
        },

        {
          //44

    //mwh, patti vo
    qType: "Section 1: Listening Test (Part 3: Conversations)",
    question: "Listen to the recording. Now answer this question: 'Based on the contextual evidence, what does 'peak season' mean?'",
    choices: ["A) season where customers don't buy much of your products", "B) season where customers buy a lot more of your products than normal", "C) season where customers buy the same amount of products as always", "D) season where customers don't buy any of your products"],
    correctAnswer: 0,
    // audio: "bedtime.mp3"
            // qType: "Part 7: Reading Comprehension",
            // question: "Which of the following do we know is true as a result of this article?",
            // choices: ["France had won the World Cup one other time before Sunday.", "Violence usually accompanies World Cup victory celebrations.", "Celebrations were held throughout France after the World Cup victory.", "Croatia and France are long-time football rivals."],
            // content: "France won the World Cup for the second time last Sunday, beating Croatia 4–2 in Russia. There were largely peaceful celebrations around Paris but some turned violent. Fans threw flares and fireworks at riot police who tried to disperse them. The French football players arrived home the following day and showed off their World Cup trophy while taking part in an open-top bus victory parade along the Champs-Elysees in Paris. Hundreds of thousands of people gathered to welcome back the country’s champions. There was even a fly-past of nine jets, trailing blue, white and red smoke. The jets took off and returned to Paix de Deus Air Force base, which is located in Nancy.  The football players then went to a garden party hosted by the President Emmanuel Macron.",
            // correctAnswer: 0,
        },

   //45
//
//    //mwh, patti vo - conversation end b1
{
   qType: "Section 1: Listening Test (Part 3: Conversations)",
   question: "Listen to the recording. Now answer this question: 'How does the conversation end?'",
   choices: ["A) The woman aims to call Mitch and tell him that they recommend that the company should aggressively buy more inventory to try to prep for the impending busy season.", "B) The woman aims to call Mitch and tell him that they recommend that the company should not buy a lot more inventory, yet that they should instead slow down their inventory purchases just in case the economy contracts.", "C) The man aims to call Mitch and tell him that they recommend that the company should aggressively buy more inventory to try to prep for the impending busy season.", "D) The man aims to call Mitch and tell him that they recommend that the company should not buy a lot more inventory, yet that they should instead slow down their inventory purchases just in case the economy contracts."],
   correctAnswer: 1,
        },

        {
          //46
   //mwh, patti vo b1
   qType: "Section 1: Listening Test (Part 3: Conversations)",
   question: "Listen to the recording. Now answer this question: 'What is this dialogue about?'",
   choices: ["A) The woman is giving the man advice about starting work there soon.", "B) The man is sharing some specifics about the woman's first few days of work there soon, including training for new team members.", "C) The woman is giving the man advice about starting work there soon.", "D) The woman is sharing some specifics about the man's first few days of work there soon, including training for new team members."],
   correctAnswer: 1,
   // audio: "inventory.mp3"
            // qType: "Part 7: Reading Comprehension",
            // question: "What is this advertisement for?",
            // choices: ["To announce an open position in a company", "To seek a purchaser for a pre-existing business", "To seek a partner to help in establishing a new business", "To attempt to find someone who can provide information on how to better run the company"],
            // content: "Established New Hampshire Commercial/Retail Tire Business located in downtown Waterford area.  Profits & Sales are excellent and have increased each year since we launched in 2000.  Management will stay on to assist new ownership, if desired.  Serious Inquiries Only.  Call Matt for more information @ 603.555.5559.",
            // correctAnswer: 1,
        },

        {
          //47
//mwh, patti vo c2
qType: "Section 1: Listening Test (Part 3: Conversations)",
question: "Listen to the recording. Now answer this question: 'What is the man's name?'",
choices: ["A) Jason", "B) Jesse", "C) Charles", "D) Jon"],
correctAnswer: 2,
// audio: "inventory.mp3"
            // qType: "Part 7: Reading Comprehension",
            // question: "Which of the following is not a benefit of the proposal being made in the advertisement?",
            // choices: ["The company is profitable.", "The company is not new and has been around for awhile.", "There is the possibility of assistance from the current owners.", "Information about the business will be disclosed to anyone."],
            // content: "Established New Hampshire Commercial/Retail Tire Business located in downtown Waterford area.  Profits & Sales are excellent and have increased each year since we launched in 2000.  Management will stay on to assist new ownership, if desired.  Serious Inquiries Only.  Call Matt for more information @ 603.555.5559.",
            // correctAnswer: 3,
        },


  //48
        {

  //mwh, patti vo -b1
  qType: "Section 1: Listening Test (Part 3: Conversations)",
  question: "Listen to the recording. Now answer this question: 'When is her first day of work at the company?'",
  choices: ["A) Monday at 9am", "B) Monday at 8am", "C) Monday at 10am", "D) Monday at Noon"],
  correctAnswer: 1,
  // audio: "inventory.mp3"
            // qType: "Part 7: Reading Comprehension",
            // question: "What is the purpose of this letter?",
            // choices: ["To show support for a family member who is running for union president", "To endorse a long-time friend and fellow union member in his run for state office", "To encourage readers to join a union", "To describe DeRosa's background"],
            // content: "I'm supporting my union brother Tom Delnicki for state representative. I served in the following positions as a proud union member:  business manager of Local 91 Elevator Constructions Union, I was voted as the president of the State Building Trades, appointed regional director of International Elevator Constructors of the Northeast Region, served as the labor member fo the State of Connecticut Elevator Licensing Board and became the chairman of the Connecticut Licensing Board. I have lived in South Windsor for over 50 years, raised a family and am retired.  I have known Delnicki for over 20 years and am impressed by his ability to work with everyone no matter who they are.  He has done a great job over the years and will make a fine state representative. The one thing that stands out in my mind is the fact that he is a union brother, having been a union member for over 30 years.  Ask Delnicki to see his union card, and I'll bet he has it in his wallet. Ask his opponent if he has a union card, and I'll bet he doesn't.  If you are a union brother or sister, I ask you to vote for my friend and union brother Delnicki. John DeRosa, South Windsor",
            // correctAnswer: 1,
        },

        //49
        {

  //mwh,patti vo -c2
  qType: "Section 1: Listening Test (Part 3: Conversations)",
  question: "Listen to the recording. Now answer this question: 'What was NOT mentioned that the woman will receive for free at the training from the company?'",
  choices: ["A) thermos", "B) backpack", "C) pencil/s", "D) pen/s"],
  correctAnswer: 2,
            // qType: "Part 7: Reading Comprehension",
            // question: "What is the most important reason that DeRosa cites for his support of Delnicki?",
            // choices: ["Their close relationship as members of the same family", "DeRosa's experience in the public health sector", "The fact that Delnicki has been part of a union for more than three decades", "The fact that Delnick's opponent is not a long-time union member"],
            // content: "I'm supporting my union brother Tom Delnicki for state representative. I served in the following positions as a proud union member:  business manager of Local 91 Elevator Constructions Union, I was voted as the president of the State Building Trades, appointed regional director of International Elevator Constructors of the Northeast Region, served as the labor member fo the State of Connecticut Elevator Licensing Board and became the chairman of the Connecticut Licensing Board. I have lived in South Windsor for over 50 years, raised a family and am retired.  I have known Delnicki for over 20 years and am impressed by his ability to work with everyone no matter who they are.  He has done a great job over the years and will make a fine state representative. The one thing that stands out in my mind is the fact that he is a union brother, having been a union member for over 30 years.  Ask Delnicki to see his union card, and I'll bet he has it in his wallet. Ask his opponent if he has a union card, and I'll bet he doesn't.  If you are a union brother or sister, I ask you to vote for my friend and union brother Delnicki. John DeRosa, South Windsor",
            // correctAnswer: 2,
        },


        //50
        {

    //mwh, patti vo -
    qType: "Section 1: Listening Test (Part 3: Conversations)",
    question: "Listen to the recording. Now answer this question: 'Based on the contextual evidence, what does 'swag' mean?'",
    choices: ["A) free useful stuff that has the company name on it or the person's name on it", "B) expensive useful stuff that has the company name on it or the person's name on it", "C) a way of walking in order to look cool, confident, or both", "D) taking a long drink of a beverage"],
    correctAnswer: 0,

  },
        //51
        {

      //patti, daniela vo -
      qType: "Section 1: Listening Test (Part 3: Conversations)",
      question: "Listen to the recording. Now answer this question: 'Who are talking in this conversation?'",
      choices: ["A) a realtor and a prospective seller", "B) a realtor and a prospective buyer", "C) a teacher and a prospective student", "D) a Nurse and a prospective patient"],
      correctAnswer: 1,
        },


        //52
        {
          //
            //patti, daniela vo -
            qType: "Section 1: Listening Test (Part 3: Conversations)",
            question: "Listen to the recording. Now answer this question: 'How many bedrooms is the prospect looking for?'",
            choices: ["A) 1", "B) 2", "C) 3", "D) 4"],
            correctAnswer: 1
        },

        //53
        {

             //patti, daniela vo -
             qType: "Section 1: Listening Test (Part 3: Conversations)",
             question: "Listen to the recording. Now answer this question: 'How many years' experience does the realtor claim to have?'",
             choices: ["A) 5", "B) 7", "C) 9", "D) 11"],
             correctAnswer: 2
        },


        {//54

             //patti, daniela vo -
             qType: "Section 1: Listening Test (Part 3: Conversations)",
             question: "Listen to the recording. Now answer this question: 'What is not mentioned by the prospect with regards to features of the desired home?'",
             choices: ["A) kitchen island", "B) central heat", "C) front yard", "D) central air"],
             correctAnswer: 0
        },

        {//55

    //patti, daniela vo -
    qType: "Section 1: Listening Test (Part 3: Conversations)",
    question: "Listen to the recording. Now answer this question: 'What is the price cap for the prospect?'",
    choices: ["A) $500,000", "B) $520,000", "C) $600,000", "D) $800,000"],
    correctAnswer: 0
  },


  {//56
    //patti, daniela vo -
    qType: "Section 1: Listening Test (Part 3: Conversations)",
    question: "Listen to the recording. Now answer this question: 'What amount did the lender approve the prospect for?'",
    choices: ["A) $500,000", "B) $520,000", "C) $540,000", "D) $600,000"],
    correctAnswer: 1

  },



  //57
  {

       //patti, vo -
       qType: "Part 4: Talks",
       question: "Listen to the recording. Now answer this question: 'What is the title of the podcast?'",
       choices: ["A) Medical Minds", "B) The Nurse's Station", "C) The Nurse Station", "D) MedStation"],
       correctAnswer: 2
  },



  //58
  {

   //patti,  vo -
   qType: "Part 4: Talks",
   question: "Listen to the recording. Now answer this question: 'How often does a podcast episode get published?'",
   choices: ["A) every week", "B) bi-weekly", "C) monthly", "D) bi-monthly"],
   correctAnswer: 2
 },


//59
 {


      //patti vo -
      qType: "Part 4: Talks",
      question: "Listen to the recording. Now answer this question: 'What is the name of the Nurse who spoke with the podcast host recently?'",
      choices: ["A) Shanna Oakley", "B) Shanna Giver", "C) Shanna Givens", "D) Shanna Glover"],
      correctAnswer: 2,
      // image: "img/bartleby1.png"

 },


 //60
 {

    //patti vo -
    qType: "Part 4: Talks",
    question: "Listen to the recording. Now answer this question: 'What kind of Nurse is Shanna?'",
    choices: ["A) Neo-Natal ICU Nurse", "B) Emergency Room Nurse", "C) Phlebotomist", "D) Peds ICU Nurse"],
    correctAnswer: 3,
    // image: "img/bartleby1.png"
},

{//61

    //patti vo -
    qType: "Part 4: Talks",
    question: "Listen to the recording. Now answer this question: 'Where did Shanna take her six-month sabbatical?'",
    choices: ["A) New Zealand", "B) Albania", "C) Turks and Caicos", "D) Australia"],
    correctAnswer: 0,
    // image: "img/bartleby1.png"
},




{//62

  //patti vo -
  qType: "Part 4: Talks",
  question: "Listen to the recording. Now answer this question: 'How many days is the event?'",
  choices: ["A) 1 day", "B) 2 days", "C) 3 days", "D) 4 days"],
  correctAnswer: 2,
  // image: "img/bartleby1.png"
},
{//63

     //patti vo -
     qType: "Part 4: Talks",
     question: "Listen to the recording. Now answer this question: 'What does AI stand for?'",
     choices: ["A) almost impossible", "B) already internalized", "C) artsy intelligence", "D) artificial intelligence"],
     correctAnswer: 3,
     // image: "img/bizdev.png"
},


{//64

     //patti vo -
     qType: "Part 4: Talks",
     question: "Listen to the recording. Now answer this question: 'About how many exhibitors are there at the event?'",
     choices: ["A) 100", "B) 150", "C) 200", "D) 250"],
     correctAnswer: 2,
     // image: "img/bizdev.png"
},


{//65
 //patti vo -
 qType: "Part 4: Talks",
 question: "Listen to the recording. Now answer this question: 'What company does Martin Hernandez work at?'",
 choices: ["A) extremesports.content", "B) extremesports.ai", "C) extremecontent.ai", "D) extremely.ai"],
 correctAnswer: 2,
 // image: "img/bizdev.png"
},



{
  //66

   //patti vo -
   qType: "Part 4: Talks",
   question: "Listen to the recording. Now answer this question: 'Who are business professionals who were not mentioned in this commentary?'",
   choices: ["A) marketers", "B) dentists", "C) psychiatrists", "D) physicians"],
   correctAnswer: 2,

},
{//67
  //marquese vo a0 copper not
  qType: "Part 4: Talks",
  question: "Listen to the recording. Now answer this question: 'What is not mentioned as being invented or improved upon by Edison and his team?'",
  choices: ["A) copper ore separator", "B) the telephone", "C) the electrical railway", "D) large-scale electrical lighting"],
  correctAnswer: 0,
  audio: "67-70_toeic2.mp3"
},
{//68
  //marquese vo b1 menlo
  qType: "Part 4: Talks",
  question: "Listen to the recording. Now answer this question: 'What was Edison's lab called?'",
  choices: ["A) Mario Kart Research Laboratory", "B) Menlo Park Research Laboratory", "C) Amazing Inventions Research Triangle", "D) Edison Park Research Center"],
  correctAnswer: 1,
  audio: "67-70_toeic2.mp3"
},







{//69
  //marquese vo a0 lone and help
  qType: "Part 4: Talks",
  question: "Listen to the recording. Now answer this question: 'What are the two seemingly contradictory 'inventions' that are often covered up by the Edison mythology?'",
  choices: ["A) Edison had both the image of being a lone inventor while also creating an environment of collaboration with other researchers who helped him succeed.", "B) Edison had both the image of working on light bulbs exclusively while also creating an environment of working on other innovations.", "C) Edison had both the image of being a lone workaholic inventor while also having the image of being a party animal, staying out late regularly.", "D) Edison had both the image of being rude and cantankerous with the press even as he had the image of being kind and generous."],
  correctAnswer: 0,
  audio: "67-70_toeic2.mp3"
},





{//70
  //marquese vo c2 thomas
  qType: "Part 4: Talks",
  question: "Listen to the recording. Now answer this question: 'What is Edison's first name?'",
  choices: ["A) Alexander", "B) Tomoya", "C) Thomas", "D) Danny"],
  correctAnswer: 2,
  audio: "67-70_toeic2.mp3"
},









//
// {
//   //67
//
//    //article thesaurus -b1
//    qType: "Part 7: Reading Comprehension (Single Passages)",
//    question: "What is the main idea of this passage?",
//    choices: ["A) As well as regularly using a thesaurus, learners should study the dictionary.", "B) As well as regularly using a dictionary, learners should study the thesaurus.", "C) As well as using a dictionary web or mobile app, learners should study using a thesaurus web or mobile app.", "D) As well as using a thesaurus web or mobile app, learners should study using a dictionary web or mobile app."],
//    correctAnswer: 1,
//    image: "img/thesaurus1.png"
// },
// {
//   //68
//
//    //article thesaurus -
//    qType: "Part 7: Reading Comprehension (Single Passages)",
//    question: "What audience is this article targeting?",
//    choices: ["A) students", "B) teachers", "C) school administrators", "D) school counselors"],
//    correctAnswer: 0,
//    image: "img/thesaurus1.png"
// },
// {
//   //69
//
//    //article thesaurus -c2
//    qType: "Part 7: Reading Comprehension (Single Passages)",
//    question: "According to the article, what is a drawback of an online thesaurus (vs a hard copy one)?",
//    choices: ["A) smaller font makes it harder to read", "B) harder to access", "C) student won't get the privilege of seeing many other words by thumbing through actual pages", "D) student will lose eyesight because of the glare of an electronic device"],
//    correctAnswer: 2,
//    image: "img/thesaurus1.png"
// },
// {
//   //70
//
//    //article thesaurus -
//    qType: "Part 7: Reading Comprehension (Single Passages)",
//    question: "Where would this article possibly be seen or published?",
//    choices: ["A) a creative literary journal", "B) an educational provider or website for English language learners", "C) an educational provider or website for Math learners", "D) a blog about entrepreneurship and business"],
//    correctAnswer: 2,
//    image: "img/thesaurus1.png"
// // },



{//71
//marquese vo d3 windows
qType: "Part 4: Talks",
question: "Listen to the recording. Now answer this question: 'What part of the home is NOT mentioned as being paintable in the ad?'",
choices: ["A) walls", "B) trim", "C) doors", "D) windows"],
correctAnswer: 3,
audio: "71-76_toeic2.mp3"
},
{//72
//marquese vo d3 1 day
qType: "Part 4: Talks",
question: "Listen to the recording. Now answer this question: 'How many days will it take for the company to deliver free samples to a prospective customer in the continental US?'",
choices: ["A) 5", "B) 3", "C) 2", "D) 1"],
correctAnswer: 3,
audio: "71-76_toeic2.mp3"


},
{//73
//marquese vo c2 1 fam own
qType: "Part 4: Talks",
question: "Listen to the recording. Now answer this question: 'Based on context clues, what does 'family-owned and operated' mean?'",
choices: ["A) It means that one single person owns and operates the business.", "B) It means that many families own and operate the business.", "C) It means that members of one family own and manage the business.", "D) It means that all the people who work at the company are in the same family."],
correctAnswer: 2,
audio: "71-76_toeic2.mp3"


},
{//74
//marquese vo d3 1988
qType: "Part 4: Talks",
question: "Listen to the recording. Now answer this question: 'What year did they open their business?'",
choices: ["A) 1977", "B) 1980", "C) 1985", "D) 1988"],
correctAnswer: 3,
audio: "71-76_toeic2.mp3"


},
{//75
//marquese vo d3 miller
qType: "Part 4: Talks",
question: "Listen to the recording. Now answer this question: 'What is the name of the family who runs the business?'",
choices: ["A) Palooka Family", "B) Painter Family", "C) Martin Family", "D) Miller Family"],
correctAnswer: 3,
audio: "71-76_toeic2.mp3"


},
{//76
//marquese vo c2 homes 50%
qType: "Part 4: Talks",
question: "Listen to the recording. Now answer this question: 'What does the business sell and how much is the Labor Day discount on products sold?'",
choices: ["A) basketballs; 50% off", "B) paint for cars; 50% off", "C) paint for homes; 50% off", "D) tools; 30% off"],
correctAnswer: 2,
audio: "71-76_toeic2.mp3"


},



// {
//   //71
//
//    //letter mngmt to employees -
//    qType: "Part 7: Reading Comprehension (Single Passages)",
//    question: "What role at the company might the author have?",
//    choices: ["A) Chief Operating Officer", "B) Junior Marketing Executive", "C) Web Developer", "D) Sales Outreach"],
//    correctAnswer: 0,
//    image: "img/71-75.png"
// },
// {
//   //72
//
//    //letter mngmt to employees -
//    qType: "Part 7: Reading Comprehension (Single Passages)",
//    question: "What sport is not mentioned as an example of what's being played in the sports leagues of the company?",
//    choices: ["A) soccer", "B) volleyball", "C) tennis", "D) pickleball"],
//    correctAnswer: 0,
//    image: "img/71-75.png"
// },
// {
//   //73
//
//    //letter mngmt to employees -b1
//    qType: "Part 7: Reading Comprehension (Single Passages)",
//    question: "What is the main goal of this letter?",
//    choices: ["A) company Management requires employees to go back to work twice a week", "B) company Management recommends employees to go back to work twice a week", "C) company Management recommends employees to go back to work full-time", "D) company Management requires employees to go back to work five times a week"],
//    correctAnswer: 1,
//    image: "img/71-75.png"
// },
// {
//   //74
//
//    //letter mngmt to employees -d3
//    qType: "Part 7: Reading Comprehension (Single Passages)",
//    question: "What is a mentioned reason why coming back to work shouldn't be too difficult?",
//    choices: ["A) most employees live within 20 miles of the rural office", "B) most employees live within 20 miles of the downtown office", "C) most employees live within 10 miles of the rural office", "D) most employees live within 10 miles of the downtown office"],
//    correctAnswer: 3,
//    image: "img/71-75.png"
// },
// {
//   //75
//
//    //letter mngmt to employees -d3
//    qType: "Part 7: Reading Comprehension (Single Passages)",
//    question: "According to the letter, when are the ideal days to come into the office?",
//    choices: ["A) Mondays and Fridays", "B) whenever there's a party and/or free food available", "C) Tuesdays and Thursdays", "D) whenever there's a group project, meeting, and/or when the team member is doing in-person professional development"],
//    correctAnswer: 3,
//    image: "img/71-75.png"
// },
// {
//   //76
//
//    //present to prof -b1
//    qType: "Part 7: Reading Comprehension (Single Passages)",
//    question: "Who is/are the probable party/ies involved in presenting this talk?",
//    choices: ["A) a fellow Professor", "B) a small group of students working on a project/business", "C) one student working on a project/business", "D) a coterie of athletes"],
//    correctAnswer: 1,
//    audio: "76-80.mp3"
// },
//
// {
//   //77
//
//    //present to prof -
//    qType: "Part 7: Reading Comprehension (Single Passages)",
//    question: "Who is being presented with the talk?",
//    choices: ["A) Professor Mill", "B) Professor Stewart", "C) Professor Harvey", "D) Professor Harris"],
//    correctAnswer: 2,
//    audio: "76-80.mp3"
// },
//
//
// {
//   //78
//
//    //present to prof -c2
//    qType: "Part 7: Reading Comprehension (Single Passages)",
//    question: "How many segments are showcased in the slide?",
//    choices: ["A) 2", "B) 3", "C) 4", "D) 5"],
//    correctAnswer: 2,
//    audio: "76-80.mp3"
// },
//
// {
//   //79
//
//    //present to prof -d3
//    qType: "Part 7: Reading Comprehension (Single Passages)",
//    question: "What is the slide called that is being presented?",
//    choices: ["A) Team", "B) Problem", "C) Solution", "D) Go-To-Market"],
//    correctAnswer: 3,
//    audio: "76-80.mp3"
// },
//
//
// {
//   //80
//
//    //present to prof -c2
//    qType: "Part 7: Reading Comprehension (Single Passages)",
//    question: "Based on the talk, what is another word for 'initial market'?",
//    choices: ["A) beach market", "B) zero market", "C) beach-head market", "D) start market"],
//    correctAnswer: 2,
//    audio: "76-80.mp3"
// },
{//77
//marquese vo b1 myth
qType: "Part 4: Talks",
question: "Listen to the recording. Now answer this question: 'What is this person's central thesis statement of his speech?'",
choices: ["A) He believes that anyone can get wealthy in America through hard work and sacrifice.", "B) He believes that it is mostly a myth that anyone can get wealthy in American through hard work and sacrifice.", "C) He believes that he himself can become wealthy in the US through hard work and sacrifice because he was born in the upper class.", "D) He believes that his son can become wealthy in the US through hard work and sacrific because his son was born to middle class parents."],
correctAnswer: 1,
audio: "77-80_toeic2.mp3"


},
{//78
//marquese vo d3 revered
qType: "Part 4: Talks",
question: "Listen to the recording. Now answer this question: 'Why does the speaker connect today with the 19th century in this speech?'",
choices: ["A) The 19th century is when Abraham Lincoln gave a speech about becoming wealthy and successful no matter your economic background.", "B) The 19th century is when the Civil War occurred and wealth was an off-shoot of the conflict.", "C) The 19th century is when people started becoming wealthy in the US.", "D) The 19th century is when the belief that economic success is possible and should be revered occurred in the US mainstream, according to the speaker."],
correctAnswer: 3,
audio: "77-80_toeic2.mp3"


},
{//79
//marquese vo d3 anyone
qType: "Part 4: Talks",
question: "Listen to the recording. Now answer this question: 'What does this part of Lincoln's speech mean: 'The prudent, penniless beginner in the world, labors for wages awhile, saves a surplus with which to buy tools or land for himself, then labors on his own account for awhile, and at length hires another new beginner to help him.''",
choices: ["A) Any already-wealthy worker can start a company and grow a business in America to become successful.", "B) It is impossible to become wealthy in America unless you are already wealthy or your family is already wealthy.", "C) Anyone can join in the Civil War efforts if need be, whether they have money or not.", "D) Any poor, but frugal worker can save money, start a company, and grow a business in America to become successful."],
correctAnswer: 3,
audio: "77-80_toeic2.mp3"


},





{//80
//marquese vo b1 anyone
qType: "Part 4: Talks",
question: "Listen to the recording. Now answer this question: 'What is the essence of Lincoln's 1861 speech to Congress?'",
choices: ["A) Anyone can find peace in America if he/she tries.", "B) Anyone can become wealthy in America if he/she tries.", "C) Anyone can find a spouse in America if he/she tries.", "D) Anyone can find good friends in America if he/she tries."],
correctAnswer: 1,
audio: "77-80_toeic2.mp3"


},








{
  //81

   //letter to teacher
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Who wrote this email?",
   choices: ["A) school principal", "B) school vice-principal", "C) current student", "D) former student"],
   correctAnswer: 3,
   image: "img/81-86.png"
},
{
  //82

   //letter to teacher
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "How many years has the student been out of the classroom where the teacher taught?",
   choices: ["A) 5", "B) 7", "C) 10", "D) 20"],
   correctAnswer: 2,
   image: "img/81-86.png"
},
{
  //83

   //letter to teacher
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "What is the teacher's name?",
   choices: ["A) Mrs. Shin", "B) Mrs. Erbes", "C) Mr. Fine", "D) Mrs. Sloan"],
   correctAnswer: 1,
   image: "img/81-86.png"
},
{
  //84

   //letter to teacher
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "What is the course that the teacher teaches?",
   choices: ["A) English", "B) Spanish", "C) French", "D) Japanese"],
   correctAnswer: 1,
   image: "img/81-86.png"
},
{
  //85

   //letter to teacher
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "What is the verb that the email writer mentions?",
   choices: ["A) hablar", "B) comer", "C) merecer", "D) comenzar"],
   correctAnswer: 2,
   image: "img/81-86.png"
},
{
  //86

   //letter to teacher
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Based on the textual evidence, what does the word 'mnemonic' have to do with?",
   choices: ["A) clarity", "B) fun", "C) repetition", "D) memory"],
   correctAnswer: 3,
   image: "img/81-86.png"
},
{
  //87

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "What is the name of the host of the podcast?",
   choices: ["A) Armando", "B) Belim", "C) Tosan", "Elsa"],
   correctAnswer: 2,
   // image: "img/81-86.png"
},
{
  //88

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "What does the call-in guest opine about governments aggressively taxing large corporations and billionaires?",
   choices: ["A) She thinks it's a good idea.", "B) She thinks it's a bad idea.", "C) She has no opinion about the matter.", "D) She is completely torn about the matter."],
   correctAnswer: 1,
   // image: "img/81-86.png"
},
{
  //89

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Based on the evidence, what does 'shrewd' mean?",
   choices: ["A) smart", "B) dumb", "C) arrogant", "D) thoughtless"],
   correctAnswer: 0,
   // image: "img/81-86.png"
},
{
  //90

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "What does the call-in guest declare that must be remembered?",
   choices: ["A) One must remember to pay your taxes on time.", "B) All behavior must be responded to on a case-by-case basis.", "C) Good behavior must be punished and bad behavior must be rewarded.", "D) Bad behavior must be punished and good behavior must be rewarded."],
   correctAnswer: 3,
   // image: "img/81-86.png"
},
{
  //91

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Based on the evidence, where are the two speakers?",
   choices: ["A) inside a residence", "B) outdoors at the beach", "C) inside an office", "D) out for coffee together"],
   correctAnswer: 3,
   // image: "img/81-86.png"
},
{
  //92

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "How did the woman know all about what the man was talking about?",
   choices: ["A) She overheard people at a local coffee shop discussing the subject.", "B) She overheard people at Egress talking about the subject.", "C) Her friend works a high-level job at Egress and told her all about the subject.", "D) Her friend is an entertainment attorney and she presumably read his blog about the subject and company."],
   correctAnswer: 3,
   // image: "img/81-86.png"
},
{
  //93

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "What is the news about the company they are discussing?",
   choices: ["A) Erskine Entertainment is selling off their kids film division.", "B) Erskine Entertainment is selling off their kids tv division.", "C) Egress Entertainment is selling off their kids film division.", "D) Egress Entertainment is selling off their kids tv division."],
   correctAnswer: 3,
   // image: "img/81-86.png"
},
{
  //94

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Based on the evidence, what does 'fare' mean in this conversation?",
   choices: ["A) type of media procured for an audience", "B) type of food eaten at a restaurant", "C) cost for eating food at a restaurant", "D) the weather outside"],
   correctAnswer: 0,
   // image: "img/81-86.png"
},
{
  //95

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "According to the woman, what is the main reason why the entertainment company wanted to sell of the discussed division of the company?",
   choices: ["A) they didn't like kids", "B) they didn't want to be in the kids tv part of the business anymore", "C) they didn't want to be in the mainstream tv part of the business anymore (for a broader more adult audience)", "D) they didn't like adults"],
   correctAnswer: 1,
   // image: "img/81-86.png"
},


{
  //96

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "What is happening during the conversation?",
   choices: ["A) A birthday party is occurring.", "B) The man shows a software demo to the woman.", "C) The woman shows a software demo to the man.", "D) A storm rages outside."],
   correctAnswer: 2,
   // image: "img/81-86.png"
},
{
  //97

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "What is the function of the software tool shared?",
   choices: ["A) helps edit essays for students", "B) helps find lost items for students", "C) grades tests for teachers", "D) helps administrators manage teachers"],
   correctAnswer: 2,
   // image: "img/81-86.png"
},
{
  //98

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "What is the tool called?",
   choices: ["A) GoSpeedyGraderX", "B) GoSpeedGradeA", "C) GoGradingX", "D) GoGoGradesZ"],
   correctAnswer: 0,
   // image: "img/81-86.png"
},
{
  //99

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "How much does it cost for every one thousand questions to be graded?",
   choices: ["A) $0.02", "B) $0.20", "C) $2.00", "D) $0.002"],
   correctAnswer: 3,
   // image: "img/81-86.png"
},
{
  //100

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Based on the contextual evidence, what is the probable occupation of the man?",
   choices: ["A) administrator", "B) principal", "C) student", "D) teacher"],
   correctAnswer: 3,
   // image: "img/81-86.png"
},
{
  //101

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "The move is expected to draw scrutiny as ________ tensions between both countries escalate.",
   choices: ["A) geopolitical", "B) geofencing", "C) geological", "D) geographical"],
   correctAnswer: 0,
   // image: "img/81-86.png"
},
{
  //102

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Their luxury brand failed to deliver on a ______ to have an electric vehicle in its lineup by the end of last year.",
   choices: ["A) promises", "B) promising", "C) promise", "D) promised"],
   correctAnswer: 2,
   // image: "img/81-86.png"
},
{
  //103

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Analysts are ________ the sharpest drop in earnings per share for companies in the S&P 500 since the pandemic was pounding the global economy in 2020.",
   choices: ["A) impending", "B) battling", "C) forecast", "D) forecasting"],
   correctAnswer: 3,
   // image: "img/81-86.png"
},
{
  //104

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "A massive, systemic financial confidence shock appears to have been ______, but tighter credit is manifesting in the real economy.",
   choices: ["A) avert", "B) averting", "C) averted", "D) averts"],
   correctAnswer: 2,
   // image: "img/81-86.png"
},
{
  //105

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Apple ended the last quarter with about $165 billion in cash and marketable securities and is still far away from its _____ of having zero net cash, or cash minus debt, outstanding.",
   choices: ["A) goal", "B) goal-worthy", "C) goalie", "D) driven"],
   correctAnswer: 0,
   // image: "img/81-86.png"
},
{
  //106

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Chip stocks are falling today after a report said Taiwan Semiconductor Manufacturing, the world’s biggest contract manufacturer of chips, is planning to cut _______ capital expenditures.",
   choices: ["A) it's", "B) its", "C) they're", "D) our"],
   correctAnswer: 1,
   // image: "img/81-86.png"
},
{
  //107

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Losses in gold are limited by increased inflation expectations that have ______ increased demand for gold as an inflation hedge after the U.S. 10-year breakeven inflation rate today rose to a 2-week high.",
   choices: ["A) prompt", "B) prompting", "C) prompted", "D) teleprompter"],
   correctAnswer: 2,
   // image: "img/81-86.png"
},
{
  //108

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "All data in this article is solely for ________ purposes.",
   choices: ["A) inform", "B) informational", "C) informed", "D) informer"],
   correctAnswer: 1,
   // image: "img/81-86.png"
},
{
  //109

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "The mercurial entrepreneur warned recently that artificial intelligence could lead to 'civilization destruction' even as he remains deeply involved in the growth of AI through his many companies, including a ______ new venture.",
   choices: ["A) rumor", "B) rumors", "C) rumored", "D) ruminate"],
   correctAnswer: 2,
   // image: "img/81-86.png"
},
{
  //110

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Chuck Wolfe, whose career at the massive retailer spanned 32 years, will _______ on May 1 and remain in an advisory role.",
   choices: ["A) transitioned", "B) transitioning", "C) transition", "D) transitioned"],
   correctAnswer: 2,
   // image: "img/81-86.png"
},
{
  //111

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "If you look at economic indicators, balance sheets are running thinner and savings rates are declining ______ to previous periods.",
   choices: ["A) relatives", "B) relative", "C) relation", "D) relational"],
   correctAnswer: 1,
   // image: "img/81-86.png"
},
{
  //112

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Neal Stevens, managing director of the consultancy, wrote that the discounted price for the newly-sold sister brand “reflects not only the current weaker ______ across retail, but is also the result of the company not having done much to develop the brand over the past six years.",
   choices: ["A) look-out", "B) outlook", "C) looker", "D) looking"],
   correctAnswer: 1,
   // image: "img/81-86.png"
},
{
  //113

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Kyiv has repeatedly emphasized that it will only begin ______ when Moscow removes its forces from all Ukrainian territories according to the 1991 Ukrainian independence referendum.",
   choices: ["A) negotiating", "B) negotiate", "C) negotiates", "D) negotiations"],
   correctAnswer: 0,
   // image: "img/81-86.png"
},
{
  //114

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "As of Friday, Russia has lost 181,610 military _______, including 520 soldiers who perished in the last 24 hours, according to estimates from the Ministry of Defense of Ukraine.",
   choices: ["A) personal", "B) personals", "C) personnel", "D) dossier"],
   correctAnswer: 2,
   // image: "img/81-86.png"
},
{
  //115

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "A sustained break below this zone will eventually extend the decline towards $89.50 and $88.50, followed by an ________ towards $87.50,” said Dixon, the chief technical strategist at the nascent startup.",
   choices: ["A) accelerant", "B) accelerated", "C) accelerate", "D) acceleration"],
   correctAnswer: 3,
   // image: "img/81-86.png"
},




{
  //116

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Top importer China is to release a flurry of economic data on Tuesday, including reports on first quarter gross domestic product and March retail sales, with market _________ hoping for more clarity on the uneven recovery in the world’s second largest economy.",
   choices: ["A) participate", "B) participant", "C) participants", "D) participates"],
   correctAnswer: 2,
   // image: "img/81-86.png"
},
{
  //117

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "The document states that getting inspections in ________ may avoid back-and-forth negotiations and lead to more profits for the seller.",
   choices: ["A) behind", "B) advanced", "C) advancement", "D) advance"],
   correctAnswer: 3,
   // image: "img/81-86.png"
},
{
  //118

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "The fragmentation of the world economy into rival blocs led by the two largest countries in the world threatens to destabilize global commerce, increase inflation and weaken growth, she __________ loudly.",
   choices: ["A) exclaim", "B) exclaimed", "C) exclamatory", "D) inquired"],
   correctAnswer: 1,
   // image: "img/81-86.png"
},
{
  //119

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "These levels of insolvency _______ the constant barrage that businesses have taken after months of soaring input prices, rising interest rates, and weakened customer demand.",
   choices: ["A) reflect", "B) reflects", "C) reflection", "D) reflections"],
   correctAnswer: 0,
   // image: "img/81-86.png"
},
{
  //120

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "They also selected a basket of staple foods including cheddar cheese, sliced white bread, pork sausages, and white potatoes to find which of these _______ products had seen the biggest price hikes.",
   choices: ["A) every day", "B) everyday", "C) everyday's", "D) daily"],
   correctAnswer: 1,
   // image: "img/81-86.png"
},
{
  //121

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Suppliers have also been told to identify where meters were wrongfully installed and to return those customers to their previous tariff and offer __________.",
   choices: ["A) compensate", "B) compensates", "C) compensated", "D) compensation"],
   correctAnswer: 3,
   // image: "img/81-86.png"
},

{
  //122

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Energy companies can _______ court warrants which give them legal rights to enter people's homes and fit prepayment meters if customers have not paid their bills.",
   choices: ["A) obtain", "B) obtains", "C) obtained", "D) obtaining"],
   correctAnswer: 0,
   // image: "img/81-86.png"
},
{
  //123

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "The _______ of activity – which follows a wave of ‘pandemic plundering’ after Covid – has sparked fears that the country's companies are being bought on the cheap.",
   choices: ["A) flurry", "B) flurries", "C) furry", "D) fury"],
   correctAnswer: 0,
   // image: "img/81-86.png"
},
{
  //124

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Looking ahead, we remain confident that our customer focus, diversification and proven ability to grow _______ will enable us to demonstrate further progress against our strategy.",
   choices: ["A) organ", "B) organic", "C) organically", "D) organism"],
   correctAnswer: 2,
   // image: "img/81-86.png"
},
{
  //125

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "The joint venture continues to perform well and remains on track to ______ positive cash profit in the second half of this year.",
   choices: ["A) deliver", "B) delivers", "C) delivered", "D) delivering"],
   correctAnswer: 0,
   // image: "img/81-86.png"
},
{
  //126

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "The research firm estimates that just over half of today's _________ mortgages were taken out between 1996 and 2009.",
   choices: ["A) outstanding", "B) upstanding", "C) grandstanding", "D) stands"],
   correctAnswer: 0,
   // image: "img/81-86.png"
},
{
  //127

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "This means that __________ alone will push up the number of landlord sales over the next five years to reach a new peak.",
   choices: ["A) demographic", "B) demographics", "C) demography", "D) demo"],
   correctAnswer: 1,
   // image: "img/81-86.png"
},
{
  //128

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "After continued growth in the fourth quarter, MBS expects _______ profit for the full-year to the end of March of at least $155 million, up from last year's $145 million.",
   choices: ["A) operate", "B) operates", "C) operator", "D) operating"],
   correctAnswer: 3,
   // image: "img/81-86.png"
},
{
  //129

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "A toxic mix of rising mortgage costs, crippling taxes, and new regulations means the ________ mathematics no longer make sense.",
   choices: ["A) finance", "B) financing", "C) financial", "D) financed"],
   correctAnswer: 2,
   // image: "img/81-86.png"
},
{
  //130

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "For landlords who have relied on property to ________ their income, the issue is where to invest the money if they sell.",
   choices: ["A) supplement", "supplementary", "supplanted", "supplemented"],
   correctAnswer: 0,
   // image: "img/81-86.png"
},
{
  //131

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "The advantage of using a foreign exchange specialist is that you won't be hit by the additional charges banks levy when dealing with foreign currency, and they can source the most _______ rate from a number of liquidity providers.",
   choices: ["A) compete", "B) competed", "C) competitive", "D) competition"],
   correctAnswer: 2,
   // image: "img/81-86.png"
},
{
  //132

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Unlike banks, money transfer companies tend to charge much lower transaction fees, ________ of where in the world the money is being sent to or received from.",
   choices: ["A) regard", "B) regards", "C) regardless", "D) regarding"],
   correctAnswer: 2,
   // image: "img/81-86.png"
},
{
  //133

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "In terms of the attractiveness of saving in a pension, you need to think carefully about what tax relief you will get on your contribution _______ with the tax you will pay on the benefits you eventually draw.",
   choices: ["A) compare", "B) compares", "C) compared", "D) comparison"],
   correctAnswer: 2,
   // image: "img/81-86.png"
},
{
  //134

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Given the amount of money we are talking about, I would strongly _______ that you take expert financial advice so that you can make the right decision in your individual situation.",
   choices: ["A) recommend", "B) recommends", "C) recommending", "D) recommendation"],
   correctAnswer: 0,
   // image: "img/81-86.png"
},
{
  //135

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "The Financial Literacy and Lifelong Learning Commission's vision is of _____ financial well-being for all individuals and families in the U.S.",
   choices: ["A) sustain", "B) sustains", "C) sustained", "D) sustaining"],
   correctAnswer: 2,
   // image: "img/81-86.png"
},
{
  //136

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "These ________ are designed to be useful for both beginners and advanced finance professionals, with the main topics covering: (1) the income statement, (2) the balance sheet, (3) the cash flow statement, and (4) rates of return.",
   choices: ["A) guide", "B) guides", "C) guider", "D) guided"],
   correctAnswer: 1,
   // image: "img/81-86.png"
},
{
  //137

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "For more than 75 years, companies have counted on PEC's Audit & Assurance professionals to help them adapt to ________ business environments, build stakeholder trust, and thrive long-term.",
   choices: ["A) change", "B) changes", "C) changed", "D) changing"],
   correctAnswer: 3,
   // image: "img/81-86.png"
},
{
  //138

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "The Superlative Max Module is a data-fueled platform that helps us transform environmental, social, and governances information into _____ for our clients.",
   choices: ["A) insight", "B) insights", "C) insightful", "D) insighted"],
   correctAnswer: 1,
   // image: "img/81-86.png"
},
{
  //139

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "There are a ______ of factors highlighting why a sustainable tomorrow is critical to create today.",
   choices: ["A) single", "B) confluence", "C) connect", "D) connected"],
   correctAnswer: 1,
   // image: "img/81-86.png"
},
{
  //140

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Strategic management provides overall ________ to an enterprise and involves specifying the organization's objectives, developing plans to achieve those objectives, and then allocating resources to implement the plans.",
   choices: ["A) direction", "B) directions", "C) directive", "D) directed"],
   correctAnswer: 0,
   // image: "img/81-86.png"
},
{
  //141

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Questions 141-143 refer to the following email. Please choose the best answer for each problem.",
   choices: ["A) amendment", "B) amended", "C) amends", "D) amendments"],
   correctAnswer: 1,
   image: "img/141-143.png"
},



{
  //142

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Questions 141-143 refer to the following email. Please choose the best answer for each problem.",
   choices: ["A) some times", "B) some time", "C) sometime", "D) every time"],
   correctAnswer: 2,
   image: "img/141-143.png"
},

{
  //143

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Questions 141-143 refer to the following email. Please choose the best answer for each problem.",
   choices: ["A) consider", "B) considerate", "C) consideration", "D) considered"],
   correctAnswer: 2,
   image: "img/141-143.png"
},
{
  //144

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Questions 144-146 refer to the following instructional document (partial). Please choose the best answer for each problem.",
   choices: ["A) some one", "B) someone", "C) any one", "D) yourself"],
   correctAnswer: 1,
   image: "img/144-146.png"
},


{
  //145

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Questions 144-146 refer to the following instructional document (partial). Please choose the best answer for each problem.",
   choices: ["A) recipients", "B) recipient's", "C) recipients'", "D) recipe's"],
   correctAnswer: 1,
   image: "img/144-146.png"
},

{
  //146

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Questions 144-146 refer to the following instructional document (partial). Please choose the best answer for each problem.",
   choices: ["A) informal", "B) non-formal", "C) formal", "D) formalize"],
   correctAnswer: 2,
   image: "img/144-146.png"
},
{
  //147

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Questions 147-149 refer to the following letter. Please choose the best answer for each problem.",
   choices: ["A) specialty", "B) specialize", "C) specializing", "D) specialist"],
   correctAnswer: 2,
   image: "img/147-149.png"
},
{
  //148

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Questions 147-149 refer to the following letter. Please choose the best answer for each problem.",
   choices: ["A) initial", "B) initials", "C) closing", "D) later"],
   correctAnswer: 0,
   image: "img/147-149.png"
},
{
  //149

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Questions 147-149 refer to the following letter. Please choose the best answer for each problem.",
   choices: ["A) myriads", "B) myriad", "C) singles", "solopreneurs"],
   correctAnswer: 1,
   image: "img/147-149.png"
},
{
  //150

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Questions 150-153 refer to the following web copy. Please choose the best answer for each problem.",
   choices: ["A) follow up", "B) follow-up", "C) Follow-up", "D) following up"],
   correctAnswer: 2,
   image: "img/150-153.png"
},



{
  //151

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Questions 150-153 refer to the following web copy. Please choose the best answer for each problem.",
   choices: ["A) typical", "B) typically", "C) casually", "D) admirably"],
   correctAnswer: 1,
   image: "img/150-153.png"
},



{
  //152

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Questions 150-153 refer to the following web copy. Please choose the best answer for each problem.",
   choices: ["A) nomenclature", "B) jargon", "C) acumen", "D) failings"],
   correctAnswer: 2,
   image: "img/150-153.png"
},




{
  //153

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Questions 150-153 refer to the following web copy. Please choose the best answer for each problem.",
   choices: ["A) testimony", "B) testimonial", "C) testimonials", "D) radar"],
   correctAnswer: 3,
   image: "img/150-153.png"
},
{
  //154

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "What group is the bulletin for?",
   choices: ["A) cancer charity", "B) education non-profit", "C) mosque", "D) church"],
   correctAnswer: 3,
   image: "img/154-158.png"
},


{
  //155

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "When is AWAPA?",
   choices: ["A) 6pm May 9", "B) 7pm May 9", "C) 6pm May 12", "D) 6:30pm May 12"],
   correctAnswer: 3,
   image: "img/154-158.png"
},

{
  //156

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Who are the nursery workers the following week?",
   choices: ["A) Lisa Q. and Vicky H.", "B) Chris Arnold and Donald Logan", "C) Blerim Troksi and Chris Arnold", "D) Cassie P. and Gerald C."],
   correctAnswer: 3,
   image: "img/154-158.png"
},


{
  //157

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "When is Mother's Day?",
   choices: ["A) May 10", "B) May 11", "C) May 12", "D) May 13"],
   correctAnswer: 3,
   image: "img/154-158.png"
},
{
  //158

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "When is Vacation Bible School Commencement?",
   choices: ["A) May 13", "B) June 10", "C) July 29", "D) July 24-28"],
   correctAnswer: 2,
   image: "img/154-158.png"
},
{
  //159

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Who is this bulletin targeted towards?",
   choices: ["A) church", "B) school", "C) community center", "D) mayoral office"],
   correctAnswer: 1,
   image: "img/159-163.png"
},


{
  //160

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "What is KISS an acronym for?",
   choices: ["A) Keep It Simple Sugar", "B) Keep It Simple Supper", "C) Keep It Simple Silly", "D) Keep It Simple Stupid"],
   correctAnswer: 3,
   image: "img/159-163.png"
},


{
  //161

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "What is this (partial) bulletin about?",
   choices: ["A) choir performance announcements", "B) school play announcements", "C) homecoming football game announcements", "D) the benefits of sending out a digital newsletter to students and parents via email"],
   correctAnswer: 3,
   image: "img/159-163.png"
},

{
  //162

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Who conducted the study referenced in the bulletin?",
   choices: ["A) Nielsen Ratings Group", "B) Nielson Norman Group", "C) Norman Rockwell Group", "D) Rock, Paper, Scissors Group"],
   correctAnswer: 1,
   image: "img/159-163.png"
},


{
  //163

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Based on the textual evidence, what does the underlined word 'salient' mean?",
   choices: ["A) essential", "B) long-winded", "C) obnoxious", "D) verbose"],
   correctAnswer: 0,
   image: "img/159-163.png"
},
{
  //164

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Who is the email made out to?",
   choices: ["A) Mr. Smith", "B) Mr. Esposito", "C) Mr. Exposito", "D) Mr. Exposition"],
   correctAnswer: 2,
   image: "img/164-167.png"
},


{
  //165

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "What is the email referencing?",
   choices: ["A) day care service", "B) plumbing service", "C) lawn care service", "D) housekeeping service"],
   correctAnswer: 2,
   image: "img/164-167.png"
},


{
  //166

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "What is a task not mentioned in the email?",
   choices: ["A) front yard cut", "B) back yard cut", "C) hedges trimmed", "D) lawn watered and treated"],
   correctAnswer: 3,
   image: "img/164-167.png"
},


{
  //167

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "What is a payment method not mentioned in the email?",
   choices: ["A) PayPal", "B) Venmo", "C) Wire Transfer", "D) Check"],
   correctAnswer: 2,
   image: "img/164-167.png"
},


{
  //168

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Who is the letter addressed to?",
   choices: ["A) Marketing Manager", "B) Sales Manager", "C) HR Manager", "D) Administration"],
   correctAnswer: 2,
   image: "img/168-172.png"
},
{
  //169

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "What is the message of the letter?",
   choices: ["A) process improvement recommendations letter", "B) new hire thank you letter", "C) resignation letter", "D) promotion letter"],
   correctAnswer: 2,
   image: "img/168-172.png"
},


{
  //170

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "What is the city that the letter-writer grew up in?",
   choices: ["A) Lexington, Kentucky", "B) Junction City, Kentucky", "C) Nashville, Tennessee", "D) Charleston, South Carolina"],
   correctAnswer: 1,
   image: "img/168-172.png"
},



{
  //171

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "What is the company role of the letter-writer?",
   choices: ["A) Sales Manager", "B) Customer Service Manager", "C) Customer Service Rep", "D) Account Executive"],
   correctAnswer: 3,
   image: "img/168-172.png"
},


{
  //172

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "What industry does the letter-writer work in?",
   choices: ["A) edtech", "B) fintech", "C) logistics", "D) retail apparel"],
   correctAnswer: 2,
   image: "img/168-172.png"
},




{
  //173

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Who is this letter written to?",
   choices: ["A) WAM Specials", "B) WAM Specialty Products", "C) PLXS International", "D) Plaxis-Wam Inc"],
   correctAnswer: 1,
   image: "img/173-177.png"
},

{
  //174

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "What is this letter announcing?",
   choices: ["A) reverse-stock split", "B) reverse-merger", "C) merger between two companies", "D) merging of two departments in the same company"],
   correctAnswer: 2,
   image: "img/173-177.png"
},

{
  //175

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "What is the name of the new company going to be called?",
   choices: ["A) WAM Specials", "B) WAM Specialty Products", "C) PLXS International", "D) Plaxis-WAM Inc"],
   correctAnswer: 4,
   image: "img/173-177.png"
},

{
  //176

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Based on the textual evidence, what does SME probably mean?",
   choices: ["A) solid-metal-enterprise", "B) small-and-medium-sized-enterprises", "C) small-medium-entertainment", "D) small-and-medium-sized-engagement"],
   correctAnswer: 1,
   image: "img/173-177.png"
},

{
  //177

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Based on the textual evidence, what does the underlined word 'elected' mean in this letter?",
   choices: ["A) tried", "B) dismissed", "C) chosen", "D) voted someone into political office"],
   correctAnswer: 2,
   image: "img/173-177.png"
},



{
  //178

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "What type of person is this letter written to?",
   choices: ["A) company Manager", "B) company IT professional", "C) company customer service professional", "D) customer"],
   correctAnswer: 3,
   image: "img/178-182.png"
},

{
  //179

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "What is the name of the person this letter is written to?",
   choices: ["A) Cindy", "B) Cynthia", "C) Sierra Lincoln", "D) Sawyer Lincoln"],
   correctAnswer: 1,
   image: "img/178-182.png"
},

{
  //180

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "What is the customer suggestion that is mentioned?",
   choices: ["A) creating a mobile app for the website", "B) reducing the clickable text and pages on the website listings", "C) adding more clickable text and pages on the website listings", "D) fixing some of the broken buttons on the website"],
   correctAnswer: 2,
   image: "img/178-182.png"
},

{
  //181

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "What industry is the business in?",
   choices: ["A) regional theater", "B) professional theater and film", "C) soundstages", "D) bars and restaurants"],
   correctAnswer: 2,
   image: "img/178-182.png"
},

{
  //182

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Who wrote the letter and who is the person?",
   choices: ["A) Sawyer Lincoln, customer", "B) Sawyer Lincoln, company team member", "C) Sawyer Lincoln, Attorney", "D) Sawyer Lincoln, prospective customer"],
   correctAnswer: 1,
   image: "img/178-182.png"
},



{
  //183

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "What is the first ask/request of this email-writer?",
   choices: ["A) to be a guest on the recipient's podcast", "B) to be a guest on the recipient's talk show", "C) to do email marketing for the recipient", "D) to present some or all of the products from the company where the email-writer works"],
   correctAnswer: 3,
   image: "img/183-187.png"
},


{
  //184

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "What is the second ask/request of this email-writer?",
   choices: ["A) to be a guest on the recipient's podcast", "B) to be a guest on the recipient's talk show", "C) to do email marketing for the recipient", "D) to present some or all of the products from the company where the email-writer works"],
   correctAnswer: 0,
   image: "img/183-187.png"
},



{
  //185

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Who wrote this email?",
   choices: ["A) Paul", "B) Runo", "C) Ringo", "D) George"],
   correctAnswer: 1,
   image: "img/183-187.png"
},


{
  //186

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Who is the recipient of this email?",
   choices: ["A) Paul", "B) Runo", "C) Ringo", "D) George"],
   correctAnswer: 0,
   image: "img/183-187.png"
},
{
  //187

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "What is a product that is not explicitly mentioned in this email?",
   choices: ["A) headphones", "B) lav microphones", "C) selfie sticks", "D) digital cameras"],
   correctAnswer: 3,
   image: "img/183-187.png"
},


{
  //188

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "What is the subject line of this email?",
   choices: ["A) Help you sell", "B) helping you sell more products online", "C) Helping You Sell More Products Online", "D) helping you sell more"],
   correctAnswer: 2,
   image: "img/188-192.png"
},


{
  //189

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Who wrote this email?",
   choices: ["A) Patti", "B) Inigo", "C) Ingrid", "D) Dennis"],
   correctAnswer: 2,
   image: "img/188-192.png"
},


{
  //190

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Who is the recipient of this email?",
   choices: ["A) Patti", "B) Inigo", "C) Ingrid", "D) Dennis"],
   correctAnswer: 0,
   image: "img/188-192.png"
},


{
  //191

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "How many blog visits does the email-writer claim he/she gets on his/her site per month?",
   choices: ["A) 50,000", "B) 75,000", "C) 100,000", "D) 200,000"],
   correctAnswer: 2,
   image: "img/188-192.png"
},


{
  //192

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "In one word, what is the ask/request of this email-writer?",
   choices: ["A) competition", "B) collaboration", "C) combination/merger", "D) buyout"],
   correctAnswer: 1,
   image: "img/188-192.png"
},


{
  //193

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Why did the person write the email?",
   choices: ["A) He/She saw that the email recipient recently reacted to one of his/her LinkedIn posts about building a business brand identity.", "B) He/She saw that the email recipient recently reacted to one of his/her Instagram posts about building a business brand identity.", "C) He/She was responding to the fact that the email recipient recently replied to one of his/her newsletters.", "D) It was a totally cold email with no catalyst."],
   correctAnswer: 0,
   image: "img/193-197.png"
},


{
  //194

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "What company does the email writer work for?",
   choices: ["A) Anywhere Designs", "B) Anyone Designs", "C) Somewhere Designs", "D) Somewherrrrrre Designs"],
   correctAnswer: 3,
   image: "img/193-197.png"
},


{
  //195

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "Who wrote the email?",
   choices: ["A) Greg", "B) Peter", "C) Mary", "D) Asher"],
   correctAnswer: 3,
   image: "img/193-197.png"
},


{
  //196

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "What is the ask at the end of the email?",
   choices: ["A) sign up for a monthly e-newsletter", "B) jump on a call together", "C) jump on a video call together", "D) send money right away to buy a product that the email-writer is selling"],
   correctAnswer: 1,
   image: "img/193-197.png"
},


{
  //197

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "What is the name of the email recipient?",
   choices: ["A) Greg", "B) Peter", "C) Mary", "D) Asher"],
   correctAnswer: 0,
   image: "img/193-197.png"
},


{
  //198

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "What is the reason why this document was created?",
   choices: ["A) To create a good marketing campaign for a company", "B) To create a good sales pitch for a company", "C) To help make company content better by sharing opinions and insights on it so that there may be improvements before the final draft is released to customers/users", "D) To make more video content for the company"],
   correctAnswer: 2 ,
   image: "img/198-200.png"
},

{
  //199

   //
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "What type of content is this document referring to?",
   choices: ["A) Spanish language educational content", "B) Chinese language educational content", "C) Italian language educational content", "D) English language educational content"],
   correctAnswer: 3,
   image: "img/198-200.png"
},
{
  //200

   //is "A" correct?
   qType: "Part 7: Reading Comprehension (Single Passages)",
   question: "What is one of the best practices that the content creator says in the content is one of the best for learning to write well?",
   choices: ["A) drawing", "B) computer programming", "C) reading", "D) running"],
   correctAnswer: 0,
   image: "img/198-200.png"
},


];
    var questionCounter = 0; //Tracks question number
    var selections = []; //Array containing user choices
    var quiz = $('#quiz'); //Quiz div object
    var defaultQuestionContent;
    defaultQuestionContent = $("#content").text()

    // Display initial question
    displayNext();

    // Click handler for the 'next' button
    $('#next').on('click', function (e) {
        e.preventDefault();

        // Suspend click listener during fade animation
        if (quiz.is(':animated')) {
            return false;
        }
        choose();

        // If no user selection, progress stopped and pop-up alert
        if (isNaN(selections[questionCounter])) {
            swal('Please make a selection.','Choose the best option.', "warning");
        } else {
            questionCounter++;
            displayNext();
        }
    });

    // Click handler for the 'prev' button
    $('#prev').on('click', function (e) {
        e.preventDefault();

        if (quiz.is(':animated')) {
            return false;
        }
        choose();
        questionCounter--;
        displayNext();
    });

    // Click handler for the 'Start Over' button
    $('#start').on('click', function (e) {
        e.preventDefault();

        if (quiz.is(':animated')) {
            return false;
        }
        questionCounter = 0;
        selections = [];
        displayNext();
        $('#start').hide();
    });

    // Animates buttons on hover
    $('.button').on('mouseenter', function () {
        $(this).addClass('active');
    });
    $('.button').on('mouseleave', function () {
        $(this).removeClass('active');
    });

    // Creates and returns the div that contains the questions and
    // the answer selections
    function createQuestionElement(index) {
        var qElement = $('<div>', {
            id: 'question'
        });

        var header = $('<h2>Question ' + (index + 1) + ':</h2>');
        qElement.append(header);

        var textProblem = $("<p>").append(questions[index].textProblem);
        qElement.append(textProblem);

        var question = $('<p>').append(questions[index].question);
        qElement.append(question);

        var radioButtons = createRadios(index);
        qElement.append(radioButtons);

        return qElement;
    }

    // Creates a list of the answer choices as radio inputs
    function createRadios(index) {
        var radioList = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < questions[index].choices.length; i++) {
            item = $('<li>');
            input = '<label><input type="radio" name="answer" value=' + i + ' />';
            input += questions[index].choices[i];
            input += "</label>";
            item.append(input);
            radioList.append(item);
        }
        return radioList;
    }

    // Reads the user selection and pushes the value to an array
    function choose() {
        selections[questionCounter] = +$('input[name="answer"]:checked').val();
    }

    // Displays next requested element
    function displayNext() {
        quiz.fadeOut(function () {
            $('#question').remove();

            if (questionCounter < questions.length) {
                var question = questions[questionCounter]

                // Show 'image' defined in question object

                if (typeof question.image !== "undefined") {
                    $("#image img").attr("src", question.image);
                    $("#image").show();
                } else {
                  $("#image").hide();
                }

                if (typeof question.audio !== "undefined") {
                    $("#audio").show()
                    $("#audio audio").attr("src", 'audio/' + question.audio);
                    //$("#audio audio")[0].play();
                } else {
                    $("#audio").hide()
                    $("#audio audio").stop();
                }

                // Show 'content' defined in question object
                console.log(typeof question.content, defaultQuestionContent)
                if (typeof question.content === "undefined") {
                    $("#content").text(defaultQuestionContent)
                } else {
                    $("#content").text(question.content)
                }

                // Show 'qType' defined in question object
                console.log(typeof question.qType, defaultQuestionContent)
                if (typeof question.qType === "undefined") {
                    $("#qType").text(defaultQuestionContent)
                } else {
                    $("#qType").text(question.qType)
                }

                var nextQuestion = createQuestionElement(questionCounter);
                quiz.append(nextQuestion).fadeIn();
                if (!(isNaN(selections[questionCounter]))) {
                    $('input[value=' + selections[questionCounter] + ']').prop('checked', true);
                }

                // Controls display of 'prev' button
                if (questionCounter === 1) {
                    $('#prev').show();
                } else if (questionCounter === 0) {

                    $('#prev').hide();
                    $('#next').show();
                }
            } else {
                var scoreElem = displayScore();
                quiz.append(scoreElem).fadeIn();
                $('#next').hide();
                $('#prev').hide();
                $('#start').show();
            }
        });
    }

    // Computes score and returns a paragraph element to be displayed
    function displayScore() {
        var score = $('<p>', {
            id: 'question'
        });

        var numCorrect = 0;
        for (var i = 0; i < selections.length; i++) {
            if (selections[i] === questions[i].correctAnswer) {
                numCorrect++;
            }
        }

        score.append('You got ' + numCorrect + ' questions out of ' +
                questions.length + ' right.');
        return score;
    }
})();
