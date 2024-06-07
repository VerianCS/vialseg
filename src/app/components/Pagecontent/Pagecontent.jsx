import Recommendations from "../Recomendations/Recommendations";
import Aboutsecurity from "./AboutSecurity";
import Aboutvial from "./Aboutvial";

export default function PageContent( ) {
    return (
        <>
            <div className="PageContent h-fit bg-white rounded-md w-screen border-solid border-t-4 border-green-500">
                <div className="SegContainer flex flex-row justify-center">
                    <Aboutsecurity ></Aboutsecurity>
                </div>

                <Aboutvial></Aboutvial>
                
                <Recommendations></Recommendations>
            </div>
        </>

    )
}
