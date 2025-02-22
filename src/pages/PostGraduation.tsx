import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Users, Trophy, Brain, ArrowLeft } from 'lucide-react';

function PostGraduation() {
  const navigate = useNavigate();

  const programs = [
    {
      title: 'Research Programs',
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      description: 'Advanced research opportunities in various fields',
      color: 'bg-blue-100',
    },
    {
      title: 'Academic Resources',
      icon: <BookOpen className="w-8 h-8 text-purple-500" />,
      description: 'Access to journals, papers, and libraries',
      color: 'bg-purple-100',
    },
    {
      title: 'Networking',
      icon: <Users className="w-8 h-8 text-green-500" />,
      description: 'Connect with scholars and professionals',
      color: 'bg-green-100',
    },
    {
      title: 'Achievements',
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      description: 'Recognition and awards',
      color: 'bg-yellow-100',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-gray-600 hover:text-gray-800 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </button>

        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Post Graduation Hub
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Advance your academic journey with our comprehensive programs
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl"
            >
              <div className={`${program.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto`}>
                {program.icon}
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
                {program.title}
              </h3>
              <p className="text-gray-600 text-center">{program.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Latest Research</h2>
            <img
              src="https://images.unsplash.com/photo-1532619187608-e5375cab36aa?auto=format&fit=crop&q=80"
              alt="Research facility"
              className="rounded-lg w-full h-48 object-cover mb-4"
            />
            <p className="text-gray-600">
              Explore cutting-edge research opportunities and collaborate with leading scholars in your field.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Academic Excellence</h2>
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"
              alt="Graduate students"
              className="rounded-lg w-full h-48 object-cover mb-4"
            />
            <p className="text-gray-600">
              Join a community of dedicated scholars and pursue academic excellence in your chosen field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostGraduation