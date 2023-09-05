import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Side from "../components/Side";
import Sidebar from "../components/Sidebar";


function Search(){
    return (
        <>
        <Helmet>
            <title>Search - YouTube</title>
        </Helmet>
            <Navbar />
            <div className="main">
                <Side />
                <Sidebar />
                <div className="main-scroll">
                    <div className="inner">
                        <h2>Search: </h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search;