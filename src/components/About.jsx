import { Github, Instagram, Linkedin } from 'lucide-react';

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
              &gt; Name: John Doe
              <br />
              &gt; Occupation: Full-Stack Developer
              <br />
              &gt; Experience: 5+ years
              <br />
              &gt; Specialization: Web Applications
            </p>
            <p className='mb-4'>
              &gt; Skills loaded: React.js, Vue.js, Node.js, Python
              <br />
              &gt; Passion: Creating pixel-perfect, user-friendly interfaces
              <br />
              &gt; Mission: Transforming ideas into digital reality
            </p>
            <p
              className={`animate-pulse ${
                isDarkMode ? 'text-green-400' : 'text-green-600'
              }`}
            >
              &gt; Status: Ready to code your next big project_
            </p>
            <div className='flex justify-start space-x-4 mt-4'>
              <a
                href='https://github.com/sojodev'
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
                href='https://aedin.com/in/sojodev'
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
                href='https://instagram.com/sojodev'
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
            </div>
          </div>
          <div className='flex justify-center'>
            <img
              src='/placeholder.svg?height=300&width=300&text=John+Doe'
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
