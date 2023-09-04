import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import Side from "../components/Side";
import {Helmet} from "react-helmet";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Sidebar from "../components/Sidebar";


function Explore(){

    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const apiurl = 'http://localhost:8000/api/explore';

        axios.get(apiurl)
        .then(response => {
            document.title = `(${response.data.length}) Explore - YouTube`
            setIsLoading(false);
            setVideos(response.data);
        })
        .catch(error => {
            console.log('error fetching videos', error);
            setIsLoading(false);
        })
    }, [videos.length])

    return (
        <>
            <Helmet>
                <title>Explore - YouTube</title>
            </Helmet>
            <Navbar />
            <div className="main">
                <Side />
                <Sidebar />
                <div className="main-scroll">
                    {/* <div className="inner">
                        {isLoading ? (
                            <label>Loading...</label>
                        ):(
                            <>
                                {videos.map(video => (
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
                                                    <span>{video.views} views</span>
                                                    <span>&bull; {video.published}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                        
                    </div> */}

                    <div className="inners" style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <h2 style={{padding: '20px', maxWidth: '1284px', width: '95%'}}>Trending</h2>

                        <div className="explorecon">
                            {isLoading ? (
                                <label>Loading...</label>
                            ):(
                                <>
                                    {videos.map(video => (
                                        <div className="explores" key={video.id}>
                                            <NavLink to='/'>
                                                <div className="explore">
                                                    <div className="leftimg">
                                                        <img alt="s" src={video.image} data-real-src="{{video.image.url}}" />
                                                        <span>
                                                            <p>{video.duration}</p>
                                                        </span>
                                                    </div>
                                                    <div className="rightdetail">
                                                        <h3>{video.title}</h3>
                                                        <div className="author">                                    
                                                            <NavLink to='/'>{video.author}</NavLink>                                    
                                                            <span> &bull; <label style={{margin: '0 5px'}}>{video.views} views</label> &bull; <label style={{margin: '0 5px'}}>{video.published}</label></span>
                                                        </div>
                                                        <p>{video.description}</p>                
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </div>
                                    ))}
                                </>
                            )}
                        </div>
                    </div>

                    
                </div>
            </div>
        </>
    )
}
export default Explore;