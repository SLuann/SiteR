import FundoLeR from "./imagens/FundoLeR.png";

export default function(){
    return(
        <div className="text-4xl font-medium text-white justify-self-center">
            
                <main className="bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${FundoLeR.src})` }}>
                    <h2>Crie sua conta</h2>
                </main>
        </div>
    )
}