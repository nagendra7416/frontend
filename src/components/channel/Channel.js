import { Helmet } from "react-helmet";
import Navbar from "../Navbar";
import Side from "../Side";
import Sidebar from "../Sidebar";
import { useState, useEffect } from "react";
import { NavLink, Outlet, Route, useParams, useLocation } from "react-router-dom";

function Channel(){
    const [userInfo, setUserInfo] = useState([]);
    const { channelId } = useParams();
    const location = useLocation();
    const isChannelHome = location.pathname === `/channel/${channelId}`;
    const isChannelVideos = location.pathname === `/channel/${channelId}/videos`;
    

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
            setUserInfo(data);
        })
        .catch(error => {
            console.error('Error fetching user info:', error);
        });


    }, []);


    return (
        <>
            
            <Navbar />
            <div className="main">
                <Side />
                <Sidebar />
                <div className="main-scroll">
                    <div className="channelcon">
                        <div className="banner" style={{backgroundImage: `url(${userInfo.channelbanner})`}}>
                            
                        </div>
                        <div className="channel-outer">
                            <div className="channel-layer">
                                <div className="channel-header">
                                    <div className="left">
                                        <div className="channel-img">
                                            <img src={userInfo.channelimage} data-real-src="{{request.user.channeluser.channelimg.url}}" />
                                        </div>
                                        <div className="channel-name" style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                                            <h4>{userInfo.channeluser}</h4>
                                            <h6 style={{marginBottom: '10px'}}>@{userInfo.channelslug} &nbsp;&bull;&nbsp; <label>{userInfo.subscribers} subscribers</label> &nbsp;&bull;&nbsp;<label>20 videos</label> </h6>
                                            
                                            <label>{userInfo.description}</label>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <form action="#" id="manage">
                                            <button>MANAGE VIDEOS</button>
                                        </form>
                                            {/* <form action="#">
                                                <button>Subscribe</button>
                                            </form> */}
                                    </div>
                                </div>
                                
                            </div>
                            <div className="buttons">
                                { isChannelHome ? (
                                    <button className="active">
                                        <NavLink to={`${channelId}`}>
                                            HOME
                                        </NavLink>
                                    </button>
                                ):(
                                    <button>
                                        <NavLink to={`${channelId}`}>
                                            HOME
                                        </NavLink>
                                    </button>
                                )}
                                { isChannelVideos ? (
                                    <button className="active">
                                        <NavLink to={`${channelId}/videos`}>
                                            Videos
                                        </NavLink>
                                    </button>
                                ):(
                                    <button>
                                        <NavLink to={`${channelId}/videos`}>
                                            Videos
                                        </NavLink>
                                    </button>
                                )}
                                
                                <button>
                                    <NavLink to='/'>
                                        playlists
                                    </NavLink>
                                </button>
                                <button>
                                    <NavLink to='/'>
                                        community
                                    </NavLink>
                                </button>
                                <button>
                                    <NavLink to='/'>
                                        about
                                    </NavLink>
                                </button>
                            </div>

                            <Outlet />
                            
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Channel;