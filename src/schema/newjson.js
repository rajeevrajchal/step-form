const newjson = [
  {
    id: 1,
    question: "What income did you recieve?",
    responseSelection: [
      {
        responseValue: "salary",
        questionId: 1,
        selected: true,
        nextQuestion: 1
      },
      {
        responseValue: "interest",
        questionId: 1,
        selected: false,
        nextQuestion: 2
      }
    ],
    type: "radio",
  },
  {
    id: 2,
    question: "What income did you recieveb second time?",
    responseSelection: [
      {
        responseValue: "salary",
        questionId: 1,
        selected: true,
        type: "combobox",
        nextQuestion: 3
      },
      {
        responseValue: "interest",
        questionId: 1,
        selected: false,
        type: "combobox",
        nextQuestion: 3
      }
    ],
    type: "radio"
  },
  {
    id: 3,
    question: "What income did you recieve third time?",
    responseSelection: [
      {
        responseValue: "salary",
        questionId: 1,
        selected: true,
        type: "combobox",
        nextQuestion: 1
      },
      {
        responseValue: "interest",
        questionId: 1,
        selected: false,
        type: "combobox",
        nextQuestion: 1
      } 
    ],
    type: "radio"
  }
]