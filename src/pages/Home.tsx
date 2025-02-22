import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Baby, Bird, Bookmark, BrainCircuit, BookOpenCheck, School, BotMessageSquare } from 'lucide-react';
import Footer from '../components/footer';


function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-800 mb-8">
          Welcome to Team CodeCrew Project.
        </h1>
        <p className="text-xl text-center text-gray-600 mb-16">
          Choose your educational journey
        </p>
        {/* <div>
            <div className="flex justify-center mb-8">
            <button className="bg-purple-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transform transition-all hover:scale-110 hover:bg-purple-700">
              Leaderboard
            </button>
            </div>
        </div> */}

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Kindergarten Card */}
          <div
        onClick={() => navigate('/kindergarten')}
        className="bg-violet-300 rounded-xl shadow-lg p-8 cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl"
          >
        <div className="flex flex-col items-center">
          <div className="bg-pink-100 p-4 rounded-full mb-4">
            <Baby className="w-12 h-12 text-pink-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Kindergarten</h2>
          <p className="text-gray-600 text-center">
            Fun learning activities and games for our youngest learners
          </p>
        </div>
          </div>
          {/* Primary and Secondary Education */}
          <div
        onClick={() => navigate('/kindergarten')}
        className="bg-amber-300 rounded-xl shadow-lg p-8 cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl"
          >
        <div className="flex flex-col items-center">
          <div className="bg-pink-100 p-4 rounded-full mb-4">
            <School className="w-12 h-12 text-pink-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Elemantry</h2>
          <p className="text-gray-600 text-center">
            Fun learning activities and games for our youngest learners
          </p>
        </div>
          </div>

          {/* Undergraduates */}
          <div
        onClick={() => navigate('/post-graduation')}
        className="bg-blue-300 rounded-xl shadow-lg p-8 cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl"
          >
        <div className="flex flex-col items-center">
          <div className="bg-blue-100 p-4 rounded-full mb-4">
            <GraduationCap className="w-12 h-12 text-blue-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Undergraduates</h2>
          <p className="text-gray-600 text-center">
            Advanced studies and research opportunities for graduates
          </p>
        </div>
          </div>

          {/* PostGraduation */}
          <div
        onClick={() => navigate('/post-graduation')}
        className="bg-emerald-200 rounded-xl shadow-lg p-8 cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl"
          >
        <div className="flex flex-col items-center">
          <div className="bg-blue-100 p-4 rounded-full mb-4">
            <BookOpenCheck className="w-12 h-12 text-blue-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Post Graduation</h2>
          <p className="text-gray-600 text-center">
            Advanced studies and research opportunities for graduates
          </p>
        </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8 pb-4">
        <Footer />
      </div>
      <div>
        <div className="fixed bottom-4 right-4 animate-bounce">
          <div onClick={() => navigate('/post-graduation')} className="bg-slate-600 p-2 rounded-full shadow-lg cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl">
            <BotMessageSquare className="w-12 h-12 text-white" />
          </div>
          <p className=" text-center mt-2">AI Assistant</p>
        </div>
      </div>
      
    </div>
   
  );
}

export default Home