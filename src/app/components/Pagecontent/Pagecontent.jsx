import Recommendations from "../Recomendations/Recommendations";
import Aboutsecurity from "./AboutSecurity";

export default function( ) {
    return (
        <>
            <div className="PageContent h-fit bg-white">
                <div className="SegContainer flex flex-row justify-center">
                    <Aboutsecurity></Aboutsecurity>

                </div>
                    
                <Recommendations></Recommendations>
            </div>
        </>

    )
}
