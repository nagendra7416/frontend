import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import Side from "../components/Side";
import thumbnail from '../assets/thumbnail.webp';
import logo from '../assets/logo.jpg';
import {Helmet} from "react-helmet";
import React, { useState, useEffect } from 'react';
import axios from "axios";


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
                <div className="main-scroll">
                    <div className="inner">
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
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default Explore;