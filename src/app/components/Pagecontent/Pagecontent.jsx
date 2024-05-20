import Recommendations from "../Recomendations/Recommendations";
import Aboutsecurity from "./AboutSecurity";
import Aboutvial from "./Aboutvial";

export default function( ) {
    return (
        <>
            <div className="PageContent h-fit bg-white rounded-md">
                <div className="SegContainer flex flex-row justify-center">
                    <Aboutsecurity></Aboutsecurity>
                </div>

                <Aboutvial></Aboutvial>
                
                <Recommendations></Recommendations>
            </div>
        </>

    )
}
