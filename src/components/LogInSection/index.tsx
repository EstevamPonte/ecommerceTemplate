import Input from "../Input";

function LogInSection() {
    return (
        <div className="">
            <Input type="text" placeholder="Email"/>
            <Input type="password" placeholder="Senha"/>
        </div>
    );
}

export default LogInSection;