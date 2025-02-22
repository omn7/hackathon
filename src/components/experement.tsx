import React from 'react';
import { Beaker, Leaf, FlaskRound as Flask, Snowflake, ChevronDown } from 'lucide-react';

interface Experiment {
  title: string;
  description: string;
  materials: string[];
  steps: string[];
  icon: React.ReactNode;
  image: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  time: string;
}

const experiments: Experiment[] = [
  {
    title: "Grow a Crystal Tree",
    description: "Watch amazing crystal formations grow into a colorful tree!",
    materials: ["Table salt", "Water", "Food coloring", "Paper towels", "Small bowl"],
    steps: [
      "Mix warm water with salt until it won't dissolve anymore",
      "Add food coloring to the solution",
      "Pour mixture into a bowl",
      "Place twisted paper towel strips in the solution",
      "Wait 24 hours to see crystals form!"
    ],
    icon: <Leaf className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1603792907191-89e55f70099a?auto=format&fit=crop&q=80&w=800",
    difficulty: "Easy",
    time: "24 hours"
  },
  {
    title: "Elephant Toothpaste",
    description: "Create a massive foamy explosion that's safe and fun!",
    materials: ["Hydrogen peroxide", "Yeast", "Dish soap", "Food coloring", "Water", "Bottle"],
    steps: [
      "Mix yeast with warm water",
      "Pour hydrogen peroxide into bottle",
      "Add dish soap and food coloring",
      "Pour in yeast mixture",
      "Watch it explode!"
    ],
    icon: <Flask className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1532634993-15f421e42ec0?auto=format&fit=crop&q=80&w=800",
    difficulty: "Medium",
    time: "10 minutes"
  },
  {
    title: "DIY Compass",
    description: "Make your own compass using household items!",
    materials: ["Needle", "Magnet", "Leaf", "Bowl of water"],
    steps: [
      "Magnetize the needle by rubbing it with a magnet",
      "Place the leaf in water",
      "Put the needle on the leaf",
      "Watch it point North!"
    ],
    icon: <Beaker className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1533294455009-a77b7557d2d1?auto=format&fit=crop&q=80&w=800",
    difficulty: "Easy",
    time: "5 minutes"
  },
  {
    title: "Sticky Ice",
    description: "Create ice that sticks to string like magic!",
    materials: ["Ice cubes", "String", "Salt", "Water"],
    steps: [
      "Place ice cubes in water",
      "Lay string across ice cube",
      "Sprinkle salt on top",
      "Wait 30 seconds",
      "Lift string - ice will stick!"
    ],
    icon: <Snowflake className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1551009175-15bdf9dcb580?auto=format&fit=crop&q=80&w=800",
    difficulty: "Easy",
    time: "2 minutes"
  }
];

function ExperimentCard({ experiment }: { experiment: Experiment }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative h-48">
        <img 
          src={experiment.image} 
          alt={experiment.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
          {experiment.difficulty}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          {experiment.icon}
          <h3 className="text-xl font-bold">{experiment.title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{experiment.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">⏱ {experiment.time}</span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
          >
            {isOpen ? 'Show less' : 'Show more'}
            <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
        
        {isOpen && (
          <div className="border-t pt-4">
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Materials Needed:</h4>
              <ul className="list-disc list-inside text-gray-600">
                {experiment.materials.map((material, index) => (
                  <li key={index}>{material}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Steps:</h4>
              <ol className="list-decimal list-inside text-gray-600">
                {experiment.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Kids() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            🧪 Fun Science Experiments for Kids!
          </h1>
          <p className="text-xl text-gray-600">
            Discover amazing experiments you can do at home
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {experiments.map((experiment, index) => (
            <ExperimentCard key={index} experiment={experiment} />
          ))}
        </div>

        <footer className="mt-12 text-center text-gray-500 text-3xl">
          <p>⚠️ Always perform experiments with adult supervision</p>
        </footer>
      </div>
    </div>
  );
}

export default Kids;