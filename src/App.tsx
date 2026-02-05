import { useState, useEffect } from "react";
import Calendar from "./Calendar";
import { FaMoon, FaSun } from "react-icons/fa";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-6 transition-colors duration-300">
      <div className="w-full max-w-6xl flex justify-end mb-4">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          {darkMode ? (
            <FaSun className="text-xl" />
          ) : (
            <FaMoon className="text-xl" />
          )}
        </button>
      </div>
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
        Calendar
      </h1>
      <Calendar />
    </div>
  );
}

export default App;
