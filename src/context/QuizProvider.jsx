import { createContext, useContext, useEffect, useState } from "react";
import { triviaApi } from "../api/trivia";
import { nanoid } from "nanoid";
import encodeUtf8 from "encode-utf8";

const QuizContext = createContext();

export function useQuizContext() {
  return useContext(QuizContext);
}

export function QuizProvider({ children }) {
  const [quizData, setQuizData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [score, setScore] = useState(0);

  function handleScore() {
    // first solution
    // const filteredArray = quizData.filter((items) => {
    //   return items.answers.some(
    //     (answer) => answer.correct === true && answer.toggle === true
    //   );
    // });
    // console.log(filteredArray, "filtered");

    // second solution
    const allAnswers = [];
    quizData.map((question) =>
      question.answers.map((answer) => allAnswers.push(answer))
    );

    const filteredCorrectAnswers = allAnswers.filter(
      (answer) => answer.correct === true && answer.toggle === true
    );

    setScore(filteredCorrectAnswers.length * 25);
  }

  function handleAnswerToggle(index, questionId, answerId) {
    const newAnswersArray = quizData[index].answers.map((answer) => {
      if (answer.id === answerId) {
        if (quizData[index].correctAnswer === answer.answer) {
          return { ...answer, toggle: true };
        }
        return { ...answer, toggle: true };
      }
      return { ...answer, toggle: false };
    });

    setQuizData((oldQuiz) =>
      oldQuiz.map((question) =>
        question.id === questionId
          ? { ...question, answers: newAnswersArray }
          : question
      )
    );
    // console.log(quizData, "quizData");
    // console.log(newAnswersArray, "newAnswersArray return ");
  }

  async function fetchQuizData() {
    try {
      const { data } = await triviaApi.get("", {
        params: {
          category: 15,
          type: "multiple",
        },
      });
      setQuizData(
        data.results.map((question) => {
          const arrayAnswer = question.incorrect_answers;
          arrayAnswer.push(question.correct_answer);
          const arraySort = arrayAnswer.sort();

          return {
            question: question.question,
            correctAnswer: question.correct_answer,
            id: nanoid(),
            answers: arraySort.map((answer) => ({
              answer: answer,
              id: nanoid(),
              toggle: false,
              correct: answer === question.correct_answer ? true : false,
            })),
          };
        })
      );

      setIsLoading(false);
    } catch (error) {
      console.log("fetchQuizData", error);
    }
  }

  useEffect(() => {
    fetchQuizData();
  }, []);

  useEffect(() => {
    handleScore();
  }, [quizData]);

  return (
    <QuizContext.Provider
      value={{ quizData, isLoading, score, handleAnswerToggle }}
    >
      {children}
    </QuizContext.Provider>
  );
}
