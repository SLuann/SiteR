import Link from "next/link";

export default function(){
    return(
        
        <div className="flex gap-8 justify-self-center">
            <Link href="/componentes/HomePage" className="flex items-center justify-center bg-red-700 text-white w-[75px] h-[45px] rounded-lg">
                Começar
            </Link>

            <Link href="/componentes/Creditos" className="flex text-red-700 items-center justify-center border-1 w-[75px] h-[45px] rounded-lg">
                Créditos
            </Link>           
        </div>
    )
}