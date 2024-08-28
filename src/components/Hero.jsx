import { Button } from "@/components/ui/button"

export default function Hero({ isDarkMode, scrollTo }) {
  return (
    <section id="home" className={`relative h-screen flex items-center justify-center ${isDarkMode ? 'bg-purple-800' : 'bg-purple-200'}`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-green-400 opacity-10' : 'bg-green-600 opacity-5'} animate-pulse`}></div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className={`w-64 h-64 ${isDarkMode ? 'bg-purple-700' : 'bg-purple-300'} rounded-full filter blur-3xl animate-blob`}></div>
          <div className={`w-64 h-64 ${isDarkMode ? 'bg-green-700' : 'bg-green-300'} rounded-full filter blur-3xl animate-blob animation-delay-2000`}></div>
          <div className="w-64 h-64 bg-gray-400 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>
      <div className="relative z-10 text-center">
        <h2 className={`text-6xl md:text-8xl font-bold mb-4 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>SojoDev_</h2>
        <p className="text-xl md:text-2xl mb-8 max-w-96 px-1 sm:px-0">Building robust, scalable server-side solutions & Crafting Digital Experiences</p>
        <Button onClick={() => scrollTo("contact")} className={`${isDarkMode ? 'bg-green-400 text-purple-900' : 'bg-green-600 text-purple-100'} hover:bg-opacity-80`}>
          Initialize Contact_
        </Button>
      </div>
    </section>
  )
}
