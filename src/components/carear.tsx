import React from 'react';
import {
  BookOpen,
  Brain,
  Compass,
  ExternalLink,
  GraduationCap,
  Users,
  Wrench
} from 'lucide-react';

interface CareerCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  links?: { text: string; url: string }[];
}

function CareerCard({ icon: Icon, title, description, links = [] }: CareerCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <Icon className="w-6 h-6 text-indigo-600 mr-3" />
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      {links.length > 0 && (
        <ul className="space-y-2">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 flex items-center"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function App() {
  const sections = [
    {
      icon: Compass,
      title: "Career Exploration Tools",
      description: "Discover your perfect career path through interactive assessments and personality tests that match your interests with potential careers.",
      links: [
        { text: "Career Interest Assessment", url: "https://example.com/assessment" },
        { text: "Career Matching Tool", url: "https://example.com/matching" }
      ]
    },
    {
      icon: Wrench,
      title: "Skill Development Resources",
      description: "Access comprehensive resources to develop essential skills for your future career, including both technical and soft skills.",
      links: [
        { text: "Online Learning Platforms", url: "https://example.com/learning" },
        { text: "Skill Building Workshops", url: "https://example.com/workshops" }
      ]
    },
    {
      icon: GraduationCap,
      title: "Educational Pathways",
      description: "Explore different educational routes and qualifications needed for your desired career, including university, vocational training, and apprenticeships.",
      links: [
        { text: "University Programs Guide", url: "https://example.com/university" },
        { text: "Vocational Training Options", url: "https://example.com/vocational" }
      ]
    },
    {
      icon: Users,
      title: "Role Models & Mentorship",
      description: "Connect with industry professionals and learn from their experiences through mentorship programs and success stories.",
      links: [
        { text: "Find a Mentor", url: "https://example.com/mentorship" },
        { text: "Success Stories", url: "https://example.com/stories" }
      ]
    },
    {
      icon: Brain,
      title: "Interactive Tools",
      description: "Engage with interactive career planning tools, including resume builders, interview simulators, and career timeline planners.",
      links: [
        { text: "Resume Builder", url: "https://example.com/resume" },
        { text: "Interview Simulator", url: "https://example.com/interview" }
      ]
    },
    {
      icon: BookOpen,
      title: "Resources & External Links",
      description: "Access a curated collection of career guidance resources, including industry reports, salary guides, and job market trends.",
      links: [
        { text: "Industry Reports", url: "https://example.com/reports" },
        { text: "Salary Guide", url: "https://example.com/salary" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Career Guidance Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering students to make informed decisions about their future careers
            through comprehensive resources and guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <CareerCard key={index} {...section} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600">
            Need personalized guidance? 
            <a href="#contact" className="text-indigo-600 hover:text-indigo-800 ml-2">
              Contact our career counselors
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;