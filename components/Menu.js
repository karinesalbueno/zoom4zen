import Link from "next/link";
import { useRouter } from "next/router";

export default function Menu() {
    const router = useRouter();

    return (
        <nav className="md:space-x-12 flex flex-col md:flex-row items-start md:space-y-0 space-y-3 pl-6">
            <Link href="/empresa">
                <a
                    className={`hover:text-gray-600 uppercase font-semibold md:text-xl ${router.pathname === "/empresa" ? "border-b-2 border-blue-800" : ""
                        }`}
                >
                    A empresa
                </a>
            </Link>
            <Link href="/telecomunicacoes">
                <a
                    className={`hover:text-gray-600 uppercase font-semibold md:text-xl ${router.pathname === "/telecomunicacoes" ? "border-b-2 border-blue-800" : ""
                        }`}
                >
                    Telecomunicações
                </a>
            </Link>
            <Link href="/tvde">
                <a
                    className={`hover:text-gray-600 uppercase font-semibold md:text-xl ${router.pathname === "/tvde" ? "border-b-2 border-blue-800" : ""
                        }`}
                >
                    TVDE
                </a>
            </Link>
            <Link href="/transporte">
                <a
                    className={`hover:text-gray-600 uppercase font-semibold md:text-xl ${router.pathname === "/transporte" ? "border-b-2 border-blue-800" : ""
                        }`}
                >
                    Transporte
                </a>
            </Link>
        </nav>
    );
}
