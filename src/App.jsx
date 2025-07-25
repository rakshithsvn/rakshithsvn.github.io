import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import "./index.css";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all">
        <div className="max-w-4xl mx-auto p-6">
          <header className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Rakshith Suvarna</h1>
              <h2 className="text-lg">Full Stack Developer</h2>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </header>

          <About />
          <Skills />
          <Projects />
          <Contact />

          <footer className="text-center text-sm text-gray-500 mt-10">
            &copy; {new Date().getFullYear()} Rakshith Suvarna. All rights
            reserved.
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
