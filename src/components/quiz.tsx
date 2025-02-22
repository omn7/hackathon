import React, { useState } from 'react';
import { Star, Trophy, ArrowRight, RefreshCw } from 'lucide-react';

type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  image: string;
};

const questions: Question[] = [
  {
    id: 1,
    question: "Which animal says 'Meow'?",
    options: ['Dog', 'Cat', 'Duck', 'Cow'],
    correctAnswer: 'Cat',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 2,
    question: 'What color is a banana?',
    options: ['Red', 'Blue', 'Yellow', 'Green'],
    correctAnswer: 'Yellow',
    image: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 3,
    question: 'How many legs does a spider have?',
    options: ['4', '6', '8', '10'],
    correctAnswer: '8',
    image: 'https://images.unsplash.com/photo-1567432159017-d2c42d894ba7?auto=format&fit=crop&q=80&w=400'
  }
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
    const correct = answer === questions[currentQuestion].correctAnswer;
    setIsCorrect(correct);

    setTimeout(() => {
      if (correct) {
        setScore(score + 1);
      }

      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-300 to-blue-400 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full">
        {showScore ? (
          <div className="text-center">
            <Trophy className="w-20 h-20 mx-auto text-yellow-400 animate-bounce" />
            <h2 className="text-3xl font-bold mt-4 mb-2">Quiz Complete! 🎉</h2>
            <p className="text-2xl mb-6">
              You scored {score} out of {questions.length}
            </p>
            <button
              onClick={resetQuiz}
              className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 mx-auto hover:bg-indigo-700 transition-colors"
            >
              <RefreshCw className="w-5 h-5" />
              Play Again
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <Star className="w-6 h-6 text-yellow-400" />
                <span className="text-xl font-semibold">
                  Question {currentQuestion + 1}/{questions.length}
                </span>
              </div>
              <div className="text-xl font-semibold">Score: {score}</div>
            </div>

            <div className="mb-8">
              <img
                src={questions[currentQuestion].image}
                alt="Question"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h2 className="text-2xl font-bold mb-4">
                {questions[currentQuestion].question}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(option)}
                    disabled={selectedAnswer !== null}
                    className={`p-4 text-lg font-semibold rounded-xl transition-all transform hover:scale-105 
                      ${
                        selectedAnswer === option
                          ? isCorrect
                            ? 'bg-green-500 text-white'
                            : 'bg-red-500 text-white'
                          : 'bg-indigo-100 hover:bg-indigo-200'
                      }
                      ${
                        selectedAnswer !== null &&
                        option === questions[currentQuestion].correctAnswer
                          ? 'bg-green-500 text-white'
                          : ''
                      }
                    `}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="h-2 bg-gray-200 rounded-full flex-1 mr-4">
                <div
                  className="h-2 bg-indigo-600 rounded-full transition-all duration-500"
                  style={{
                    width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                  }}
                />
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;