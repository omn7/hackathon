import React, { useState, useEffect, useRef } from 'react';
import { Book, VolumeX, Volume2, ChevronLeft, ChevronRight } from 'lucide-react';

interface Story {
  title: string;
  content: string[];
  image: string;
}

const stories: Story[] = [
  {
    title: "The Friendly Forest",
    content: [
      "Once upon a time, in a magical forest, there lived a little rabbit named Hoppy.",
      "Hoppy loved making new friends and helping others in the forest.",
      "One day, he met a sad little bird who couldn't find his way home.",
      "Hoppy hopped high and showed the bird the way back to his nest.",
      "From that day on, they became the best of friends and had many adventures together."
    ],
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "The Brave Little Star",
    content: [
      "High up in the night sky, there was a tiny star named Twinkle.",
      "While all the other stars shone brightly, Twinkle was shy and barely glowed.",
      "But one dark night, when the moon took a break, Twinkle gathered all her courage.",
      "She shone so brightly that she helped guide all the lost fireflies home.",
      "Now, Twinkle knows that even the smallest star can make a big difference."
    ],
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80"
  }
];

function Story() {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isReading, setIsReading] = useState(false);
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const readingRef = useRef(false);

  const currentStory = stories[currentStoryIndex];

  const speak = (text: string) => {
    return new Promise<void>((resolve) => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1.1;
      utterance.onend = () => resolve();
      speechSynthesis.speak(utterance);
    });
  };

  const stopSpeaking = () => {
    readingRef.current = false;
    speechSynthesis.cancel();
    setIsReading(false);
  };

  const readStory = async () => {
    readingRef.current = true;
    setIsReading(true);
    
    for (let i = currentParagraph; i < currentStory.content.length && readingRef.current; i++) {
      setCurrentParagraph(i);
      await speak(currentStory.content[i]);
      
      // Check if we should continue after each paragraph
      if (!readingRef.current) break;
    }
    
    if (readingRef.current) {
      readingRef.current = false;
      setIsReading(false);
    }
  };

  const nextStory = () => {
    stopSpeaking();
    setCurrentStoryIndex((prev) => (prev + 1) % stories.length);
    setCurrentParagraph(0);
  };

  const previousStory = () => {
    stopSpeaking();
    setCurrentStoryIndex((prev) => (prev - 1 + stories.length) % stories.length);
    setCurrentParagraph(0);
  };

  useEffect(() => {
    return () => {
      stopSpeaking();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-purple-800 mb-2 flex items-center justify-center gap-2">
            <Book className="w-8 h-8" />
            Storytime Adventures
          </h1>
          <p className="text-lg text-purple-600">Magical stories for curious minds</p>
        </header>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <img 
            src={currentStory.image} 
            alt={currentStory.title}
            className="w-full h-64 object-cover"
          />
          
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <button 
                onClick={previousStory}
                className="text-purple-600 hover:text-purple-800 transition-colors"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <h2 className="text-3xl font-bold text-center text-purple-800">
                {currentStory.title}
              </h2>
              
              <button 
                onClick={nextStory}
                className="text-purple-600 hover:text-purple-800 transition-colors"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 mb-4">
              <p className="text-lg text-gray-800 leading-relaxed">
                {currentStory.content[currentParagraph]}
              </p>
            </div>

            <div className="flex justify-center">
              <button
                onClick={isReading ? stopSpeaking : readStory}
                className="flex items-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-lg"
              >
                {isReading ? (
                  <>
                    <VolumeX className="w-6 h-6" />
                    Stop Reading
                  </>
                ) : (
                  <>
                    <Volume2 className="w-6 h-6" />
                    Read Story
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;