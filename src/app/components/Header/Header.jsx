import Inicio from "./Inicio"



export default function Header () {

    return (
        <>
            <div className="HeaderTop flex flex-row backdrop-blur-xl backdrop-saturate-150
            border-solid border-b-2 
            border-emerald-300 w-screen sticky 
             items-center justify-center
              h-16 shadow-md rounded-b-md">
             <Inicio></Inicio>   
            </div>
        </>
    )
}