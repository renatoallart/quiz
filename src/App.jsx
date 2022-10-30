import React from "react";
import { Display } from "./components/Display";
import { QuestionList } from "./components/QuestionList";
import { QuizProvider } from "./context/QuizProvider";

export function App() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center m-4 p-4">Game Quiz</h1>
      <QuizProvider>
        <Display />
        <QuestionList />
      </QuizProvider>
    </main>
  );
}
