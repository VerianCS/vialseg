

import Image from "next/image"
import Knowmore from "./Knowmore"
import Securityimage from "./Securityimage"


import image from "./about01.jpg"


export default function Aboutvial() {
    
    return (
     <>
        <div className="AboutContainer ">
           <div className="AboutVial_1 flex flex-row">                
                <div className="AboutVial_02 flex flex-col p-8 w-1/2">
                    <h2 className="AboutHeader01 font-semibold text-2xl text-slate-800">Las normas del tránsito</h2>
                    <p className="About01 text-gray-600">
                        En Cuba, las normas viales son estrictamente 
                        reguladas. 
                    </p> 
                    <br></br>
                    <p className="About01 text-gray-600 ">
                    Estas normas son fundamentales para prevenir accidentes y promover 
                    una convivencia segura en las carreteras cubanas.
                    </p> 
                    <Knowmore></Knowmore>
                    
                </div>
                <Securityimage imageComponent={image}></Securityimage>
           </div>
           <div className="AboutVial_1 flex flex-row py-4 content-center justify-center">     
                 
                <div className="AboutVial_02 flex flex-col p-8 w-1/2 ">
                    
                    <h2 className="AboutHeader01 font-semibold text-3xl text-slate-800 text-center ">Por qué las leyes del tránsito</h2>
                    <p className="About01 text-gray-600 text-center">
                       Texto sobre las leyes del tránsito.
                    </p> 
                    <br></br>
                    <p className="About01 text-gray-600 text-center">
                        La vaina
                    </p> 
                                   
                </div>
                    
           </div>
        </div>
    </>
    ) 

}