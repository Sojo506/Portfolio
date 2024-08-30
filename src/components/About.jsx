import { Github, Instagram, Linkedin, Mail, PaintRoller } from 'lucide-react';

export default function About({ isDarkMode }) {
  return (
    <section
      id='about'
      className={`py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}
    >
      <div className='container mx-auto px-4'>
        <h2
          className={`text-3xl font-bold mb-8 ${
            isDarkMode ? 'text-green-400' : 'text-green-600'
          }`}
        >
          About_Me.exe
        </h2>
        <div className='grid md:grid-cols-2 gap-8 items-center'>
          <div
            className={`${
              isDarkMode ? 'bg-gray-900' : 'bg-white'
            } p-6 rounded-lg border-2 ${
              isDarkMode ? 'border-green-400' : 'border-green-600'
            } shadow-lg ${
              isDarkMode ? 'shadow-green-400/20' : 'shadow-green-600/20'
            }`}
          >
            <p
              className={`mb-4 ${
                isDarkMode ? 'text-green-400' : 'text-green-600'
              }`}
            >
              &gt; Initializing SojoDev profile...
            </p>
            <p className='mb-4'>
              &gt; Name: Fabián Sojo Mejías
              <br />
              &gt; Occupation: Freelance
              <br />
              &gt; Experience: +1 year
              <br />
              &gt; Specialization: Web Applications - Backend
            </p>
            <p className='mb-4'>
              &gt; Skills loaded: Java, JavaScript, Node.js, React.js...
              <br />
              &gt; Passion: Building robust, scalable server-side solutions.
              <br />
              &gt; Mission: Learn everyday.
            </p>
            <p
              className={`animate-pulse ${
                isDarkMode ? 'text-green-400' : 'text-green-600'
              }`}
            >
              &gt; Status: Ready to code your next idea_
            </p>
            <div className='flex justify-start space-x-4 mt-4'>
              <a
                href='https://github.com/Sojo506'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Github
                  className={`h-6 w-6 ${
                    isDarkMode
                      ? 'text-green-400 hover:text-white'
                      : 'text-green-600 hover:text-gray-900'
                  } transition-colors`}
                />
              </a>
              <a
                href='https://www.frontendmentor.io/profile/Sojo506/solutions'
                target='_blank'
                rel='noopener noreferrer'
              >
                <PaintRoller
                  className={`h-6 w-6 ${
                    isDarkMode
                      ? 'text-green-400 hover:text-white'
                      : 'text-green-600 hover:text-gray-900'
                  } transition-colors`}
                />
              </a>
              <a
                href='https://www.linkedin.com/in/fsojodev/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Linkedin
                  className={`h-6 w-6 ${
                    isDarkMode
                      ? 'text-green-400 hover:text-white'
                      : 'text-green-600 hover:text-gray-900'
                  } transition-colors`}
                />
              </a>
              <a
                href='https://www.instagram.com/theboy_sojo/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Instagram
                  className={`h-6 w-6 ${
                    isDarkMode
                      ? 'text-green-400 hover:text-white'
                      : 'text-green-600 hover:text-gray-900'
                  } transition-colors`}
                />
              </a>
              <a
                href='mailto:fsojodev@gmail.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Mail
                  className={`h-6 w-6 ${
                    isDarkMode
                      ? 'text-green-400 hover:text-white'
                      : 'text-green-600 hover:text-gray-900'
                  } transition-colors`}
                />
              </a>
            </div>
          </div>
          <div className='flex justify-center'>
            <img
              src='/morty.jpg'
              alt='John Doe'
              width={300}
              height={300}
              className='rounded-full border-4 border-green-400'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
