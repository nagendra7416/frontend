import { NavLink } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import Navbar from "../components/Navbar";
import Side from "../components/Side";
import thumbnail from '../assets/thumbnail.webp';
import {Helmet} from "react-helmet";
import axios from 'axios';
import Sidebar from "../components/Sidebar";
import LoadingBar from 'react-top-loading-bar';
import SkeletonLoader from "../components/SkeletonLoader";
import LazyLoad from "react-lazy-load";
function Home(){

    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [imageLoaded, setImageLoaded] = useState(false);
    const intersectionObserver = useRef(null);

    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN'; // Replace with your CSRF token header name
    axios.defaults.xsrfCookieName = 'csrftoken'; 

    useEffect(() => {
        const apiurl = 'http://localhost:8000/api';

        axios.get(apiurl)
        .then(response => {
            setTimeout(() => {
                setIsLoading(false);
            }, 0);
            
            setVideos(response.data);
        })
        .catch(error => {
            console.log('error fetching videos', error);
            setIsLoading(false);
        })
    }, []);



    intersectionObserver.current = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const target = entry.target;
            target.src = target.getAttribute('data-real-src'); // Replace src with data-real-src
            intersectionObserver.current.unobserve(target);
          }
        });
      });
  
      // Cleanup the Intersection Observer
        return () => {
            if (intersectionObserver.current) {
            intersectionObserver.current.disconnect();
            }
        };


    



    
    return (
        
        <>
            
            <Helmet>
                <title>(1) YouTube</title>
            </Helmet>
            <LoadingBar
                color="#ff0000" // Customize the color (e.g., red)
                height={2}       // Customize the height (4 pixels)
                progress={isLoading ? 30 : 100} // Set progress based on loading state
            />
            <Navbar />
            <div className="main">
                
                <Side />
                <Sidebar />
                <div className="main-scroll">
                    <div className="inner">
                        {isLoading ? (
                            <>
                                <div className="video">
                                    <div className="video-img">
                                        <SkeletonLoader />
                                    </div>
                                </div>
                                <div className="video">
                                    <div className="video-img">
                                        <SkeletonLoader />
                                    </div>
                                </div>
                                <div className="video">
                                    <div className="video-img">
                                        <SkeletonLoader />
                                    </div>
                                </div>
                                <div className="video">
                                    <div className="video-img">
                                        <SkeletonLoader />
                                    </div>
                                </div>
                                <div className="video">
                                    <div className="video-img">
                                        <SkeletonLoader />
                                    </div>
                                </div>
                                <div className="video">
                                    <div className="video-img">
                                        <SkeletonLoader />
                                    </div>
                                </div>
                                <div className="video">
                                    <div className="video-img">
                                        <SkeletonLoader />
                                    </div>
                                </div>
                                <div className="video">
                                    <div className="video-img">
                                        <SkeletonLoader />
                                    </div>
                                </div>
                                <div className="video">
                                    <div className="video-img">
                                        <SkeletonLoader />
                                    </div>
                                </div>
                                <div className="video">
                                    <div className="video-img">
                                        <SkeletonLoader />
                                    </div>
                                </div>
                                <div className="video">
                                    <div className="video-img">
                                        <SkeletonLoader />
                                    </div>
                                </div>
                                <div className="video">
                                    <div className="video-img">
                                        <SkeletonLoader />
                                    </div>
                                </div>
                                <div className="video">
                                    <div className="video-img">
                                        <SkeletonLoader />
                                    </div>
                                </div>
                                <div className="video">
                                    <div className="video-img">
                                        <SkeletonLoader />
                                    </div>
                                </div>
                                <div className="video">
                                    <div className="video-img">
                                        <SkeletonLoader />
                                    </div>
                                </div>
                                <div className="video">
                                    <div className="video-img">
                                        <SkeletonLoader />
                                    </div>
                                </div>

                            
                            </>
                        ):(
                            <>
                            {videos.map(video => (
                                <div className="video" key={video.id}>
                                    <div className="video-img">
                                        <label>{video.duration}</label>
                                        <NavLink to={`/watch/${video.id}`}>
                                            <img alt="s" src={video.image} data-real-src={thumbnail} />
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