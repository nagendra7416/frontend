import { useState, useEffect } from "react";
import thumbnail from '../../assets/placeholder.jpg';
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

function ChannelVideos({ videos, userInfo }){
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
                if(response.status == 200){
                    return response.json();
                } else {
                    throw new Error('failed to fetch user videos..');
                }
            })
            .then(data => {
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
            <div className="channel-inner">
                <div className="posts">
                    <p>Videos ({videos.length})</p>
                    <div className="post-inner">
                        { isLoading ? (
                            <label>Loading...</label>
                        ):(
                            <>
                                {videos.map((video) => (
                                    <>
                                        <div className="post" key={video.id}>
                                            <NavLink to='/'>
                                                <div className="post-img">
                                                    <img src={delayedLoading ? video.image : thumbnail} data-real-src={video.image} />   
                                                    <label>{video.duration}</label>      
                                                </div>
                                            </NavLink>
                                            <div className="post-detail">
                                                <NavLink to='/'>
                                                    <h3>{video.title}</h3>
                                                </NavLink>
                                                <NavLink to='/'>{video.author}</NavLink>
                                                <span>
                                                    <span>{video.views} views</span> • <span>{video.published}</span>
                                                </span>
                                            </div>   
                                        </div> 
                                    </>
                                ))}
                                <div className="post"></div>  
                                <div className="post"></div>  
                                <div className="post"></div>  
                                <div className="post"></div>  
                                <div className="post"></div>  
                                <div className="post"></div> 
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
export default ChannelVideos;