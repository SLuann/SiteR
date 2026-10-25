import Image from "next/image";
import Link from "next/link";
import olhoLO from "../../imagens/olhoLO.png";

export default function Header() {
    return(
        <header className="bg-gray-900 flex justify-between items-center h-24">
            <div className="flex items-center gap-3">
                <Image src={olhoLO} alt="olho Look Outside" width={100} height={100} loading="eager" className="w-[100px] object-contain"/>
                <h1 className="text-white text-4xl font-bold justify-self-center">The Outside Guide (Versão Beta)</h1>
            </div>
            <div className="flex items-center justify-end gap-5 px-2">
                <Link href="/Registro"className="flex text-lg justify-center items-center hover:underline decoration-wavy text-red-600 w-[125px] h-[45px] rounded-lg">
                    Crie sua conta
                </Link>
                <Link href="/Login" className="flex text-white text-lg bg-red-900 justify-center items-center w-[90px] h-[45px] rounded-lg">
                    Faça login
                </Link>
            </div>
        </header>
    );
}