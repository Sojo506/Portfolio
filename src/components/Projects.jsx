import projectsData from '@/assets/projectsData';

export default function Projects({ isDarkMode }) {
  return (
    <section
      id='projects'
      className={`py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}
    >
      <div className='container mx-auto px-4'>
        <h2
          className={`text-3xl font-bold mb-8 ${
            isDarkMode ? 'text-green-400' : 'text-green-600'
          }`}
        >
          Projects_
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projectsData.map((project) => (
            <div
              key={project.name}
              className={`${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              } rounded-lg shadow-md overflow-hidden border ${
                isDarkMode ? 'border-green-400' : 'border-green-600'
              }`}
            >
              <img
                src={project.image}
                alt={project.name}
                width={400}
                height={200}
                className='w-full h-48 object-cover'
              />
              <div className='p-4'>
                <h3
                  className={`font-bold mb-2 w-full ${
                    isDarkMode ? 'text-green-400' : 'text-green-600'
                  } break-words`}
                >
                  Project_{project.name}.exe
                </h3>
                <p className='text-sm mb-4'>{project.description}</p>
                <div className='flex space-x-2'>
                  <a
                    href={project.github}
                    className={`text-sm ${
                      isDarkMode ? 'text-green-400' : 'text-green-600'
                    } hover:underline`}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    GitHub
                  </a>
                  <a
                    href={project.livepreview}
                    className={`text-sm ${
                      isDarkMode ? 'text-green-400' : 'text-green-600'
                    } hover:underline`}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Live Preview
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
