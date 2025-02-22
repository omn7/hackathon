import React, { useState } from 'react';
import { BookOpen, Clock, Star, Filter, Search, GraduationCap, FileText, Video, X, ChevronRight, BookMarked } from 'lucide-react';

interface Lecture {
  id: number;
  title: string;
  duration: string;
  type: 'video' | 'notes';
}

interface Module {
  id: number;
  title: string;
  lectures: Lecture[];
}

interface Course {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  students: number;
  duration: string;
  category: string;
  image: string;
  price: number;
  modules: Module[];
  description: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    instructor: "Sarah Johnson",
    rating: 4.8,
    students: 1234,
    duration: "12 weeks",
    category: "Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    price: 99.99,
    description: "Master the fundamentals of web development with this comprehensive course. Learn HTML, CSS, JavaScript, and modern development practices.",
    modules: [
      {
        id: 1,
        title: "Introduction to HTML",
        lectures: [
          { id: 1, title: "HTML Basics", duration: "15:00", type: "video" },
          { id: 2, title: "HTML Structure", duration: "20:00", type: "video" },
          { id: 3, title: "HTML Best Practices", duration: "10:00", type: "notes" }
        ]
      },
      {
        id: 2,
        title: "CSS Fundamentals",
        lectures: [
          { id: 4, title: "CSS Selectors", duration: "25:00", type: "video" },
          { id: 5, title: "CSS Layout", duration: "30:00", type: "video" },
          { id: 6, title: "CSS Reference Guide", duration: "15:00", type: "notes" }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Digital Marketing Mastery",
    instructor: "Michael Chen",
    rating: 4.6,
    students: 856,
    duration: "8 weeks",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    price: 79.99,
    description: "Learn the latest digital marketing strategies and techniques to grow your business online. Cover SEO, social media, and content marketing.",
    modules: [
      {
        id: 1,
        title: "SEO Fundamentals",
        lectures: [
          { id: 1, title: "SEO Basics", duration: "20:00", type: "video" },
          { id: 2, title: "Keyword Research", duration: "25:00", type: "video" },
          { id: 3, title: "SEO Checklist", duration: "10:00", type: "notes" }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Data Science Essentials",
    instructor: "Emily Rodriguez",
    rating: 4.9,
    students: 2156,
    duration: "16 weeks",
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    price: 129.99,
    description: "Dive into the world of data science. Learn Python, statistics, machine learning, and data visualization techniques.",
    modules: [
      {
        id: 1,
        title: "Python for Data Science",
        lectures: [
          { id: 1, title: "Python Basics", duration: "30:00", type: "video" },
          { id: 2, title: "Data Structures", duration: "25:00", type: "video" },
          { id: 3, title: "Python Cheat Sheet", duration: "15:00", type: "notes" }
        ]
      }
    ]
  }
];

const categories = ["All", "Development", "Marketing", "Data Science", "Design", "Business"];

function Course() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [enrollmentModal, setEnrollmentModal] = useState(false);

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleEnroll = (course: Course) => {
    setSelectedCourse(course);
    setEnrollmentModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8" />
            <h1 className="text-3xl font-bold">Learn Academy</h1>
          </div>
          <p className="mt-2 text-blue-100">Expand your knowledge with expert-led courses</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter Section */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search courses..."
              className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <Filter className="h-5 w-5 text-gray-500" />
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all
                  ${selectedCategory === category
                    ? 'bg-blue-500 text-white shadow-md transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map(course => (
            <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
                  <span className="font-semibold text-blue-600">${course.price}</span>
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full mb-4">
                  {course.category}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">by {course.instructor}</p>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{course.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1" />
                    {course.students.toLocaleString()} students
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-1" />
                    <span className="font-medium text-gray-900">{course.rating}</span>
                  </div>
                  <button 
                    onClick={() => handleEnroll(course)}
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg font-medium"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Enrollment Modal */}
      {enrollmentModal && selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">Course Details</h2>
                <button 
                  onClick={() => setEnrollmentModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-6">
                <img
                  src={selectedCourse.image}
                  alt={selectedCourse.title}
                  className="w-24 h-24 object-cover rounded-lg mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold">{selectedCourse.title}</h3>
                  <p className="text-gray-600">by {selectedCourse.instructor}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Course Overview</h4>
                <p className="text-gray-600">{selectedCourse.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-4">Course Content</h4>
                <div className="space-y-4">
                  {selectedCourse.modules.map(module => (
                    <div key={module.id} className="border border-gray-200 rounded-lg">
                      <div className="p-4 bg-gray-50 font-medium flex items-center justify-between">
                        <span>{module.title}</span>
                        <ChevronRight className="h-5 w-5 text-gray-400" />
                      </div>
                      <div className="p-4 space-y-3">
                        {module.lectures.map(lecture => (
                          <div key={lecture.id} className="flex items-center justify-between text-gray-600">
                            <div className="flex items-center">
                              {lecture.type === 'video' ? (
                                <Video className="h-4 w-4 mr-2 text-blue-500" />
                              ) : (
                                <FileText className="h-4 w-4 mr-2 text-green-500" />
                              )}
                              <span>{lecture.title}</span>
                            </div>
                            <span className="text-sm">{lecture.duration}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-gray-600">Course Price</p>
                  <p className="text-2xl font-bold text-gray-900">${selectedCourse.price}</p>
                </div>
                <button className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg font-medium">
                  Complete Enrollment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Course;