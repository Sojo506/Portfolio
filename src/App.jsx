import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'technologies', 'contact'];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <Header
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        activeSection={activeSection}
        scrollTo={scrollTo}
      />
      <Hero isDarkMode={isDarkMode} scrollTo={scrollTo} />
      <section
        id='contact'
        className={`container mx-auto py-16 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}
      >
        <h2 className='text-3xl font-bold mb-4'>Contact</h2>
        {/* <ContactForm isDarkMode={isDarkMode} /> */}
      </section>
      {/* <Footer isDarkMode={isDarkMode} /> */}
    </>
  );
}
export default App;
