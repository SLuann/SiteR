import Registrar from "../../Registrar";
import HeaderRegistro from "../Registro/HeaderRegistro";
import FooterRegistro from "../Registro/FooterRegistro";

export default function(){
    return (
        <div>
            <HeaderRegistro />
            <main>
                <Registrar />
            </main>
            <FooterRegistro />
        </div>
    );
}