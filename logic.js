const question = [
  {
    correctAnswer: "Hideo Kojima",
    id: "bi1kJ4YtV6QzOAFzvylLH",
    question: "Who created the &quot;Metal Gear&quot; Series?",
    answers: [
      {
        answer: "Gunpei Yokoi",
        id: "aEuRkO2EccG-6wNW0-diC",
        toggle: true,
        correct: true,
      },
      {
        answer: "Hideo Kojima",
        id: "GBpSpZ1WFyo79tjCcz6D-",
        toggle: false,
        correct: false,
      },
      {
        answer: "Hiroshi Yamauchi",
        id: "DdAfojMNx-Oi09jzxeY2_",
        toggle: false,
        correct: false,
      },
    ],
  },
  {
    correctAnswer: "Hideo Kojima",
    id: "bi1kJ4YtV6QzOAFzvylLH",
    question: "Who created the &quot;Metal Gear&quot; Series?",
    answers: [
      {
        answer: "Gunpei Yokoi",
        id: "aEuRkO2EccG-6wNW0-diC",
        toggle: true,
        correct: false,
      },
      {
        answer: "Hideo Kojima",
        id: "GBpSpZ1WFyo79tjCcz6D-",
        toggle: false,
        correct: false,
      },
      {
        answer: "Hiroshi Yamauchi",
        id: "DdAfojMNx-Oi09jzxeY2_",
        toggle: false,
        correct: true,
      },
    ],
  },
  {
    correctAnswer: "Hideo Kojima",
    id: "bi1kJ4YtV6QzOAFzvylLH",
    question: "Who created the &quot;Metal Gear&quot; Series?",
    answers: [
      {
        answer: "Gunpei Yokoi",
        id: "aEuRkO2EccG-6wNW0-diC",
        toggle: true,
        correct: false,
      },
      {
        answer: "Hideo Kojima",
        id: "GBpSpZ1WFyo79tjCcz6D-",
        toggle: false,
        correct: true,
      },
      {
        answer: "Hiroshi Yamauchi",
        id: "DdAfojMNx-Oi09jzxeY2_",
        toggle: false,
        correct: false,
      },
    ],
  },
];

let filtered;

const counterAnswered = question.filter((items) => {
  return items.answers.some(
    (answer) => answer.correct === true && answer.toggle === true
  );
});

// question.forEach((element) => {
//   return (filtered = element.answers.filter(
//     (items) => items.correct === true && items.toggle === true
//   ));
// });

console.log(counterAnswered);
