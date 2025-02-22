import React, { useState } from 'react';
import { Book, TestTube, Briefcase, GraduationCap, Menu } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('ebook');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs = [
    { id: 'ebook', label: 'EBook', icon: Book },
    { id: 'tests', label: 'Tests & Quizzes', icon: TestTube },
    { id: 'experience', label: 'Industry Experience', icon: Briefcase },
    { id: 'courses', label: 'Courses', icon: GraduationCap },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'ebook':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((book) => (
              <div key={book} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <img
                  src={`https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&auto=format&fit=crop&q=60`}
                  alt={`Book ${book}`}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">Digital Textbook {book}</h3>
                <p className="text-gray-600 mb-4">Interactive learning material with multimedia content</p>
                <button className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors">
                  Read Now
                </button>
              </div>
            ))}
          </div>
        );
      case 'tests':
        return (
          <div className="space-y-6">
            {[1, 2, 3].map((quiz) => (
              <div key={quiz} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">Module {quiz} Assessment</h3>
                <div className="flex items-center gap-4 text-gray-600 mb-4">
                  <span>Duration: 45 mins</span>
                  <span>Questions: 25</span>
                  <span>Points: 100</span>
                </div>
                <button className="bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 transition-colors">
                  Start Quiz
                </button>
              </div>
            ))}
          </div>
        );
      case 'experience':
        return (
          <div className="space-y-8">
            {[1, 2, 3].map((exp) => (
              <div key={exp} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-6">
                  <img
                    src={`https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=60`}
                    alt={`Company ${exp}`}
                    className="w-32 h-32 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Industry Project {exp}</h3>
                    <p className="text-gray-600 mb-4">
                      Work on real projects with industry professionals and gain hands-on experience.
                    </p>
                    <button className="bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case 'courses':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((course) => (
              <div key={course} className="bg-white rounded-lg shadow-md p-6">
                <div className="mb-4">
                  <span className="bg-emerald-100 text-emerald-800 text-sm font-medium px-3 py-1 rounded-full">
                    {course % 2 === 0 ? 'Beginner' : 'Advanced'}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Course Title {course}</h3>
                <p className="text-gray-600 mb-4">Learn essential skills with our comprehensive curriculum.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">8 weeks • 16 lessons</span>
                  <button className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors">
                    Enroll
                  </button>
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-emerald-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Undergarden</h1>
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className={`bg-white shadow-md md:shadow-none ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-3 md:py-4 border-b-2 ${
                    activeTab === tab.id
                      ? 'border-emerald-600 text-emerald-600'
                      : 'border-transparent text-gray-600 hover:text-emerald-600'
                  } transition-colors`}
                >
                  <Icon size={20} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;