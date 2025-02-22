import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GamepadIcon, BookOpen, Palette, Music, ArrowLeft, FlaskConical } from 'lucide-react';
import './kindergarten.css'

function Kindergarten() {
  const navigate = useNavigate();



  return (
    <div>
  
    <div className='body'>

    <div className="min-h-screen ">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-gray-600 hover:text-gray-800 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </button>

        <h1 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-gray-800 mb-4">
          Kindergarten Learning Center 
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Explore fun and educational activities!
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
           {/* first page */}
            <div    onClick={() => navigate('/game')} 
            
              style={{ backgroundImage: 'url(https://t3.ftcdn.net/jpg/00/88/98/18/360_F_88981880_YjJManMJ6hJmKr5CZteFJAkEzXIh8mxW.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'  }}
              className=" rounded-xl shadow-md p-6 cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl">
              <div className={` w-16 h-36 rounded-full flex items-center justify-center mb-4 mx-auto`}>
              <GamepadIcon className="w-8 h-8 text-pink-500" />
                
              </div>
              <h3 className="text-3xl font-bold text-center text-white mb-2">
              Fun Games
              </h3>
              <p className="text-white text-center">Interactive educational games</p>
            </div>

              {/* second page */}

            <div onClick={() => navigate('/story')}
            style={{ backgroundImage: 'url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fff93170797889.5baf5626c31ce.png)', backgroundSize: 'cover', backgroundPosition: 'center'  }}
              
              className=" rounded-xl shadow-md p-6 cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl"
            >
              <div className={`w-16 h-36 rounded-full flex items-center justify-center mb-4 mx-auto`}>
              <BookOpen className="w-8 h-8 text-purple-500" />
                
              </div>
              <h3 className="text-3xl font-bold text-center text-white mb-2">
              Story time
              </h3>
              <p className="text-white text-center">Engaging stories and reading activities</p>
            </div>

              {/* trird page */}
              <div onClick={() => navigate('/course')}
               style={{ backgroundImage: 'url(https://i.pinimg.com/1200x/87/96/c7/8796c73e06b7a9a18e33f619c56f9a79.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'  }}
              
              className=" rounded-xl shadow-md p-6 cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl">
              <div className={` w-16 h-36  rounded-full flex items-center justify-center mb-4 mx-auto`}>
              <FlaskConical className="w-8 h-8 text-green-500" />
                
              </div>
              <h3 className="text-3xl font-bold text-center text-white mb-2">
              Experement
              </h3>
              <p className="text-white text-center">Interactive educational games</p>
            </div>

            {/* forth page */}
            <div onClick={() => navigate('/story')}
             style={{ backgroundImage: 'url(https://media.istockphoto.com/id/857045822/vector/seamless-question-mark-background.jpg?s=612x612&w=0&k=20&c=ZnLPDOCb6Cbbigju-STZ6iCZnyjtZLkEj5bHhXRIumI=)', backgroundSize: 'cover', backgroundPosition: 'center'  }}
              
              className=" rounded-xl shadow-md p-6 cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl"
            >
              <div className={` w-16 h-36 rounded-full flex items-center justify-center mb-4 mx-auto`}>
                
              </div>
              <h3 className="text-3xl font-bold text-center text-white mb-2">
             Quizes
              </h3>
              <p className="text-white text-center">Interactive educational games</p>
            </div>
            
          
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Leaderboard</h2>
          <div className="aspect-w-16 aspect-h-9">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80"
              alt="Kids learning"
              className="rounded-lg w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Kindergarten