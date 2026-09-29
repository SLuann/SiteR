import Image from "next/image";
import olhoLO from "./imagens/olhoLO.png";
export default function Header() {
    return(
        <div className="bg-gray-800">
        <img src="{olhoLO}" alt="olho Look Outside" />;
        <h1 className="text-white text-6xl font-bold justify-self-center">The Outside Guide (Versão Beta)</h1>
        </div>
    );
}