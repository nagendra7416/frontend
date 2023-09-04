import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Side from "../components/Side";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";


function Subscriptions(){
    const [subVideos, setSubVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const apiurl = 'http://localhost:8000/api/sub_videos';

        fetch(apiurl, {
            method: 'GET',
            credentials: 'include',
        })
        .then(response => {
            if (response.status === 200) {
                
                return response.json();
            } else {
                throw new Error('Failed to fetch user info');
            }
        })
        .then(data => {
            setIsLoading(false);
            document.title = `(${data.length}) Explore - YouTube`;
            setSubVideos(data);
        })
        .catch(error => {
            setIsLoading(false);
            console.error('Error fetching user info:', error);
        });





    }, [subVideos.length])

    return (
        <>
            <Helmet>
                <title>Subscriptions - YouTube</title>
            </Helmet>
            <Navbar />
            <div className="main">
                <Side />
                <Sidebar />
                <div className="main-scroll">
                    <h2 style={{padding: '20px 20px 0px 20px'}}>Subscriptions</h2>
                    <div className="inner">
                        {isLoading ? (
                            <label>Loading...</label>
                        ):(
                            <>
                                    {subVideos.length === 1 ? (
                                        <>
                                            {subVideos.map(video => (
                                                <div className="video" key={video.id}>
                                                    <div className="video-img">
                                                        <img alt="s" src={video.image} />
                                                    </div>
                                                    <div className="video-detail">
                                                        <div className="video-left">
                                                            <div className="video-author-img">
                                                                <NavLink to='/'>
                                                                    <img alt="s" src={video.authorimg} />
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                        <div className="video-right">
                                                            <h4>
                                                                <NavLink to='/'>
                                                                    {video.title}
                                                                </NavLink>
                                                            </h4>
                                                            <label>
                                                                <NavLink to='/'>
                                                                    {video.author}
                                                                </NavLink>
                                                            </label>
                                                            <div>
                                                                <span>{video.views} views </span>
                                                                <span>&bull; {video.published}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            <div className="video"></div>
                                            <div className="video"></div>
                                            <div className="video"></div>
                                            <div className="video"></div>
                                            <div className="video"></div>
                                            <div className="video"></div>
                                            <div className="video"></div>
                                            <div className="video"></div>
                                        </>
                                    ):(
                                        <>
                                            {subVideos.length === 2 ? (
                                                <>
                                                    {subVideos.map(video => (
                                                        <div className="video" key={video.id}>
                                                            <div className="video-img">
                                                                <img alt="s" src={video.image} />
                                                            </div>
                                                            <div className="video-detail">
                                                                <div className="video-left">
                                                                    <div className="video-author-img">
                                                                        <NavLink to='/'>
                                                                            <img alt="s" src={video.authorimg} />
                                                                        </NavLink>
                                                                    </div>
                                                                </div>
                                                                <div className="video-right">
                                                                    <h4>
                                                                        <NavLink to='/'>
                                                                            {video.title}
                                                                        </NavLink>
                                                                    </h4>
                                                                    <label>
                                                                        <NavLink to='/'>
                                                                            {video.author}
                                                                        </NavLink>
                                                                    </label>
                                                                    <div>
                                                                        <span>{video.views} views </span>
                                                                        <span>&bull; {video.published}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                    <div className="video"></div>
                                                    <div className="video"></div>
                                                    <div className="video"></div>
                                                    <div className="video"></div>
                                                    <div className="video"></div>
                                                    <div className="video"></div>
                                                    <div className="video"></div>
                                                </>
                                            ):(
                                                <>
                                                    {subVideos.map(video => (
                                                        <div className="video" key={video.id}>
                                                            <div className="video-img">
                                                                <img alt="s" src={video.image} />
                                                            </div>
                                                            <div className="video-detail">
                                                                <div className="video-left">
                                                                    <div className="video-author-img">
                                                                        <NavLink to='/'>
                                                                            <img alt="s" src={video.authorimg} />
                                                                        </NavLink>
                                                                    </div>
                                                                </div>
                                                                <div className="video-right">
                                                                    <h4>
                                                                        <NavLink to='/'>
                                                                            {video.title}
                                                                        </NavLink>
                                                                    </h4>
                                                                    <label>
                                                                        <NavLink to='/'>
                                                                            {video.author}
                                                                        </NavLink>
                                                                    </label>
                                                                    <div>
                                                                        <span>{video.views} views </span>
                                                                        <span>&bull; {video.published}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </>
                                            )}
                                        </>
                                    )}
                                </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Subscriptions;