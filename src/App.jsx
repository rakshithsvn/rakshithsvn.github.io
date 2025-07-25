// src/App.jsx
import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all">
        <div className="max-w-4xl mx-auto p-6">
          <header className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Rahul Dev</h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </header>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-2">About Me</h2>
            <p>
              Passionate developer with experience building scalable web apps using React, Node.js,
              and Laravel. I love clean code and solving real-world problems.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-2">Skills</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 list-disc pl-5">
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>PHP</li>
              <li>React</li>
              <li>Laravel</li>
              <li>Docker</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Tailwind CSS</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-2">Projects</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold">ProjectHub</h3>
                <p>Full-stack project management tool using React, Node.js, and MongoDB.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold">DevBlog</h3>
                <p>Markdown-powered blog for developers with custom themes.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold">InvoiceX</h3>
                <p>PDF invoice generator with Stripe payment integration.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-2">Contact</h2>
            <p>Email: <a href="mailto:rahul.dev@example.com" className="text-blue-500">rahul.dev@example.com</a></p>
            <p>GitHub: <a href="https://github.com/rahuldev" className="text-blue-500">github.com/rahuldev</a></p>
            <p>LinkedIn: <a href="https://linkedin.com/in/rahuldev" className="text-blue-500">linkedin.com/in/rahuldev</a></p>
            <p><a href="/resume.pdf" className="text-blue-500">Download Resume</a></p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
