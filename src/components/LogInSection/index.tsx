import Input from "../common/Input";
import Buttom from "../common/Button";

interface LogInSectionProps {
    goToRegister: () => void
}

function LogInSection({goToRegister}: LogInSectionProps) {
    return (
        <div className="flex flex-col items-center gap-6">
            <h1 className="text-4xl text-center">Bem vindo</h1>
            <Input className="w-80 bg-transparent" id="loginEmail" type="text" placeholder="Email"/>
            <Input className="w-80 bg-transparent" id="loginPassword " type="password" placeholder="Senha"/>
            <Buttom className="w-80">
                Entrar
            </Buttom>
            <Buttom className="w-80" variant="secondary" onClick={goToRegister}>
                Cadastre-se
            </Buttom>
        </div>
    );
}

export default LogInSection;