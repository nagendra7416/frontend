import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';


const VideoDetail = () => {
    const [video, setVideo] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { videoId } = useParams();

    useEffect(() => {
        const videoid = videoId;
        const apiurl = `http://localhost:8000/api/get_video/${videoid}`;

        axios.get(apiurl)
        .then(response => {
            setInterval(() => {
                setIsLoading(false);
            }, 1000);
            setVideo(response.data);
             // Set loading to false when data is received
        })
        .catch(error => {
            console.error('Error fetching video details:', error);
            setIsLoading(false); // Set loading to false on error
        });
    }, [videoId]);


    return (
        <>
            <Helmet>
                <title>Video Detail - YouTube</title>
            </Helmet>
            <Navbar />
            <div className="main">
                <div className="main-scroll">
                    <div className="inner">
                        {isLoading ? (
                            <h1>Loading...</h1>
                        ):(
                            <h1>{video.id}: {video.title}</h1>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoDetail;