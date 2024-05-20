

import Image from "next/image"









export default function Aboutvial() {
    
    return (

        <>
           <div className="AboutVial_1 flex flex-row">
                <Image src="/about01.jpg" width={500} height={500} alt="A runway image" className="ImageVial rounded-md"></Image>
                <div className="AboutVial_02 flex flex-col">
                    <h1 className="AboutHeader01 bold">Las normas del tránsito</h1>
                    <p className="About01 text-slate-600">En Cuba, las normas viales son estrictamente 
                        reguladas para garantizar la seguridad de todos los ciudadanos.                    
                        Estas normas son fundamentales para prevenir accidentes y promover 
                        una convivencia segura en las carreteras cubanas.
                    </p> 
                </div>
           </div>
           <div className="AboutVial_1 flex flex-row">
                <div className="AboutVial_02 flex flex-col">
                    <h1 className="AboutHeader01 bold">Las normas del tránsito</h1>
                    <p className="About01 text-slate-600">En Cuba, las normas viales son estrictamente 
                        reguladas para garantizar la seguridad de todos los ciudadanos.                    
                        Estas normas son fundamentales para prevenir accidentes y promover 
                        una convivencia segura en las carreteras cubanas.
                    </p> 
                </div>
                <Image src="/about01.jpg" width={500} height={500} alt="A runway image" className="ImageVial rounded-md"></Image>
           </div>
           <div className="AboutVial_1 flex flex-row">
                <Image src="/about01.jpg" width={500} height={500} alt="A runway image" className="ImageVial rounded-md"></Image>
                <div className="AboutVial_02 flex flex-col">
                    <h1 className="AboutHeader01 bold">Las normas del tránsito</h1>
                    <p className="About01 text-slate-600">En Cuba, las normas viales son estrictamente 
                        reguladas para garantizar la seguridad de todos los ciudadanos.                    
                        Estas normas son fundamentales para prevenir accidentes y promover 
                        una convivencia segura en las carreteras cubanas.
                    </p> 
                </div>
           </div>
        </>
    ) 

}