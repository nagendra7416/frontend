import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Side from "../components/Side";
import Sidebar from "../components/Sidebar";
import thumbnail from '../assets/placeholder.jpg';
import { useEffect } from "react";
import { useState } from "react";
import LazyImage from "./LazyImage";
import { NavLink } from "react-router-dom";

export default function WatchLaterVideos({ userInfo, subdata }){
    const [watchlater, setWatchLater] = useState([]);
    const [firstwatch, setFirstWatch] = useState([]);
    const [views, setViews] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:8000/api/library_videos_json`, {
                method: 'GET',
                credentials: 'include',
            })
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch liked videos');
                }
            })
            .then(data => {
                setWatchLater(data.watchlater);
                setFirstWatch(data.watchlater[0]);
                setViews(data.wviews);
            })
            .catch(error => {
                console.error('Error fetching user info:', error);
            });
    }, [])
    return (
        <>
            <Helmet>
                <title>Watch Later Videos - YouTube</title>
            </Helmet>
            <Navbar userInfo={userInfo} />
            <div className="main">
                <Side />
                <Sidebar subdata={subdata} />
                <div className="main-scroll">
                    <div className="inner">
                        <div className="watchlater">
                            <div className="watchleft">
                                <div className="watchleftinner">
                                    <div className="watchimg">
                                        <NavLink to={`/watch/${firstwatch.id}`}>
                                            <LazyImage alt="s" src={thumbnail} data-real-src={firstwatch.image} />
                                        </NavLink>
                                    </div>
                                    <div className="watchdetail">
                                        <div className="titles">
                                            <h3>Watch later</h3>
                                        </div>
                                        <div className="authorname">
                                            <h4>
                                                <NavLink to='/'>
                                                    {userInfo.channeluser}
                                                </NavLink>
                                            </h4>
                                        </div>
                                        <div className="videoscount">
                                            <span style={{display: 'flex', alignItems: 'center', color: 'white'}}>
                                                <label>{watchlater.length}&nbsp;{watchlater.length < 2 ? "video":"videos"}</label>&bull;&nbsp;
                                                <label>{views} views</label>&bull;&nbsp;
                                                <label>Updated today</label>
                                            </span>
                                        </div>
                                        <div className="gobtn">
                                            <NavLink to='/'>
                                                Go to playlist
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="watchright">
                                <div className="watchrightinner">
                                    <div className="watchlatervideos">
                                        {watchlater.map((watch, index) => (
                                            <div className="latervideo" key={index}>
                                                <div className="number">
                                                    {index+1}
                                                </div>
                                                <div className="latervideoimg">
                                                    <NavLink to={`/watch/${watch.id}`}>
                                                        <LazyImage src={thumbnail} data-real-src={watch.image} alt={index} />
                                                    </NavLink>
                                                </div>
                                                <div className="latervideodetail">
                                                    <h3>
                                                        <NavLink to={`/watch/${watch.id}`}>
                                                            {watch.title}
                                                        </NavLink>
                                                    </h3>
                                                    <div style={{display: 'flex', alignItems: 'center'}}>
                                                        <label>
                                                            <NavLink to='/'>{watch.author}</NavLink>
                                                        </label>&bull;
                                                        <label>{watch.views} views</label>&bull;&nbsp;
                                                        <label>{watch.published}</label>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
