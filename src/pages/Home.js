import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Side from "../components/Side";
import thumbnail from '../assets/thumbnail.webp';
import logo from '../assets/logo.jpg';
import {Helmet} from "react-helmet";
import axios from 'axios';


function Home(){

    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const apiurl = 'http://localhost:8000/api';

        axios.get(apiurl)
        .then(response => {
            setIsLoading(false);
            setVideos(response.data);
        })
        .catch(error => {
            console.log('error fetching videos', error);
            setIsLoading(false);
        })
    }, [])
    
    return (
        <>
            <Helmet>
                <title>(1) YouTube</title>
            </Helmet>
            <Navbar />
            <div className="main">
                
                <Side />
                <div className="main-scroll">
                    <div className="inner">
                        {isLoading ? (
                            <label>Loading...</label>
                        ):(
                            <>
                            {videos.map(video => (
                                <div className="video" key={video.id}>
                                    <div className="video-img">
                                        <NavLink to={`/watch/${video.id}`}>
                                            <img alt="s" src={video.image} />
                                        </NavLink>
                                    </div>
                                    <div className="video-detail">
                                        <div className="video-left">
                                            <div className="video-author-img">
                                                <NavLink to='/'>
                                                    <img alt="s" src={video.channelimg} />
                                                </NavLink>
                                            </div>
                                        </div>
                                        <div className="video-right">
                                            <h4>
                                                <NavLink to={`/watch/${video.id}`}>
                                                    {video.title}
                                                </NavLink>
                                            </h4>
                                            <label>
                                                <NavLink to='/'>
                                                    {video.author}
                                                </NavLink>
                                            </label>
                                            <div>
                                                <span>{video.views} views &nbsp;</span>
                                                <span>&bull; {video.published}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            </>
                        )}
                        
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;