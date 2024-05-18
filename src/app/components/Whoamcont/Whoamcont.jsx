
import { global } from "styled-jsx/css"
import Headerpage from "../Headerpage/Headerpage"
import Whoam from "../Whoami/Whoam"





export default function Whoamcont() {

    return (
        <>
        <div className="WhoamCont flex flex-row bg-slate-700
           w-screen items-center justify-center max-h-fit h-96
          bg-cover bg-center background-image: bg-[url('../../public/bg.jpg')]" >
        <Whoam> </Whoam>
        
        </div>
        </>
    )
}
