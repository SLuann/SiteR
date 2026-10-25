import Image from "next/image";
import IWLO from "../../imagens/IWLO.png";
import IMLO from "../../imagens/IMLO.png";
import IPLO from "../../imagens/IPLO.png";
import IGLO from "../../imagens/IGLO.png";

export default function(){
    return(
        <div className="flex flex-row justify-self-center gap-7 pt-24">
            <div className="w-[300px]">
                <div className="relative w-[300px] h-[400px]">
                    <Image src={IWLO} alt= "Imagem que simboliza a wiki" className="w-full h-full rounded-2xl"/>
                    <div className="absolute bottom-1">
                        <h3 className="text-2xl font-semibold">Wiki</h3>
                    </div>
                </div>
                <p className="text-gray-400 py-5">Conheça tudo o que existe lá fora — criaturas, itens, personagens e muito mais.</p>
            </div>
            <div className="w-[300px]">
                <div className="relative w-[300px] h-[400px]">
                    <Image src={IMLO} alt="Imagem que simboliza o mapa" className="w-full h-full rounded-2xl"/>
                    <div className="absolute bottom-1">
                        <h3 className="text-2xl font-semibold">Mapa</h3>
                    </div>
                </div>
                <p className="text-gray-400 py-5">Explore cada canto. Encontre caminhos, lugares e aquilo que deveria permanecer escondido.</p>
            </div>
            <div className="w-[300px]">
                <div className="relative w-[300px] h-[400px]">
                    <Image src={IPLO} alt="Imagem que simboliza os posts" className="w-full h-full object-cover rounded-2xl"/>
                    <div className="absolute bottom-1">
                        <h3 className="text-2xl font-semibold">Posts</h3>
                    </div>
                </div>
                <p className="text-gray-400 py-5">Descubra os segredos por trás do mundo e desvende a história de quem sobreviveu.</p>
            </div>
            <div className="w-[300px]">
                <div className="relative w-[300px] h-[400px]">
                    <Image src={IGLO} alt="Imagem que simboliza o guia" className="w-full h-full object-cover rounded-2xl"/>
                    <div  className="absolute bottom-1">
                        <h3 className="text-2xl font-semibold">Guia</h3>
                    </div>
                </div>
                <p className="text-gray-400 py-5">Não sabe o que fazer? Encontre o caminho certo para sobreviver ao que está lá fora.</p>
            </div>
        </div>
    )
}