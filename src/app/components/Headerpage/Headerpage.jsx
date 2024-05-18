import Inicio from "./Inicio"
import Recomendaciones from "./Recomendaciones"
import Sobre from "./Sobre"



export default function Headerpage () {
    return (
            <div className="HeaderTop sticky top-0 h-24 flex flex-row backdrop-blur-xl backdrop-saturate-150 border-solid border-b-2 border-emerald-300 w-screen items-center justify-center  shadow-md rounded-b-md">
                <Inicio></Inicio>

                <Recomendaciones></Recomendaciones>

                <Sobre></Sobre>
            </div>
    )
}