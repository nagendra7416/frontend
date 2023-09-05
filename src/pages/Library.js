import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Side from "../components/Side";
import Sidebar from "../components/Sidebar";

function Library(){
    return (
        <>
            <Helmet>
                <title>Library - YouTube</title>
            </Helmet>

            <Navbar />
            <div className="main">
                <Side />
                <Sidebar />
                <div className="main-scroll">
                    <div className="inner">
                        <h2>Library</h2>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Library;