import { useEffect, useMemo, useState } from "react";
import { quizData } from "./questions";

const levelSettings = {
  Easy: { time: 20, badge: "🌱", points: 1 },
  Medium: { time: 12, badge: "⚡", points: 2 },
  Hard: { time: 8, badge: "🔥", points: 3 },
};

export default function App() {
  const correctSound = useMemo(() => new Audio("/sounds/correct.mp3"), []);
  const wrongSound = useMemo(() => new Audio("/sounds/wrong.mp3"), []);

  const categories = Object.keys(quizData);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [streak, setStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [animateQuestion, setAnimateQuestion] = useState(true);

  const currentQuestions = selectedCategory
    ? quizData[selectedCategory].questions
    : [];

  const currentQuestion = currentQuestions[currentQuestionIndex];
  const totalQuestions = currentQuestions.length;

  const progress = totalQuestions
    ? ((currentQuestionIndex + (quizFinished ? 1 : 0)) / totalQuestions) * 100
    : 0;

  const timerMax = selectedLevel ? levelSettings[selectedLevel].time : 0;

  useEffect(() => {
    if (!quizStarted || quizFinished || submitted || !selectedLevel) return;
    if (timeLeft <= 0) {
      handleTimeUp();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, quizStarted, quizFinished, submitted, selectedLevel]);

  useEffect(() => {
    setAnimateQuestion(false);
    const t = setTimeout(() => setAnimateQuestion(true), 80);
    return () => clearTimeout(t);
  }, [currentQuestionIndex]);

  function startQuiz(category, level) {
    setSelectedCategory(category);
    setSelectedLevel(level);
    setCurrentQuestionIndex(0);
    setSelectedAnswer("");
    setSubmitted(false);
    setScore(0);
    setQuizStarted(true);
    setQuizFinished(false);
    setStreak(0);
    setTimeLeft(levelSettings[level].time);
  }

  function handleTimeUp() {
    if (submitted) return;
    setSelectedAnswer("");
    setStreak(0);
    wrongSound.currentTime = 0;
    wrongSound.play().catch(() => {});
    setSubmitted(true);
  }

  function submitAnswer() {
    if ((!selectedAnswer && timeLeft > 0) || submitted) return;

    if (selectedAnswer === currentQuestion.answer) {
      setScore((prev) => prev + levelSettings[selectedLevel].points);
      setStreak((prev) => prev + 1);
      correctSound.currentTime = 0;
      correctSound.play().catch(() => {});
    } else {
      setStreak(0);
      wrongSound.currentTime = 0;
      wrongSound.play().catch(() => {});
    }

    setSubmitted(true);
  }

  function nextQuestion() {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer("");
      setSubmitted(false);
      setTimeLeft(levelSettings[selectedLevel].time);
    } else {
      setQuizFinished(true);
      setSubmitted(false);
    }
  }

  function restartQuiz() {
    setSelectedCategory("");
    setSelectedLevel("");
    setCurrentQuestionIndex(0);
    setSelectedAnswer("");
    setSubmitted(false);
    setScore(0);
    setQuizStarted(false);
    setQuizFinished(false);
    setStreak(0);
    setTimeLeft(0);
  }

  function getResultMessage() {
    const maxScore = totalQuestions * (selectedLevel ? levelSettings[selectedLevel].points : 1);
    const percentage = maxScore ? Math.round((score / maxScore) * 100) : 0;

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

  const timerPercent = timerMax ? (timeLeft / timerMax) * 100 : 0;
  const timerColor =
    timeLeft <= 5
      ? "bg-rose-500"
      : timeLeft <= 10
      ? "bg-amber-500"
      : "bg-emerald-500";

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
                  title: "Levels & Timer",
                  desc: "Choose difficulty and race against the clock.",
                  icon: "⏱️",
                },
                {
                  title: "Score Tracking",
                  desc: "Earn points and build your streak.",
                  icon: "🏆",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1"
                >
                  <div className="text-3xl">{feature.icon}</div>
                  <h2 className="mt-4 text-xl font-bold">{feature.title}</h2>
                  <p className="mt-2 text-slate-600">{feature.desc}</p>
                </div>
              ))}
            </section>

            <section className="mb-10">
              <div className="mb-6 text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                  Choose Difficulty
                </p>
                <h2 className="mt-2 text-3xl font-extrabold">Pick Your Level</h2>
              </div>

              <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3">
                {Object.entries(levelSettings).map(([level, cfg]) => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`rounded-3xl p-5 text-left shadow-sm ring-1 transition ${
                      selectedLevel === level
                        ? "bg-indigo-50 ring-indigo-300"
                        : "bg-white ring-slate-200 hover:-translate-y-1 hover:shadow-lg"
                    }`}
                  >
                    <div className="text-3xl">{cfg.badge}</div>
                    <h3 className="mt-3 text-xl font-bold">{level}</h3>
                    <p className="mt-1 text-slate-600">{cfg.time} sec/question</p>
                    <p className="mt-1 text-slate-600">{cfg.points} point{cfg.points > 1 ? "s" : ""} each</p>
                  </button>
                ))}
              </div>
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
                    onClick={() => selectedLevel && startQuiz(category, selectedLevel)}
                    disabled={!selectedLevel}
                    className={`rounded-3xl bg-white p-6 text-left shadow-sm ring-1 ring-slate-200 transition ${
                      selectedLevel
                        ? "hover:-translate-y-1 hover:shadow-lg"
                        : "cursor-not-allowed opacity-60"
                    }`}
                  >
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${quizData[category].color} text-2xl text-white shadow-md`}
                    >
                      {quizData[category].icon}
                    </div>
                    <h3 className="mt-5 text-2xl font-bold">{category}</h3>
                    <p className="mt-2 text-slate-600">
                      {quizData[category].questions.length} fun questions to test and grow skills.
                    </p>
                    <div className="mt-5 inline-flex rounded-2xl bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700">
                      {selectedLevel ? `Start ${selectedLevel}` : "Choose a level first"}
                    </div>
                  </button>
                ))}
              </div>
            </section>
          </>
        )}

        {quizStarted && !quizFinished && currentQuestion && (
          <section
            className={`mx-auto max-w-3xl rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8 transition-all duration-500 ${
              animateQuestion ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                  {selectedCategory} Quiz
                </p>
                <h2 className="mt-1 text-2xl font-extrabold">
                  Question {currentQuestionIndex + 1} of {totalQuestions}
                </h2>
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="rounded-2xl bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
                  Score: {score}
                </div>
                <div
                  className={`rounded-2xl px-4 py-2 text-sm font-bold text-white ${
                    timeLeft <= 5 ? "animate-pulse bg-rose-500" : "bg-indigo-600"
                  }`}
                >
                  ⏱️ {timeLeft}s
                </div>
              </div>
            </div>

            <div className="mb-3 h-3 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-sky-500 transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
              />
            </div>

            <div className="mb-6 h-2 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className={`h-full rounded-full transition-all duration-1000 ${timerColor}`}
                style={{ width: `${timerPercent}%` }}
              />
            </div>

            {selectedCategory === "Movies & Music" && (
              <div className="mb-4 flex flex-wrap gap-3">
                <div className="rounded-2xl bg-pink-50 px-4 py-2 text-sm font-bold text-pink-700">
                  🎬 Movie Mode
                </div>
                <div className="rounded-2xl bg-yellow-50 px-4 py-2 text-sm font-bold text-yellow-700">
                  🔥 Streak: {streak}
                </div>
                <div className="rounded-2xl bg-violet-50 px-4 py-2 text-sm font-bold text-violet-700">
                  {levelSettings[selectedLevel].badge} {selectedLevel}
                </div>
              </div>
            )}

            <h3 className="text-xl font-bold md:text-2xl">{currentQuestion.question}</h3>

            {selectedCategory === "Movies & Music" && currentQuestion.image && (
              <div className="mt-4 overflow-hidden rounded-3xl ring-1 ring-slate-200 shadow-sm">
                <img
                  src={currentQuestion.image}
                  alt={currentQuestion.question}
                  className="h-56 w-full object-cover md:h-72 transition-transform duration-500 hover:scale-105"
                />
              </div>
            )}

            {selectedCategory === "Movies & Music" && currentQuestion.hint && !submitted && (
              <p className="mt-3 rounded-2xl bg-yellow-50 px-4 py-3 text-sm font-semibold text-yellow-700 ring-1 ring-yellow-200">
                💡 Hint: {currentQuestion.hint}
              </p>
            )}

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
                    className={`rounded-2xl border px-4 py-4 text-left font-medium transition-all duration-300 ${
                      isCorrect
                        ? "scale-[1.02] border-emerald-300 bg-emerald-50 text-emerald-700"
                        : isWrongSelected
                        ? "border-rose-300 bg-rose-50 text-rose-700"
                        : isSelected
                        ? "border-indigo-300 bg-indigo-50 text-indigo-700"
                        : "border-slate-200 bg-slate-50 text-slate-700 hover:border-indigo-200 hover:bg-indigo-50/60 hover:translate-x-1"
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
                className={`mt-6 rounded-2xl p-5 ring-1 transition-all duration-300 ${
                  selectedAnswer === currentQuestion.answer
                    ? "bg-emerald-50 ring-emerald-200"
                    : "bg-rose-50 ring-rose-200"
                }`}
              >
                {selectedAnswer === currentQuestion.answer ? (
                  <div>
                    <p className="text-xl font-extrabold text-emerald-700">🎉 Correct!</p>
                    <p className="mt-1 text-sm font-semibold text-emerald-700">
                      Your chosen answer (<b>{selectedAnswer}</b>) is correct.
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="text-xl font-extrabold text-rose-700">
                      {timeLeft === 0 ? "⏰ Time’s Up!" : "😢 Oops!"}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-rose-700">
                      {selectedAnswer
                        ? <>Your chosen answer (<b>{selectedAnswer}</b>) is incorrect. The correct answer is <b>{currentQuestion.answer}</b>.</>
                        : <>You ran out of time. The correct answer is <b>{currentQuestion.answer}</b>.</>}
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
          <section className="mx-auto max-w-3xl rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200 animate-pulse">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-sky-500 text-4xl text-white shadow-lg">
              🏅
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Quiz Complete
            </p>
            <h2 className="mt-2 text-4xl font-extrabold">Your Result</h2>
            <p className="mt-4 text-2xl font-bold text-slate-800">
              {score} / {totalQuestions * (selectedLevel ? levelSettings[selectedLevel].points : 1)}
            </p>
            <p className="mt-2 text-lg text-slate-600">
              Level: {selectedLevel}
            </p>

            {selectedCategory === "Movies & Music" && (
              <div className="mx-auto mt-4 inline-flex rounded-full bg-pink-100 px-5 py-2 text-sm font-bold text-pink-700 ring-1 ring-pink-200">
                🌟 Movies & Music Champion
              </div>
            )}

            <div className="mx-auto mt-6 max-w-xl rounded-2xl bg-emerald-50 p-5 ring-1 ring-emerald-200">
              <p className="font-semibold text-emerald-700">{getResultMessage()}</p>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => startQuiz(selectedCategory, selectedLevel)}
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