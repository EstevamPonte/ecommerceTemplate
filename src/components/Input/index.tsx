
interface InputProps {
    type: string,
    placeholder: string
}
function Input({type, placeholder}: InputProps) {
    return (
        <div className="relative">
            <input
                type={type}
                placeholder={placeholder}
                id={type}
                className="
                    border-b-2 border-slate-400 focus:outline-none h-10
                    placeholder-transparent
                    peer
                "
            />
            <label
                htmlFor={type}
                className="
                    absolute left-0 -top-3.5 text-gray-500 text-sm transition-all
                    peer-placeholder-shown:text-base
                    peer-placeholder-shown:text-gray-400
                    peer-placeholder-shown:top-2
                    peer-focus:-top-3.5
                    peer-focus:text-gray-500
                    peer-focus:text-sm
                "
            >
                {placeholder}
            </label>
        </div>
    );
}

export default Input;