import { useState, useEffect } from "react";
import thumbnail from '../../assets/thumbnail.webp'
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ChannelHome(){
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
                                    <video src="" autoPlay="" loop="" muted="" controls=""></video>
                                </div>
                            </div>
                            <div className="feature-detail">
                                <div onClick={() => {'/'}}>
                                    <h4>Skanda Trailer (Telugu) | Ram Pothineni, Sree Leela | Boyapati Sreenu | Thaman S | SS Screens</h4>
                                </div>
                                <div onClick={() => {'/'}}>5-Minute Crafts</div>
                                <span>
                                    <span>4 views</span> • <span>7 days ago</span>
                                </span>  
                            </div>
                        </div>
                    </NavLink>
                </div>

                <div className="posts">
                    <p>Videos</p>
                    <div className="post-inner">
                        <div className="post">
                            <NavLink to='/'>
                                <div className="post-img">
                                    <img src={thumbnail} data-real-src="/media/image/hq720_YKdQduV.jpg" />   
                                    <label>00:05</label>      
                                </div>
                            </NavLink>
                            <div className="post-detail">
                                <NavLink>
                                    <h3>Salaar Teaser | Prabhas, Prashanth Neel, Prithviraj, Shruthi Haasan, Hombale Films, Vijay Kiragandur</h3>
                                </NavLink>
                                <NavLink to='/'>5-Minute Crafts</NavLink>
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
export default ChannelHome;