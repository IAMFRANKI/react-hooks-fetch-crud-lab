import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  function QuestionList({ questions, onDeleteQuestion }) {


    // console.log('====================================');
    // console.log(questions);
    // console.log('====================================');
  }
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}</ul>
      <ul>
        {questions?.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            onDeleteQuestion={onDeleteQuestion}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
