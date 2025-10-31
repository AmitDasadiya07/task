import { Heart, List, MessageCircle } from 'lucide-react';

interface Section2Props {
  isActive: boolean;
}

function Section2({ isActive }: Section2Props) {
  return (
    <div className="h-screen w-full bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <h1
          className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${
            isActive
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-10'
          }`}
          style={{ transitionDelay: isActive ? '200ms' : '0ms' }}
        >
          Stay motivated and reach your goals
        </h1>

        <p
          className={`text-base sm:text-lg text-gray-400 mb-12 leading-relaxed transition-all duration-1000 ${
            isActive
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-10'
          }`}
          style={{ transitionDelay: isActive ? '400ms' : '0ms' }}
        >
          Speak Tutor keeps you motivated and accountable to achieve your goals.
          Learning a language is better with someone by your side.
        </p>

        <div
          className={`flex justify-center mb-8 transition-all duration-1000 ${
            isActive
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: isActive ? '600ms' : '0ms' }}
        >
          <div className="w-12 h-12 rounded-full bg-gray-300" />
        </div>

        <div
          className={`space-y-4 transition-all duration-1000 ${
            isActive
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: isActive ? '700ms' : '0ms' }}
        >
          <div className="flex items-start gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              className={`bg-gradient-to-br from-pink-400 to-pink-500 rounded-2xl p-6 text-white text-left transition-all duration-700 ${
                isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: isActive ? '900ms' : '0ms' }}
            >
              <Heart className="w-6 h-6 mb-3" />
              <p className="text-sm sm:text-base font-medium leading-relaxed">
                You're interested in traveling, and exploring new cultures.
              </p>
            </div>

            <div
              className={`bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white text-left transition-all duration-700 ${
                isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: isActive ? '1100ms' : '0ms' }}
            >
              <List className="w-6 h-6 mb-3" />
              <p className="text-sm sm:text-base font-medium leading-relaxed">
                We've created unique lessons and conversations based on those
                goals.
              </p>
            </div>
          </div>

          <button
            className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-700 transform hover:scale-105 ${
              isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: isActive ? '1300ms' : '0ms' }}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section2;
