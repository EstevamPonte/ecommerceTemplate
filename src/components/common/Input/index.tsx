
interface InputProps {
    type: string,
    placeholder: string,
    id: string,
    className?: string
}
function Input({type, placeholder, className, id}: InputProps) {
    return (
        <div className="relative">
            <input
                type={type}
                placeholder={placeholder}
                id={id}
                className={`
                    border-b-2 border-yellow-500 focus:outline-none h-10
                    placeholder-transparent
                    peer
                    ${className}
                `}
            />
            <label
                htmlFor={id}
                className="
                    absolute left-0 -top-3.5 text-yellow-800 text-sm transition-all
                    peer-placeholder-shown:text-base
                    peer-placeholder-shown:text-yellow-800
                    peer-placeholder-shown:top-2
                    peer-focus:-top-3.5
                    peer-focus:text-yellow-800
                    peer-focus:text-sm
                "
            >
                {placeholder}
            </label>
        </div>
    );
}

export default Input;