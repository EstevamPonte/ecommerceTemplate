import LogInSection from "@/components/LogInSection";

function Login() {
    return (
        <div className="container mx-auto px-4">
            <div className="columns-2">
                <div className="">
                    <LogInSection />
                </div>
                <div className="">
                    <img src="https://source.unsplash.com/random"  className="object-cover h-60 w-auto w-full h-full" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Login;