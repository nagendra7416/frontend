import { Helmet } from "react-helmet";
import Navbar from "../Navbar";
import Side from "../Side";
import Sidebar from "../Sidebar";
import { useState, useEffect } from "react";
import { NavLink, Outlet, useParams, useLocation, Routes, Route } from "react-router-dom";
import ChannelHome from "./ChannelHome";
import ChannelVideos from './ChannelVideos';
import author from '../../assets/author.png';
import ChannelAbout from "./ChannelAbout";
import LoadingBar from "react-top-loading-bar";

function Channel(){
    const [totalview, setTotalview] = useState(0);
    const [userInfo, setUserInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [videos, setVideos] = useState([]);
    const [featured, setFeatured] = useState([]);
    const [length, setLength] = useState([]);
    const { channelId } = useParams();
    const location = useLocation();
    const isChannelHome = location.pathname === `/channel/${channelId}`;
    const isChannelVideos = location.pathname === `/channel/${channelId}/videos`;
    const isChannelAbout = location.pathname === `/channel/${channelId}/about`;
    

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
            setTotalview(data.total_views);
            setUserInfo(data.user);
        })
        .catch(error => {
            console.error('Error fetching user info:', error);
        });






        fetch('http://localhost:8000/api/featured_video', {
                method: 'GET',
                credentials: 'include',
            })
            .then(response => {
                if(response.status == 200){
                    return response.json();
                } else {
                    throw new Error('failed to fetch featured videos..');
                }
            })
            .then(data => {
                setFeatured(data[0]);
            })
            .catch(error => {
                console.error('Error fetching user info:', error);
            });


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
                setLength(data.videos_count);
                setVideos(data.videos);
            })
            .catch(error => {
                console.error('Error fetching user info:', error);
            });
        }
        videos_data();

        if(location){
            videos_data();
        }

    }, []);


    return (
        <>
            <Helmet>
                <title>{`${userInfo.channeluser} - YouTube`}</title>
            </Helmet>

            <Navbar />
            <div className="main">
                <Side />
                <Sidebar />
                <div className="main-scroll">
                    <div className="channelcon" key={userInfo.channelid}>
                        <div className="banner" style={{backgroundImage: `url(${userInfo.channelbanner})`}}>
                            
                        </div>
                        <div className="channel-outer">
                            <div className="channel-layer">
                                <div className="channel-header">
                                    <div className="left">
                                        <div className="channel-img">
                                            <img src={ userInfo.channelimage ? userInfo.channelimage : author} data-real-src="{{request.user.channeluser.channelimg.url}}" />
                                        </div>
                                        <div className="channel-name" style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                                            <h4>{userInfo.channeluser ? userInfo.channeluser : "loading..."}</h4>
                                            <h6 style={{marginBottom: '10px'}}>@{userInfo.channelslug ? userInfo.channelslug : "loading..."} &nbsp;&bull;&nbsp; <label>{userInfo.subscribers ? userInfo.subscribers : "0"} subscribers</label> &nbsp;&bull;&nbsp;<label>{length} videos</label> </h6>
                                            
                                            <label>{userInfo.description ? userInfo.description : "loading..."}</label>
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
                                { isChannelAbout ? (
                                    <button className="active">
                                        <NavLink to={`${channelId}/about`}>
                                            About
                                        </NavLink>
                                    </button>
                                ):(
                                    <button>
                                        <NavLink to={`${channelId}/about`}>
                                            About
                                        </NavLink>
                                    </button>
                                )}
                            </div>

                            <Routes exact path='/channel' element={<Channel />}>
                                <Route exact path={`:${channelId}`} element={<ChannelHome videos={videos} userInfo={userInfo} featured={featured} />}></Route>
                                <Route exact path={`:${channelId}/videos`} element={<ChannelVideos videos={videos} userInfo={userInfo} />}></Route>
                                <Route exact path={`:${channelId}/about`} element={<ChannelAbout videos={videos} userInfo={userInfo} totalview={totalview} />}></Route>
                            </Routes>
                        </div>
                        
                    </div>
                </div>
            </div>

            
            
        </>
    )
}

export default Channel;