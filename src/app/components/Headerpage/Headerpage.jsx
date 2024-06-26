import Inicio from "./Inicio"
import Recomendaciones from "./Recomendaciones"
import Sobre from "./Sobre"
import Leyes from "./Leyes"
import Githubicon from "./Githubicon"



export default function Headerpage () {
    return (
            <div className="HeaderTop h-24 divide-x-4 flex flex-row backdrop-blur-xl backdrop-saturate-150 border-solid border-b-2
             border-emerald-300 w-screen items-center
              justify-center shadow-md rounded-b-lg">
                <div className="HeaderStuffContainer flex flex-row ">
                    <div className=" px-4"><Inicio></Inicio></div>

                    <div className=" px-4"><Leyes></Leyes></div>

                    <div className=" px-4"><Recomendaciones></Recomendaciones></div>
                    
                    <div className=" px-4"><Sobre></Sobre></div>    

                    <div className=" mx-4"><Githubicon></Githubicon> </div>
                </div>
                
            </div>
    )
}