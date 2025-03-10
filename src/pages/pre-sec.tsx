import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, NotebookText } from 'lucide-react';

function Gdu() {
  const navigate = useNavigate();

  

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
          Primary and Secondary Education.
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Advance your academic journey with our comprehensive programs
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
           {/* first page */}
            <div    onClick={() => navigate('/carear')} 
            
              style={{ backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/background/20220312/pngtree-personal-development-career-image_1061886.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'  }}
              className=" rounded-xl shadow-md p-6 cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl">
              <div className={` w-16 h-36 rounded-full flex items-center justify-center mb-4 mx-auto`}>
              {/* <NotebookText className="w-8 h-8 text-green-300" /> */}
              </div>
              <h3 className="text-3xl font-bold text-center text-white mb-2">
              Career guidance
              </h3>
              <p className="text-white text-center">Interactive educational games</p>
            </div>

              {/* second page */}

            <div onClick={() => navigate('/ebook')}
            style={{ backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/027/715/023/non_2x/e-learning-icon-made-with-binary-code-in-wireframe-hands-online-education-webinar-teaching-online-training-courses-digital-binary-data-streaming-digital-code-background-illustration-vector.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'  }}
              
              className=" rounded-xl shadow-md p-6 cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl"
            >
              <div className={`w-16 h-36 rounded-full flex items-center justify-center mb-4 mx-auto`}>
              {/* <BookOpen className="w-8 h-8 text-purple-500" /> */}
                
              </div>
              <h3 className="text-3xl font-bold text-center text-white mb-2">
              E-Books & Library
              </h3>
              <p className="text-white text-center">Engaging stories and reading activities</p>
            </div>

              {/* trird page */}
              <div onClick={() => navigate('/course')}
               style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/hand-drawn-science-education-background-design_23-2148477883.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'  }}
              
              className=" rounded-xl shadow-md p-6 cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl">
              <div className={` w-16 h-36  rounded-full flex items-center justify-center mb-4 mx-auto`}>
              {/* <Brain className="w-8 h-8 text-green-500" /> */}
                
              </div>
              <h3 className="text-3xl font-bold text-center text-white mb-2">
              Experiments and Projects
              </h3>
              <p className="text-white text-center">Interactive educational games</p>
            </div>

            {/* forth page */}
            <div onClick={() => navigate('/quiz')}
             style={{ backgroundImage: 'url(https://media.istockphoto.com/id/857045822/vector/seamless-question-mark-background.jpg?s=612x612&w=0&k=20&c=ZnLPDOCb6Cbbigju-STZ6iCZnyjtZLkEj5bHhXRIumI=)', backgroundSize: 'cover', backgroundPosition: 'center'  }}
              
              className=" rounded-xl shadow-md p-6 cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl"
            >
              <div className={` w-16 h-36 rounded-full flex items-center justify-center mb-4 mx-auto`}>
                
              </div>
              <h3 className="text-3xl font-bold text-center text-white mb-2">
           Quiz
              </h3>
              <p className="text-white text-center">Interactive educational games</p>
            </div>
            
          
        </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">DashBoard</h2>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Join ALL India Test.</h2>
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
    
  );
}

export default Gdu