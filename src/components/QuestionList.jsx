import { useQuizContext } from "../context/QuizProvider";
import { QuestionCard } from "./QuestionCard";
import { nanoid } from "nanoid";

export function QuestionList() {
  const { isLoading, quizData, allAnswers, score } = useQuizContext();

  if (isLoading) {
    return (
      <div>
        <h2 className="text-6xl font-bold text-center m-4 p-4">Loading</h2>
      </div>
    );
  }

  return (
    <div className=" flex flex-col gap-4 md:flex md:flex-row md:flex-wrap md:items-center md:justify-center">
      {quizData?.map((question, index) => (
        <QuestionCard
          key={nanoid()}
          index={index}
          {...question}
          {...allAnswers}
        />
      ))}
    </div>
  );
}
