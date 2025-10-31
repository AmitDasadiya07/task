import { User, Users, Camera } from 'lucide-react';

interface Section3Props {
  isActive: boolean;
}

function Section3({ isActive }: Section3Props) {
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
          Talk about anything, anytime, anywhere
        </h1>

        <p
          className={`text-base sm:text-lg text-gray-400 mb-12 leading-relaxed transition-all duration-1000 ${
            isActive
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-10'
          }`}
          style={{ transitionDelay: isActive ? '400ms' : '0ms' }}
        >
          Speak Tutor is your on-the-go conversational partner. Practice
          speaking on any topic, anytime, no matter how niche.
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
          className={`space-y-6 transition-all duration-1000 ${
            isActive
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: isActive ? '700ms' : '0ms' }}
        >
          <div className="text-left mb-6">
            <p className="text-sm font-medium text-gray-600 mb-4">
              Create your own
            </p>

            <div
              className={`flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 mb-3 transition-all duration-700 hover:shadow-md ${
                isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: isActive ? '900ms' : '0ms' }}
            >
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-gray-700" />
              </div>
              <span className="text-base font-medium text-gray-900">Tourist</span>
            </div>

            <div
              className={`flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 mb-3 transition-all duration-700 hover:shadow-md ${
                isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: isActive ? '1000ms' : '0ms' }}
            >
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-gray-700" />
              </div>
              <span className="text-base font-medium text-gray-900">
                New friend
              </span>
            </div>

            <div
              className={`flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 mb-6 transition-all duration-700 hover:shadow-md ${
                isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: isActive ? '1100ms' : '0ms' }}
            >
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                <Camera className="w-5 h-5 text-gray-700" />
              </div>
              <span className="text-sm sm:text-base font-medium text-gray-900">
                Talking about the best places to grab dinner in San Francisco.
              </span>
            </div>
          </div>

          <button
            className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-700 transform hover:scale-105 ${
              isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: isActive ? '1300ms' : '0ms' }}
          >
            Start chatting
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section3;
