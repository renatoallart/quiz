import React from "react";
import { useQuizContext } from "../context/QuizProvider";

export function Display() {
  const { score } = useQuizContext();

  return <h2 className="text-xl text-center">Score: {score}</h2>;
}
