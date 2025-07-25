import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-tr from-white via-blue-100 to-blue-200 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800 text-gray-900 dark:text-white transition-all">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
