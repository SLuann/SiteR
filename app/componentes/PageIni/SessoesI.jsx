import Image from "next/image";
import IWLO from "../../imagens/IWLO.png";
import IMLO from "../../imagens/IMLO.png";
import IPLO from "../../imagens/IPLO.png";
import IGLO from "../../imagens/IGLO.png";

export default function(){
    return(
        <div className="flex flex-row justify-self-center gap-5 py-25">
            <div>
                <Image src={IWLO} alt= "Imagem que simboliza a wiki" className="w-[250px] h-[400px]"/>
            </div>
            <div>
                <Image src={IMLO} alt="Imagem que simboliza o mapa" className="w-[250px] h-[400px]"/>
            </div>
            <div>
                <Image src={IPLO} alt="Imagem que simboliza os posts" className="w-[250px] h-[400px]"/>
            </div>
            <div>
                <Image src={IGLO} alt="Imagem que simboliza o guia" className="w-[250px] h-[400px]"/>
            </div>
        </div>
    )
}