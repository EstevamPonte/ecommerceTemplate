import CreateAccountSection from "@/components/CreateAccountSection/Index";
import LogInSection from "@/components/LogInSection";
import HandleFormSwitch from "./HandleFormSwitch";

function Login() {
    return (
        <div className="container mx-auto px-4 absolute right-1/2 bottom-1/2 translate-y-1/2 translate-x-1/2 h-3/4">
            <div className="grid grid-cols-12 shadow-xl h-full bg-white">
                <div className="
                    col-span-12 self-center
                    h-full
                    lg:col-span-5
                    overflow-hidden
                ">
                    <HandleFormSwitch />
                </div>
                <div className="
                    hidden
                    lg:col-span-7
                    lg:block
                    overflow-hidden
                ">
                    <img src="https://source.unsplash.com/random" className="object-cover w-full h-full" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Login;