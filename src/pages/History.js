import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Side from "../components/Side";
import Sidebar from "../components/Sidebar";

function History(){
    return (
        <>
            <Helmet>
                <title>History - YouTube</title>
            </Helmet>

            <Navbar />
            <div className="main">
                <Side />
                <Sidebar />
                <div className="main-scroll">
                    <div className="inner">
                        <h2>History</h2>
                    </div>
                </div>
            </div>
        </>
    )
}
export default History;