import { useState, useEffect } from "react";
import thumbnail from '../../assets/placeholder.jpg'
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "../Navbar";
import Side from "../Side";
import Sidebar from "../Sidebar";
import LoadingBar from "react-top-loading-bar";
import Channel from "./Channel";
import { NavLink } from "react-router-dom";

function ChannelHome({ userInfo }){
    const [videos, setVideos] = useState([]);
    // const [featured, setFeatured] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [delayedLoading, setDelayedLoading] = useState(false);
    
    const { channelId } = useParams();

    useEffect(() => {
        
        const videos_data = () => {
            fetch('http://localhost:8000/api/user_videos', {
                method: 'GET',
                credentials: 'include',
            })
            .then(response => {
                if(response.status === 200){
                    return response.json();
                } else {
                    throw new Error('failed to fetch user videos..');
                }
            })
            .then(data => {
                setVideos(data.videos);
                setIsLoading(false);
                setTimeout(() => {
                    setDelayedLoading(true);
                }, 1000);
            })
            .catch(error => {
                console.error('Error fetching user info:', error);
            });
        }
        videos_data();



        fetch('http://localhost:8000/api/featured_video', {
                method: 'GET',
                credentials: 'include',
        })
        .then(response => {
            if(response.status === 200){
                return response.json();
            } else {
                throw new Error('failed to fetch featured videos..');
            }
        })
        .then(data => {
            // setFeatured(data[0]);
        })
        .catch(error => {
            console.error('Error fetching user info:', error);
        });


    }, []);


    return (
        <>
            <Helmet>
                <title>{`${userInfo.channeluser} - YouTube`}</title>
            </Helmet>

            <LoadingBar
                color="#ff0000" // Customize the color (e.g., red)
                height={1.5}       // Customize the height (4 pixels)
                progress={isLoading ? 30 : 100} // Set progress based on loading state
            />

            <Navbar userInfo={userInfo} />
            <div className="main">
                <Side />
                <Sidebar />
                <div className="main-scroll">
                    <div className="channellayer">
                        <Channel channelId={channelId} />
                        <div className="channelvideoscon">
                            <h4>Videos ({userInfo.videoslength})</h4>
                            <div className="channelvideoscon-inner">
                                {videos.length <= 4 ? (
                                    <>
                                        {videos.map((video) => (
                                            <div className="channelvid" key={video.id}>
                                                <div className="channelvid-img">
                                                    <label>{video.duration}</label>
                                                    <NavLink to='/'>
                                                        <img alt='s' src={delayedLoading ? video.image : thumbnail} />
                                                    </NavLink>
                                                </div>
                                                <div className="channelvid-detail">
                                                    <div className="meta">
                                                        <h3>{video.title}</h3>
                                                        <div className="metablock">
                                                            <span>{video.views} views</span>&bull;
                                                            <span>{video.published}</span>
                                                        </div>
                                                    </div>
                                                    <div className="menu">
                                                        <button>
                                                            <svg height="24" viewBox="0 0 24 24" width="24" focusable="false"><path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path></svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="channelvid"></div>
                                        <div className="channelvid"></div>
                                        <div className="channelvid"></div>
                                        <div className="channelvid"></div>
                                        <div className="channelvid"></div>
                                        <div className="channelvid"></div>
                                    </>
                                ):(
                                    <>
                                        {videos.map((video) => (
                                            <div className="channelvid" key={video.id}>
                                                <div className="channelvid-img">
                                                    <label>{video.duration}</label>
                                                    <NavLink to='/'>
                                                        <img alt='s' src={delayedLoading ? video.image : thumbnail} />
                                                    </NavLink>
                                                </div>
                                                <div className="channelvid-detail">
                                                    <div className="meta">
                                                        <h3>{video.title}</h3>
                                                        <div className="metablock">
                                                            <span>{video.views} views</span>&bull;
                                                            <span>{video.published}</span>
                                                        </div>
                                                    </div>
                                                    <div className="menu">
                                                        <button>
                                                            <svg height="24" viewBox="0 0 24 24" width="24" focusable="false"><path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path></svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                )}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ChannelHome;