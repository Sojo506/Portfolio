import technologies from '@/assets/technologies';

export default function Technologies({ isDarkMode }) {
  return (
    <section
      id='technologies'
      className={`py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}
    >
      <div className='container mx-auto px-4'>
        <h2
          className={`text-3xl font-bold mb-8 ${
            isDarkMode ? 'text-green-400' : 'text-green-600'
          }`}
        >
          Technologies_
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8'>
          {technologies.map((tech) => (
            <div key={tech} className='flex flex-col items-center'>
              <div
                className={`w-16 h-16 ${
                  isDarkMode ? 'bg-gray-900' : 'bg-white'
                } rounded-lg border ${
                  isDarkMode ? 'border-green-400' : 'border-green-600'
                } flex items-center justify-center mb-2`}
              >
                <span
                  className={`text-2xl ${
                    isDarkMode ? 'text-green-400' : 'text-green-600'
                  }`}
                >
                  {tech[0]}
                </span>
              </div>
              <span className='text-sm font-medium'>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
