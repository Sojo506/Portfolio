import { useState } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Switch } from "@/components/ui/switch"

export default function Header({ isDarkMode, toggleDarkMode, activeSection, scrollTo }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const sections = ["Home", "About", "Projects", "Technologies", "Contact"]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${isDarkMode ? 'bg-purple-800' : 'bg-purple-200'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className={`text-4xl font-bold ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>SojoDev_</h1>
        <nav className="hidden md:flex space-x-4 items-center">
          {sections.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className={`text-sm font-medium transition-colors hover:text-green-400 ${
                activeSection === item.toLowerCase() ? (isDarkMode ? 'text-green-400' : 'text-green-600') : (isDarkMode ? 'text-gray-300' : 'text-gray-700')
              }`}
            >
              {item}
            </button>
          ))}
          <div className="flex items-center space-x-2">
            <Sun className="h-4 w-4" />
            <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} />
            <Moon className="h-4 w-4" />
          </div>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6 text-green-400" /> : <Menu className="h-6 w-6 text-green-400" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className={`fixed inset-0 z-40 ${isDarkMode ? 'bg-purple-800' : 'bg-purple-200'}`}>
          <nav className="flex flex-col items-center justify-center h-full space-y-4">
            {sections.map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollTo(item.toLowerCase())
                  setIsMenuOpen(false)
                }}
                className={`text-lg font-medium transition-colors hover:text-green-400 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
              >
                {item}
              </button>
            ))}
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} />
              <Moon className="h-4 w-4" />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
