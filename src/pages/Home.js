import { NavLink } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import Navbar from "../components/Navbar";
import Side from "../components/Side";
import thumbnail from '../assets/placeholder.jpg';
import author from '../assets/author.png';
import {Helmet} from "react-helmet";
import axios from 'axios';
import Sidebar from "../components/Sidebar";
import LoadingBar from 'react-top-loading-bar';
import NoInternetPage from "./NoInternetPage";

function Home(){

    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [delayedLoading, setDelayedLoading] = useState(false);
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const containerRef = useRef(null);

    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN'; // Replace with your CSRF token header name
    axios.defaults.xsrfCookieName = 'csrftoken'; 





    
    useEffect(() => {

        const fetchData = () => {
            const apiurl = 'http://localhost:8000/api';

            axios.get(apiurl)
            .then(response => {
                setVideos(response.data);
                
                setTimeout(() => {
                    setIsLoading(false);
                }, 0);
                setTimeout(() => {
                    setDelayedLoading(true);
                }, 1000);
                
                
                
            })
            .catch(error => {
                console.log('error fetching videos', error);
                setIsLoading(false);
            })
        }
        fetchData();
        




        const options = {
            root: null, // Use the viewport as the root
            rootMargin: '0px', // No margin
            threshold: 0.5, // Trigger when 50% of the container is visible
          };



        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    target.src = target.getAttribute('data-real-src'); // Replace src with data-real-src
                    observer.unobserve(containerRef.current);
                }
            });
        }, options);

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        const handleOnlineStatusChange = () => {
            setIsOnline(navigator.onLine);
            fetchData();
        };

        window.addEventListener('online', handleOnlineStatusChange);
        window.addEventListener('offline', handleOnlineStatusChange);
      
          // Cleanup the Intersection Observer
        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }

            window.removeEventListener('online', handleOnlineStatusChange);
            window.removeEventListener('offline', handleOnlineStatusChange);
        };

    }, []);

    return (
        
        <>
            <Helmet>
                <title>(1) YouTube</title>
            </Helmet>
            
            <LoadingBar
                color="#ff0000" // Customize the color (e.g., red)
                height={1.5}       // Customize the height (4 pixels)
                progress={isLoading ? 30 : 100} // Set progress based on loading state
            />
            <Navbar />
            <div className="main">
                <Side />
                <Sidebar />
                <div className="main-scroll" ref={containerRef}>
                    <div className="inner">
                        { isOnline ? (
                            <>
                            
                        {isLoading ? (
                            <>
                                <label>Loading...</label>
                                {/* <div className="video">
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
                                </div> */}

                            
                            </>
                        ):(
                            <>
                                {videos.map(video => (
                                    <NavLink to={`/watch/${video.id}`} key={video.id}>
                                        <div className="video" key={video.id}>
                                            <div className="video-img">
                                                <label>{video.duration}</label>
                                                
                                                <img alt="s" src={delayedLoading ? video.image : thumbnail} data-real-src={video.image} />
                                                
                                            </div>
                                            <div className="video-detail">
                                                <div className="video-left">
                                                    <div className="video-author-img">
                                                        
                                                        
                                                            <img alt="s" src={delayedLoading ? video.channelimg : author} data-real-src={video.channelimg} />
                                                        
                                                    </div>
                                                </div>
                                                <div className="video-right">
                                                    <h4>
                                                        
                                                            {video.title}
                                                        
                                                    </h4>
                                                    <label>
                                                        
                                                            {video.author}
                                                        
                                                    </label>
                                                    <div>
                                                        <span>{video.views} views &nbsp;</span>
                                                        <span>&bull; {video.published}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
                                ))}
                            </>
                        )}
                        </>
                        ):(
                            <NoInternetPage />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;