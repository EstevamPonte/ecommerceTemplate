import Link from "next/link";
import Nav from "./Nav";

function Header() {
    return (
        <header className="flex justify-between p-4 shadow-lg mb-2 bg-white">
            <div className="order-1 lg:order-0">
                <Link href={"/"}>
                    Kami's necessaire
                </Link>
            </div>
            <Nav />
            <div className="relative group invisible lg:visible order-2">
                <i className="bi bi-person-circle cursor-pointer"></i>
                <div className="max-h-0 overflow-hidden group-hover:max-h-[300px] transition-all duration-[0.5s] delay-0 absolute w-48 right-0 z-10">
                    <ul className="list-none flex flex-col bg-white border border-gray-400 rounded-sm">
                        <li className="text-sm p-2 border-b border-gray-200">
                            <Link href={"/login"} className="block">
                                Log in
                            </Link>
                        </li>
                        <li className="text-sm p-2">Cadastro</li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;