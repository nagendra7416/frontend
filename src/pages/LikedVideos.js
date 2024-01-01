import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Side from "../components/Side";
import Sidebar from "../components/Sidebar";
import thumbnail from '../assets/placeholder.jpg';
import { useState } from "react";
import { useEffect } from "react";
import LazyImage from "./LazyImage";
import { NavLink } from "react-router-dom";

export default function LikedVideos({ userInfo, subdata }){
    const [likedvideos, setLikedVideos] = useState([]);
    const [views, setViews] = useState(0);
    const [firstliked, setFirstLiked] = useState([]);

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
                setLikedVideos(data.liked);
                setViews(data.lviews);
                setFirstLiked(data.liked[0]);
            })
            .catch(error => {
                console.error('Error fetching user info:', error);
            });
    }, [])
    return (
        <>
            <Helmet>
                <title>Liked Videos - YouTube</title>
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
                                        <NavLink to={`/watch/${firstliked.id}`}>
                                            <LazyImage alt="s" src={thumbnail} data-real-src={firstliked.image} />
                                        </NavLink>
                                    </div>
                                    <div className="watchdetail">
                                        <div className="titles">
                                            <h3>Liked videos</h3>
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
                                                <label>{likedvideos.length} {likedvideos.length < 2 ? "video": "videos"}</label>&bull;&nbsp;
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
                                        {likedvideos.map((video, index) => (
                                            <div className="latervideo" key={video.id}>
                                                <div className="number">
                                                    {index+1}
                                                </div>
                                                <div className="latervideoimg">
                                                    <NavLink to={`/watch/${video.id}`}>
                                                        <LazyImage src={thumbnail} data-real-src={video.image} alt={index} />
                                                    </NavLink>
                                                </div>
                                                <div className="latervideodetail">
                                                    <h3>
                                                        <NavLink to={`/watch/${video.id}`}>
                                                            {video.title}
                                                        </NavLink>
                                                    </h3>
                                                    <div style={{display: 'flex', alignItems: 'center'}}>
                                                        <label>
                                                            <NavLink to='/'>{video.author}</NavLink>
                                                        </label>&bull;
                                                        <label>{video.views} views</label>&bull;
                                                        <label>{video.published}</label>
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
