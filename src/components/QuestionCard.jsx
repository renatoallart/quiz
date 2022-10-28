import React from "react";
import { useQuizContext } from "../context/QuizProvider";

export function QuestionCard({ index, id, question, answers }) {
  const { handleAnswerToggle } = useQuizContext();

  return (
    <div className=" flex flex-col  h-36  bg-slate-500 gap-4">
      <h2 className="text-md text-center font-bold">{question}</h2>
      <div className=" flex justify-center gap-4 ">
        {answers?.map((answer) => {
          const color = answer.toggle
            ? { backgroundColor: "black", color: "white" }
            : { backgroundColor: "red" };
          return (
            <p
              onClick={() => handleAnswerToggle(index, id, answer.id)}
              style={color}
              className="text-center text-xl font-bold p-2 rounded-md cursor-pointer"
              key={answer.id}
            >
              {" "}
              {answer.answer}
            </p>
          );
        })}
      </div>
    </div>
  );
}
