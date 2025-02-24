import { HiOutlineSun } from "react-icons/hi";
import { useDarkMode } from "../context/DarkModeContext";
import { FaRegMoon } from "react-icons/fa";
import { useEffect } from "react";


function DarkModeToggle() {
    const {isDarkMode, setIsDarkMode} = useDarkMode();
    const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

    useEffect(()=>{
        if(isDarkMode){
            document.documentElement.classList.add("dark-mode");
            document.documentElement.classList.remove("light-mode");
        }else{
            document.documentElement.classList.add("light-mode");
            document.documentElement.classList.remove("dark-mode");
        }
    }, [isDarkMode]);

  return (
    <button onClick={toggleDarkMode}>
        {isDarkMode? (
            <HiOutlineSun className="w-5 h-5" />
        ) : (
            <FaRegMoon className="w-5 h-5"/>
        )}
    </button>
  )
}

export default DarkModeToggle
