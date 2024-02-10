"use client"
import Link from "next/link";
import Input from "../common/Input";
import Buttom from "../common/Button";
import InputMask from "../common/Input/InputMask";

interface CreateAccountSectionProps {
    goToLogin: () => void
}

function CreateAccountSection({goToLogin}: CreateAccountSectionProps) {
    return (
        <div className="flex flex-col items-center gap-6">
            <h1 className="text-4xl text-center">Cadastre-se</h1>
            <Input className="w-80 bg-transparent" id="email" type="text" placeholder="Email"/>
            <Input className="w-80 bg-transparent" id="password" type="password" placeholder="Senha"/>
            <Input className="w-80 bg-transparent" id="confirmPassword" type="password" placeholder="Confirmar senha"/>
            <InputMask className="w-80 bg-transparent" id="phone" placeholder="Celular" mask="(00) 00000-0000"/>
            
            <Buttom className="w-80">
                Entrar
            </Buttom>
            <Buttom className="w-80" variant="secondary" onClick={goToLogin}>
                Login
            </Buttom>
        </div>
    );
}

export default CreateAccountSection;