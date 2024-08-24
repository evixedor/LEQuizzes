// QuestionSet.js

export const qtype = {
    qtypeA: [
        {
            id:"1",
            section: "Listening Test (Part 1: Photographs)",
            subtitle: "Listen to the recording and choose the best answer.",
        }
    ],
    qtypeB: [
        {
            id:"2",
            section: "Listening Test (Part 2: Question-Response)",
            subtitle: "Listen to the recording and choose the best answer.",
        }
    ],
    qtypeC: [
        {
            id:"3",
            section: "Listening Test (Part 3: Conversations)",
            subtitle: "Listen to the recording. Now answer this question: 'How does the conversation end?'",
        }
    ],
    qtypeD: [
        {
            id:"3",
            section: "Listening Test (Part 4: Talks)",
            subtitle: "Listen to the recording. Now answer this question: 'How does the conversation end?'",
        }
    ]
}

export const quiz = {

	questions: [
		{
			//
			//#1
			//2c - 2person conf call
			//https://docs.google.com/document/d/1Fh9vvneRlcoN3eyXCaVTVl2_Tmitdh1j5QCRU_PCY6Y/edit
			id: "1",
			question: qtype.qtypeA.subtitle,
			answers: ["A", "B", "C", "D"],
			correctAnswer: "B",
			qtype: qtype.qtypeA,
			audio: "1_toeic2.mp3",
			imageUrl: "img/mancomputer1.jpg",
		},
		//
		{
			//2
			//
			//b1 - skyscrapers
			//mwh vo
			id: "2",
			question: qtype.qtypeA.subtitle,
			answers: ["A", "B", "C", "D"],
			correctAnswer: "C",
			qType: qtype.qtypeA,
			audio: "2_toeic2.mp3",
			imageUrl: "img/buildings1.jpg",
		},
		//
		{
			//3
			//c2

			// mh vo
			id: "3",
			question: qtype.qtypeB.subtitle,
			answers: ["A", "B", "C", "D"],
			correctAnswer: "D",
			qType: qtype.qtypeB,
			audio: "3_toeic2.mp3",
			imageUrl: "img/emptychairs1.jpg",
		},

		{
			//4
			//
			//
			//mwh,vo d3 - 2 women conf rm
			id: "4",
			question: qtype.qtypeC.subtitle,
			answers: ["A", "B", "C", "D"],
			correctAnswer: "A",
			qType: qtype.qtypeC,
			audio: "4_toeic2.mp3",
			imageUrl: "img/women1.jpg",
		},

		{
			//5
			//mwh, vo c2 - students auditorium
			id: "5",
			question: qtype.qtypeD.subtitle,
			answers: ["A", "B", "C", "D"],
			correctAnswer: "D",
			qType: qtype.qtypeD,
			imageUrl: "img/students1.jpg",
			audio: "5_toeic2.mp3",
		},

		
	],
};


