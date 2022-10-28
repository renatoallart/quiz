import { createContext, useContext, useEffect, useState } from "react";
import { triviaApi } from "../api/trivia";
import { nanoid } from "nanoid";

const QuizContext = createContext();

export function useQuizContext() {
  return useContext(QuizContext);
}

export function QuizProvider({ children }) {
  const [quizData, setQuizData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [answeredArray, setAnsweredArray] = useState([]);
  const [score, setScore] = useState(0);

  function handleAnsweredArray(answer) {
    console.log(answeredArray, "answered");
    return setAnsweredArray((oldArray) => {
      if (oldArray.includes(answer)) {
        return oldArray;
      }
      return [...oldArray, answer];
    });
  }

  function handleScore(answer) {
    handleAnsweredArray(answer);
    return setScore(answeredArray.length);
  }

  function handleAnswerToggle(index, questionId, answerId) {
    const newAnswersArray = quizData[index].answers.map((answer) => {
      if (answer.id === answerId) {
        if (quizData[index].correctAnswer === answer.answer) {
          handleScore(answer.answer);
          return { ...answer, toggle: true };
        }
        return { ...answer, toggle: !answer.toggle };
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

  return (
    <QuizContext.Provider
      value={{ quizData, isLoading, score, handleAnswerToggle }}
    >
      {children}
    </QuizContext.Provider>
  );
}
