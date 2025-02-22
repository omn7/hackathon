import React, { useState, useEffect } from 'react';
import { Star, Trophy, Heart, RefreshCw } from 'lucide-react';

type Question = {
  num1: number;
  num2: number;
  operator: '+' | '-' | '×';
  answer: number;
};

function App() {
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [userAnswer, setUserAnswer] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [feedback, setFeedback] = useState('');
  const [streak, setStreak] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const generateQuestion = () => {
    const operators: ('+' | '-' | '×')[] = ['+', '-', '×'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    let num1, num2, answer;

    switch (operator) {
      case '+':
        num1 = Math.floor(Math.random() * 20) + 1;
        num2 = Math.floor(Math.random() * 20) + 1;
        answer = num1 + num2;
        break;
      case '-':
        num1 = Math.floor(Math.random() * 20) + 1;
        num2 = Math.floor(Math.random() * num1) + 1;
        answer = num1 - num2;
        break;
      case '×':
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * 10) + 1;
        answer = num1 * num2;
        break;
      default:
        num1 = 0;
        num2 = 0;
        answer = 0;
    }

    setCurrentQuestion({ num1, num2, operator, answer });
    setUserAnswer('');
    setFeedback('');
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentQuestion) return;

    const numAnswer = parseInt(userAnswer);
    if (numAnswer === currentQuestion.answer) {
      setScore(score + (streak + 1) * 10);
      setStreak(streak + 1);
      setFeedback('Correct! 🎉');
      setTimeout(generateQuestion, 1000);
    } else {
      setLives(lives - 1);
      setStreak(0);
      setFeedback('Try again! 💪');
      if (lives <= 1) {
        setGameOver(true);
      }
    }
  };

  const restartGame = () => {
    setScore(0);
    setLives(3);
    setStreak(0);
    setGameOver(false);
    generateQuestion();
  };

  if (gameOver) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-fuchsia-600 to-lime-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl p-8 max-w-md w-full text-center shadow-2xl">
          <Trophy className="w-16 h-16 mx-auto text-yellow-500 mb-4" />
          <h2 className="text-3xl font-bold mb-4">Game Over!</h2>
          <p className="text-xl mb-4">Final Score: {score}</p>
          <button
            onClick={restartGame}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 w-full"
          >
            <RefreshCw className="w-5 h-5" /> Play Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-lime-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl p-8 max-w-md w-full shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <Trophy className="w-6 h-6 text-yellow-500" />
            <span className="text-xl font-bold">{score}</span>
          </div>
          <div className="flex gap-1">
            {[...Array(lives)].map((_, i) => (
              <Heart key={i} className="w-6 h-6 text-red-500 fill-red-500" />
            ))}
          </div>
        </div>

        {streak > 2 && (
          <div className="mb-4 text-center">
            <div className="flex items-center justify-center gap-1">
              {[...Array(Math.min(streak, 5))].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <p className="text-sm text-purple-600 font-medium">
              {streak} in a row! {streak * 10} points per correct answer!
            </p>
          </div>
        )}

        {currentQuestion && (
          <div className="text-center mb-6">
            <p className="text-4xl font-bold mb-4 text-gray-800">
              {currentQuestion.num1} {currentQuestion.operator} {currentQuestion.num2} = ?
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="number"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className="w-24 text-center text-2xl p-2 border-2 border-purple-300 rounded-lg focus:border-purple-500 focus:outline-none"
                autoFocus
              />
              <button
                type="submit"
                className="block w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-bold text-lg hover:opacity-90 transition-opacity"
              >
                Check Answer
              </button>
            </form>
          </div>
        )}

        {feedback && (
          <div className={`text-center text-xl font-bold ${feedback.includes('Correct') ? 'text-green-500' : 'text-orange-500'}`}>
            {feedback}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;