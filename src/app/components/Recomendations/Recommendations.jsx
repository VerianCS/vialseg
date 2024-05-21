import Recommendationcard from "./Recommendationcard";


export default function() {

    return ( 
        <>
         <h1 className="ReccomnedationIntro text-center font-semibold text-4xl text-slate-800 p-4">Recomendaciones</h1>
            <div className="Recommendations px-16 py-8">
               
                <div className="ReccomendationRows  flex flex-row justify-center px-8 align-middle">
                    <Recommendationcard></Recommendationcard>
                    <Recommendationcard></Recommendationcard>
                    <Recommendationcard></Recommendationcard>
                </div>
                <div className="ReccomendationRows  flex flex-row justify-center py-8 px-8 align-middle">
                    <Recommendationcard></Recommendationcard>
                    <Recommendationcard></Recommendationcard>
                    <Recommendationcard></Recommendationcard>
                </div>
              
            </div>
        </>

    )
}