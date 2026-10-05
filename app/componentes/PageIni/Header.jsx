import Image from "next/image";
import olhoLO from "../../imagens/olhoLO.png";
export default function Header() {
    return(
        <header className="bg-gray-800 flex items-center justify-center gap-10 h-24">
            <Image src={olhoLO} alt="olho Look Outside" width={100} height={100} loading="eager" className="w-[100px] object-contain"/>
            <h1 className="text-white text-6xl font-bold justify-self-center">The Outside Guide (Versão Beta)</h1>
        </header>
    );
}