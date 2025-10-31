import { MessageCircle } from 'lucide-react';

interface Section1Props {
  isActive: boolean;
}

function Section1({ isActive }: Section1Props) {
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
          Build a relationship with your tutor
        </h1>

        <p
          className={`text-base sm:text-lg text-gray-400 mb-12 leading-relaxed transition-all duration-1000 ${
            isActive
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-10'
          }`}
          style={{ transitionDelay: isActive ? '400ms' : '0ms' }}
        >
          Speak Tutor designs a personalized curriculum as unique as you are by
          getting to know you on a surprisingly deep level.
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
          className={`bg-white rounded-2xl p-4 shadow-lg transition-all duration-1000 ${
            isActive
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: isActive ? '800ms' : '0ms' }}
        >
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm sm:text-base text-gray-900 font-medium">
                Hey Audrey, your trip to Mexico is in 6 days! I made you a vocab
                lesson for your trip!
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl p-4 text-white text-left">
            <div className="flex items-center gap-2 mb-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                />
              </svg>
              <span className="text-xs font-semibold uppercase tracking-wide">
                Made for you
              </span>
            </div>
            <p className="text-sm sm:text-base font-medium">
              Phrases to go through customs and air travel
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
