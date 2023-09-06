import { useState, useEffect } from "react";
import thumbnail from '../../assets/placeholder.jpg'
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

function ChannelHome({ videos, loading, delayloading, featured }){
    const [userInfo, setUserInfo] = useState([]);
    const { channelId } = useParams();

    useEffect(() => {
        const apiurl = 'http://localhost:8000/api/get_user_data';

        fetch(apiurl, {
            method: 'GET',
            credentials: 'include',
        })
        .then(response => {
            if (response.status === 200) {
                
                return response.json();
            } else {
                throw new Error('Failed to fetch user info');
            }
        })
        .then(data => {
            document.title = `${data.channeluser} - YouTube`;
            setUserInfo(data);
        })
        .catch(error => {
            console.error('Error fetching user info:', error);
        });


        


    }, []);



    return (
        <>
        <Helmet>
            <title></title>
        </Helmet>
            <div className="channel-inner">
                <div className="featured">
                    <NavLink to='/'>
                        <div className="f-inner">
                            <div onClick={() => {'/'}}>
                                <div className="feature-img">
                                    <video src={featured.video} autoPlay loop muted controls></video>
                                </div>
                            </div>
                            <div className="feature-detail">
                                <div onClick={() => {'/'}}>
                                    <h4>{featured.title}</h4>
                                </div>
                                <div onClick={() => {'/'}}>{featured.channeluser}</div>
                                <span>
                                    <span>{featured.views} views</span> • <span>{featured.published}</span>
                                </span>  
                            </div>
                        </div>
                    </NavLink>
                </div>

                <div className="posts">
                    <p>Videos ({videos.length})</p>
                    <div className="post-inner">

                        { loading ? (
                            <label>Loading...</label>
                        ):(
                            <>
                                {videos.map((video) => (
                                    <>
                                        <div className="post" key={video.id}>
                                            <NavLink to='/'>
                                                <div className="post-img">
                                                    <img src={delayloading ? video.image : thumbnail} data-real-src={video.image} />   
                                                    <label>{video.duration}</label>      
                                                </div>
                                            </NavLink>
                                            <div className="post-detail">
                                                <NavLink>
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
export default ChannelHome;