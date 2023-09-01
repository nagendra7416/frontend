import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Side from "../components/Side";


function Subscriptions(){
    return (
        <>
            <Helmet>
                <title>Subscriptions - YouTube</title>
            </Helmet>
            <Navbar />
            <div className="main">
                <Side />
                <div className="main-scroll">
                    <div className="inner">
                        <h1>Subscriptions</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Subscriptions;