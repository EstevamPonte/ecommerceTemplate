
import React from "react";

interface ButtonProps {
    children: string
    onClick?: () => void
    className?: string
    variant?: "primary" | "secondary"
}

function Buttom({children, onClick, className, variant="primary"}: ButtonProps) {
    const buttonVariant = {
        primary: "bg-yellow-400 text-yellow-800 ring-1 font-semibold ring-yellow-600 rounded-full px-3 py-1 hover:bg-yellow-200 py-3",
        secondary: "bg-white text-yellow-800 ring-1 font-semibold ring-yellow-600 rounded-full px-3 py-1 hover:bg-yellow-200 py-3"
    }
    return (
        <button
            onClick={onClick} 
            className={`
                ${buttonVariant[variant]}
                ${className}
            `}
        >
            {children}
        </button>
    );
}

export default Buttom;