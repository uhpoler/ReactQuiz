import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { index, numQuestions, points, maxPossiblePoints, answer } = useQuiz();

  return (
    <div className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question{" "}
        <strong>
          {index + 1}/{numQuestions}
        </strong>
      </p>
      <p>
        <strong>
          {points} / {maxPossiblePoints} points
        </strong>
      </p>
    </div>
  );
}

export default Progress;
