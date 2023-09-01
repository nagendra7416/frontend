import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Side from "../components/Side";


function Library(){
    return (
        <>
            <Helmet>
                <title>Library - YouTube</title>
            </Helmet>
            <Navbar />
            <div className="main">
                <Side />
                <div className="main-scroll">
                    <div className="inner">
                        <h1>Library</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Library;