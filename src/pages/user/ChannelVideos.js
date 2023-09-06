import { useState, useEffect } from "react";
import thumbnail from '../../assets/thumbnail.webp'
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

function ChannelVideos(){
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
                {/* <div className="featured">
                    <a href="/watch/FATYbczVeu">
                        <div className="f-inner">
                            <a href="/watch/FATYbczVeu">
                                <div className="feature-img">
                                    <video src="" autoplay="" loop="" muted="" controls=""></video>
                                </div>
                            </a>
                            <div className="feature-detail">
                                <a href="/watch/FATYbczVeu">
                                    <h4>Skanda Trailer (Telugu) | Ram Pothineni, Sree Leela | Boyapati Sreenu | Thaman S | SS Screens</h4>
                                </a>
                                <a href="/channel/UCYmFPOU2rk3iKRAJ">5-Minute Crafts</a>
                                <span>
                                    <span>4 views</span> • <span>7 days ago</span>
                                </span>  
                            </div>
                        </div>
                    </a>
                </div> */}

                <div className="posts">
                    <p>Videos</p>
                    <div className="post-inner">
                        <div className="post">
                            <a href="/watch/GeTMP2BYad">
                                <div className="post-img">
                                    <img src={thumbnail} data-real-src="/media/image/hq720_YKdQduV.jpg" />   
                                    <label>00:05</label>      
                                </div>
                            </a>
                            <div className="post-detail">
                                <a href="/watch/GeTMP2BYad">
                                    <h3>Salaar Teaser | Prabhas, Prashanth Neel, Prithviraj, Shruthi Haasan, Hombale Films, Vijay Kiragandur</h3>
                                </a>
                                <a href="#">5-Minute Crafts</a>
                                <span>
                                    <span>4 views</span> • <span>6 days ago</span>
                                </span>
                            </div>   
                        </div>
                        <div className="post">
                            <a href="/watch/GeTMP2BYad">
                                <div className="post-img">
                                    <img src={thumbnail} data-real-src="/media/image/hq720_YKdQduV.jpg" />   
                                    <label>00:05</label>      
                                </div>
                            </a>
                            <div className="post-detail">
                                <a href="/watch/GeTMP2BYad">
                                    <h3>Salaar Teaser | Prabhas, Prashanth Neel, Prithviraj, Shruthi Haasan, Hombale Films, Vijay Kiragandur</h3>
                                </a>
                                <a href="#">5-Minute Crafts</a>
                                <span>
                                    <span>4 views</span> • <span>6 days ago</span>
                                </span>
                            </div>   
                        </div> 
                        <div className="post">
                            <a href="/watch/GeTMP2BYad">
                                <div className="post-img">
                                    <img src={thumbnail} data-real-src="/media/image/hq720_YKdQduV.jpg" />   
                                    <label>00:05</label>      
                                </div>
                            </a>
                            <div className="post-detail">
                                <a href="/watch/GeTMP2BYad">
                                    <h3>Salaar Teaser | Prabhas, Prashanth Neel, Prithviraj, Shruthi Haasan, Hombale Films, Vijay Kiragandur</h3>
                                </a>
                                <a href="#">5-Minute Crafts</a>
                                <span>
                                    <span>4 views</span> • <span>6 days ago</span>
                                </span>
                            </div>   
                        </div> 
                        <div className="post">
                            <a href="/watch/GeTMP2BYad">
                                <div className="post-img">
                                    <img src={thumbnail} data-real-src="/media/image/hq720_YKdQduV.jpg" />   
                                    <label>00:05</label>      
                                </div>
                            </a>
                            <div className="post-detail">
                                <a href="/watch/GeTMP2BYad">
                                    <h3>Salaar Teaser | Prabhas, Prashanth Neel, Prithviraj, Shruthi Haasan, Hombale Films, Vijay Kiragandur</h3>
                                </a>
                                <a href="#">5-Minute Crafts</a>
                                <span>
                                    <span>4 views</span> • <span>6 days ago</span>
                                </span>
                            </div>   
                        </div> 
                        <div className="post">
                            <a href="/watch/GeTMP2BYad">
                                <div className="post-img">
                                    <img src={thumbnail} data-real-src="/media/image/hq720_YKdQduV.jpg" />   
                                    <label>00:05</label>      
                                </div>
                            </a>
                            <div className="post-detail">
                                <a href="/watch/GeTMP2BYad">
                                    <h3>Salaar Teaser | Prabhas, Prashanth Neel, Prithviraj, Shruthi Haasan, Hombale Films, Vijay Kiragandur</h3>
                                </a>
                                <a href="#">5-Minute Crafts</a>
                                <span>
                                    <span>4 views</span> • <span>6 days ago</span>
                                </span>
                            </div>   
                        </div> 
                        <div className="post">
                            <a href="/watch/GeTMP2BYad">
                                <div className="post-img">
                                    <img src={thumbnail} data-real-src="/media/image/hq720_YKdQduV.jpg" />   
                                    <label>00:05</label>      
                                </div>
                            </a>
                            <div className="post-detail">
                                <a href="/watch/GeTMP2BYad">
                                    <h3>Salaar Teaser | Prabhas, Prashanth Neel, Prithviraj, Shruthi Haasan, Hombale Films, Vijay Kiragandur</h3>
                                </a>
                                <a href="#">5-Minute Crafts</a>
                                <span>
                                    <span>4 views</span> • <span>6 days ago</span>
                                </span>
                            </div>   
                        </div>   

                        <div className="post"></div>  
                        <div className="post"></div>  
                        <div className="post"></div>  
                        <div className="post"></div>  
                        <div className="post"></div>  
                        <div className="post"></div>  
                    </div>
                </div>
            </div>
        </>
    )
}
export default ChannelVideos;