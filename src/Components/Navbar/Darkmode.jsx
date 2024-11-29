import React, { useEffect, useState } from 'react'
import LightButton from "../Image/website/light-mode-button.png"
import Darkbutton from "../Image/website/dark-mode-button.png"
const Darkmode = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    const element = document.documentElement;
    useEffect(() => {
        if (theme == "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme","dark");

        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light")
        }

    })
    return <>
        <div className='relative'>
            <img src={LightButton} alt="light button" onClick={() => {
                setTheme(theme === "light" ? "dark" : "light");
            }}
                className={`w-12 cursor-pointer drop-shadow-[1px_1px_rgba(0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${theme == "dark" ? "opacity-0" : "opacity-100"}`} />

            <img src={Darkbutton} alt='dark button'

                onClick={() => {
                    setTheme(theme == "light" ? "dark" : "light");
                }}
                className="w-12 cursor-pointer drop-shadow-[1px_1px_rgba(0,0,0.1)] transition-all duration-300"
            />
        </div>
    </>

}





export default Darkmode;