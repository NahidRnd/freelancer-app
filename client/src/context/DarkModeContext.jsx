import { createContext, useContext, useState } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";

const DarkModeContext = createContext();

export function DarkModeProvider({children}){
    const [isDarkMode, setIsDarkMode] = useLocalStorageState("isDarkMode", 
        window.matchMedia("(prefers-color-scheme: dark)").matches //checks user OS theme: dark-mode->true , light-mode->false
    );
    
    return <DarkModeContext.Provider value={{isDarkMode, setIsDarkMode}}>{children}</DarkModeContext.Provider>
}

export function  useDarkMode(){
    const context = useContext(DarkModeContext);

    if(context === undefined) throw new Error("دارک مود خارج از کانتکست استفاده شده")

    return context;
}