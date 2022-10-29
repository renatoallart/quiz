import React from "react";
import { useQuizContext } from "../context/QuizProvider";

export function QuestionCard({ index, id, question, answers }) {
  const { handleAnswerToggle } = useQuizContext();

  return (
    <div className=" flex flex-col m-4 p-4 rounded-md h-full items-center  bg-slate-200 gap-4">
      <h2 className="text-md text-center p-2 font-bold">{question}</h2>
      <div className=" flex justify-evenly flex-wrap gap-4 ">
        {answers?.map((answer) => {
          const color = answer.toggle
            ? { backgroundColor: "#e38686", color: "white" }
            : { backgroundColor: "#9edff0" };
          return (
            <p
              onClick={() => handleAnswerToggle(index, id, answer.id)}
              style={color}
              className="text-center break-words w-36 text-xl font-bold p-2 rounded-md cursor-pointer"
              key={answer.id}
            >
              {answer.answer}
            </p>
          );
        })}
      </div>
    </div>
  );
}
