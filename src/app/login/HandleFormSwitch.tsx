"use client"
import {useState} from "react"
import CreateAccountSection from "@/components/CreateAccountSection/Index";
import LogInSection from "@/components/LogInSection";


function HandleFormSwitch() {
    const [onRegister, setOnRegister] = useState(false)
    return (
        <div className="relative h-full">
            <div className={`
                absolute right-1/2 bottom-1/2 translate-y-1/2 translate-x-1/2
                h-fit
                transition-all duration-[0.5s] delay-0
                ${onRegister ? 'right-[800px]' : ''}
            `}>
                <LogInSection goToRegister={() => setOnRegister(!onRegister)} />
            </div>
            <div className={`
                absolute right-1/2 bottom-1/2 translate-y-1/2 translate-x-1/2
                transition-all duration-[0.5s] delay-0
                ${onRegister ? '' : 'right-[-800px]'}
            `}>
                <CreateAccountSection goToLogin={() => setOnRegister(!onRegister)}/>
            </div>
        </div>
    );
}

export default HandleFormSwitch;