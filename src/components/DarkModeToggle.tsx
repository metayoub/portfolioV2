import { useState, useEffect } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <button
      className="fixed bottom-12 right-12 p-4 rounded-full 
      dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white 
      bg-white bg-opacity-80 text-gray-500 hover:text-gray-950 
      shadow-lg shadow-black/[0.03]"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? (
        <MdOutlineLightMode size={24} />
      ) : (
        <MdOutlineDarkMode size={24} />
      )}
    </button>
  );
};

export default DarkModeToggle;
