import { Sun, Moon } from "lucide-react";

function Header({ darkMode, setDarkMode }) {
  return (
    <header className="flex justify-between items-center mb-12 border-b border-gray-300 dark:border-gray-700 pb-4">
      <div className="space-y-1">
        <h1 className="text-4xl font-extrabold font-serif tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          Rakshith Suvarna
        </h1>
        <h2 className="text-lg leading-relaxed font-semibold">
          Full Stack Developer
        </h2>
      </div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:scale-105 transition-transform"
        title="Toggle Theme"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </header>
  );
}

export default Header;
