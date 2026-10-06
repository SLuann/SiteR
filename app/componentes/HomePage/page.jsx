import HomeP from "../../HomeP";
import HeaderHome from "./HeaderHome";
import FooterHome from "./FooterHome";

export default function Page() {
    return (
        <div>
            <HeaderHome />

            <main>
                <HomeP />
            </main>

            <FooterHome />
        </div>
    );
}