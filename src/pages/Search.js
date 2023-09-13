import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Side from "../components/Side";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function Search({ userInfo }){
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query');
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {

        function searchData(){
            fetch(`http://localhost:8000/api/search?query=${query}`, {
                method: 'GET',
                credentials: 'include'
            })
            .then((response) => response.json())
            .then((data) => {
                setResults(data);
                setIsLoading(false);
            })
            .catch((error) => console.error('Error searching:', error));
        }
        searchData();
        
    }, [query])
    return (
        <>
            <Helmet>
                <title>{`${query}`} - YouTube</title>
            </Helmet>
            <LoadingBar
                color="#ff0000" // Customize the color (e.g., red)
                height={1.5}       // Customize the height (4 pixels)
                progress={isLoading ? 30 : 100} // Set progress based on loading state
            />
            <Navbar userInfo={userInfo} />
            <div className="main">
                <Side userInfo={userInfo} />
                <Sidebar userInfo={userInfo} />
                <div className="main-scroll">
                    <h2 style={{paddingTop: '20px', paddingLeft: '20px'}}>Search results for: {query}</h2>
                    <div className="inner">
                        <div className="explorecon" style={{paddingLeft: '0', paddingRight: '0'}}>
                            {results.map((video) => (
                                <div className="explores" key={video.id}>
                                    <NavLink to='/'>
                                        <div className="explore">
                                            <div className="leftimg">
                                                <img src={video.image}></img>
                                            </div>
                                            <div className="rightdetail">
                                                <h3>{video.title}</h3>
                                                <div className="author">
                                                    <div onClick={() => navigate('/')} style={{fontSize: '12px', color: '#606060', lineHeight: '18px', fontWeight: '400', maxHeight: '30px', overflow: 'hidden'}}>{video.author}</div>
                                                    <span>&bull;&nbsp; {video.views} views &nbsp;&bull;&nbsp; {video.published}</span>
                                                </div>
                                                <p>This is the description of the video</p>                                            
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            ))}
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search;