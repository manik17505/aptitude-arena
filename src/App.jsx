import { useMemo, useState } from "react";
import { quizData } from "./questions";

export default function App() {
  const correctSound = useMemo(() => new Audio("/sounds/correct.mp3"), []);
const wrongSound = useMemo(() => new Audio("/sounds/wrong.mp3"), []);
  const categories = Object.keys(quizData);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
const [streak, setStreak] = useState(0);
  const currentQuestions = selectedCategory
    ? quizData[selectedCategory].questions
    : [];

  const currentQuestion = currentQuestions[currentQuestionIndex];
  const totalQuestions = currentQuestions.length;
  const progress = totalQuestions
    ? ((currentQuestionIndex + (quizFinished ? 1 : 0)) / totalQuestions) * 100
    : 0;

  function startQuiz(category) {
    setSelectedCategory(category);
    setCurrentQuestionIndex(0);
    setSelectedAnswer("");
    setSubmitted(false);
    setScore(0);
    setQuizStarted(true);
    setQuizFinished(false);
    setStreak(0);
  }

  function submitAnswer() {
    if (!selectedAnswer || submitted) return;

    if (selectedAnswer === currentQuestion.answer) {
      setScore((prev) => prev + 1);
       setStreak((prev) => prev + 1);
      correctSound.currentTime = 0;
    correctSound.play();
  } else {
    setStreak(0);
    wrongSound.currentTime = 0;
    wrongSound.play();
 
    }

    setSubmitted(true);
  }

  function nextQuestion() {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer("");
      setSubmitted(false);
    } else {
      setQuizFinished(true);
      setSubmitted(false);
    }
  }

  function restartQuiz() {
    setSelectedCategory("");
    setCurrentQuestionIndex(0);
    setSelectedAnswer("");
    setSubmitted(false);
    setScore(0);
    setQuizStarted(false);
    setQuizFinished(false);
    setStreak(0);
  }

  function getResultMessage() {
    const percentage = totalQuestions
      ? Math.round((score / totalQuestions) * 100)
      : 0;
      if (selectedCategory === "Movies & Music") {
    if (percentage === 100) return "🌟 Amazing! You are the ultimate Movie & Music Master!";
    if (percentage >= 80) return "🎬 Fantastic! You really know your favorite stories and songs!";
    if (percentage >= 50) return "🍿 Nice job! You are on your way to becoming a movie star quiz champ!";
    return "🎵 Keep playing and you'll become a Movies & Music hero!";
  }

    if (percentage === 100) return "Outstanding! You got everything correct.";
    if (percentage >= 80) return "Great work! You have strong aptitude skills.";
    if (percentage >= 50) return "Nice effort! Keep practicing and you will improve fast.";
    return "Good try! Practice a little more and come back stronger.";
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-500 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-white/20 px-4 py-1 text-sm font-medium backdrop-blur">
            Fun Learning for Bright Kids
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            Aptitude Arena
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/90 md:text-lg">
            A colorful educational quiz website for school students to practice aptitude,
            improve logical thinking, and learn with simple explanations.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12">
        {!quizStarted && (
          <>
            <section className="mb-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Interactive Quiz",
                  desc: "Students can click answers, submit them, and instantly learn.",
                  icon: "🎯",
                },
                {
                  title: "Score Tracking",
                  desc: "Each quiz keeps score and shows results at the end.",
                  icon: "🏆",
                },
                {
                  title: "Easy Learning",
                  desc: "Every question includes a simple explanation after answering.",
                  icon: "✨",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
                >
                  <div className="text-3xl">{feature.icon}</div>
                  <h2 className="mt-4 text-xl font-bold">{feature.title}</h2>
                  <p className="mt-2 text-slate-600">{feature.desc}</p>
                </div>
              ))}
            </section>

            <section>
              <div className="mb-6 text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                  Choose a Category
                </p>
                <h2 className="mt-2 text-3xl font-extrabold">Start Your Quiz Adventure</h2>
                <p className="mx-auto mt-3 max-w-2xl text-slate-600">
                  Pick a topic and begin answering questions. Your score will be shown at the end.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => startQuiz(category)}
                    className="rounded-3xl bg-white p-6 text-left shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-500 text-2xl text-white shadow-md">
                      {quizData[category].icon}
                    </div>
                    <h3 className="mt-5 text-2xl font-bold">{category}</h3>
                    <p className="mt-2 text-slate-600">
                      {quizData[category].questions.length} fun questions to test and grow skills.
                    </p>
                    <div className="mt-5 inline-flex rounded-2xl bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700">
                      Start Quiz
                    </div>
                  </button>
                ))}
              </div>
            </section>
          </>
        )}

        {quizStarted && !quizFinished && currentQuestion && (
          <section className="mx-auto max-w-3xl rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                  {selectedCategory} Quiz
                </p>
                <h2 className="mt-1 text-2xl font-extrabold">
                  Question {currentQuestionIndex + 1} of {totalQuestions}
                </h2>
              </div>
              <div className="rounded-2xl bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
                Score: {score}
              </div>
            </div>
            {selectedCategory === "Movies & Music" && (
  <div className="mt-2 flex flex-wrap gap-3">
    <div className="rounded-2xl bg-pink-50 px-4 py-2 text-sm font-bold text-pink-700">
      🎬 Movie Mode
    </div>
    <div className="rounded-2xl bg-yellow-50 px-4 py-2 text-sm font-bold text-yellow-700">
      🔥 Streak: {streak}
    </div>
  </div>
)}

            <div className="mb-6 h-3 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-sky-500 transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
              />
            </div>

            <h3 className="text-xl font-bold md:text-2xl">{currentQuestion.question}</h3>

            <div className="mt-6 grid gap-3">
              {currentQuestion.options.map((option) => {
                const isSelected = selectedAnswer === option;
                const isCorrect = submitted && option === currentQuestion.answer;
                const isWrongSelected =
                  submitted && isSelected && option !== currentQuestion.answer;

                return (
                  <button
                    key={option}
                    onClick={() => !submitted && setSelectedAnswer(option)}
                    disabled={submitted}
                    className={`rounded-2xl border px-4 py-4 text-left font-medium transition ${
                      isCorrect
                        ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                        : isWrongSelected
                        ? "border-rose-300 bg-rose-50 text-rose-700"
                        : isSelected
                        ? "border-indigo-300 bg-indigo-50 text-indigo-700"
                        : "border-slate-200 bg-slate-50 text-slate-700 hover:border-indigo-200 hover:bg-indigo-50/60"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            {!submitted ? (
  <div className="mt-6 flex flex-wrap gap-3">
    <button
      onClick={submitAnswer}
      disabled={!selectedAnswer}
      className="rounded-2xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-300"
    >
      Submit Answer
    </button>
    <button
      onClick={restartQuiz}
      className="rounded-2xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
    >
      Back to Categories
    </button>
  </div>
) : (
  <div
    className={`mt-6 rounded-2xl p-5 ring-1 ${
      selectedAnswer === currentQuestion.answer
        ? "bg-green-100 ring-green-300 text-green-800"
        : "bg-red-100 ring-red-300 text-red-800"
    }`}
  >
   {selectedAnswer === currentQuestion.answer ? (
  <div>
    <p className="text-xl font-extrabold text-emerald-700">
      🎉 Correct!
    </p>
    <p className="mt-1 text-sm font-semibold text-emerald-700">
      Your chosen answer (<b>{selectedAnswer}</b>) is correct.
    </p>
  </div>
) : (
  <div>
    <p className="text-xl font-extrabold text-rose-700">
      😢 Oops!
    </p>
    <p className="mt-1 text-sm font-semibold text-rose-700">
      Your chosen answer (<b>{selectedAnswer}</b>) is incorrect. The correct answer is <b>{currentQuestion.answer}</b>.
    </p>
  </div>
)}
    <p className="mt-2 text-slate-700">
      <span className="font-semibold">Explanation:</span> {currentQuestion.explanation}
    </p>

    <div className="mt-5 flex flex-wrap gap-3">
      <button
        onClick={nextQuestion}
        className="rounded-2xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow transition hover:bg-indigo-700"
      >
        {currentQuestionIndex === totalQuestions - 1 ? "See Results" : "Next Question"}
      </button>
      <button
        onClick={restartQuiz}
        className="rounded-2xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
      >
        Restart
      </button>
    </div>
  </div>
)}
          </section>
        )}

        {quizFinished && (
          <section className="mx-auto max-w-3xl rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-sky-500 text-4xl text-white shadow-lg">
              🏅
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Quiz Complete
            </p>
            <h2 className="mt-2 text-4xl font-extrabold">Your Result</h2>
            <p className="mt-4 text-2xl font-bold text-slate-800">
              {score} / {totalQuestions}
            </p>
            <p className="mt-2 text-lg text-slate-600">
              You scored {Math.round((score / totalQuestions) * 100)}%
            </p>

            <div className="mx-auto mt-6 max-w-xl rounded-2xl bg-emerald-50 p-5 ring-1 ring-emerald-200">
              <p className="font-semibold text-emerald-700">{getResultMessage()}</p>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => startQuiz(selectedCategory)}
                className="rounded-2xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow transition hover:bg-indigo-700"
              >
                Try Again
              </button>
              <button
                onClick={restartQuiz}
                className="rounded-2xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Choose Another Category
              </button>
            </div>

            <div className="mt-8 h-3 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-lime-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </section>
        )}
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-sm text-slate-500">
          © 2026 Aptitude Arena • Interactive quiz website for school kids.
        </div>
      </footer>
    </div>
  );
}