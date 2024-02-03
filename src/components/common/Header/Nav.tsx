"use client"
import { useState } from "react"

function Nav() {
    const [navOpen, setNavOpen] = useState(false)   

    function openMenu() {
        setNavOpen((value) => {
            const element = document.getElementsByTagName("html")[0];
            element.classList.value = !value ? "overflow-hidden" : "";
            return !value
        })

    }
    return (
        <nav className="order-0 lg:order-1">
            <button className="sm:block lg:hidden" onClick={openMenu}>
                <i className="bi bi-menu-button-wide"></i>
            </button>
            <div  className={`
                ${navOpen ? "overscroll-contain left-0 top-0 flex w-full" : "top-0 -left-96"}
                z-10 transition-all duration-[0.5s] delay-0 absolute h-full
                lg:p-0 lg:relative lg:left-0 lg:top-0  lg:flex
            `}>
                <ul className={`
                    list-none flex-col h-full w-full flex gap-4 bg-white p-4 pr-44 lg:p-0 *:text-sm
                    lg:flex-row lg:w-fit lg:h-auto
                `}>
                    <li>
                        Bolsa de prais
                    </li>
                    <li>
                        Necessaire
                    </li>
                    <li>
                        Chaveiros
                    </li>
                </ul>

                <button className="flex text-xl p-1 lg:hidden" onClick={openMenu}>
                    <i className="bi bi-arrow-bar-left"></i>
                </button>
            </div>

            <div onClick={openMenu} className={`absolute h-full w-full top-0 left-0 z-0 backdrop-blur-sm ${navOpen ? "block" : "hidden"}`}></div>
        </nav>
    );
}

export default Nav;