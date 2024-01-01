import { useState, useEffect } from "react";
import thumbnail from '../../assets/placeholder.jpg'
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar";
import Side from "../Side";
import Sidebar from "../Sidebar";
import LoadingBar from "react-top-loading-bar";
import Channel from "./Channel";
import author from '../../assets/author.png';

export default function ChannelChannels({ userInfo, subdata }){
    const [videos, setVideos] = useState([]);
    const [requestuserinfo, setRequestUserInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [delayedLoading, setDelayedLoading] = useState(false);
    const [subs, setSubs] = useState([]);
    
    const { channelslug } = useParams();

    const channelslu = channelslug.replace('@', '');


    const onDataReceivedFromChild = (data) => {
        console.log(data);
        setVideos(data.videos);
        setRequestUserInfo(data);
        setSubs(data.subscriber_data);
        setIsLoading(false);
        setTimeout(() => {
            setDelayedLoading(true);
        }, 1000);
    }

    useEffect(() => {

    }, []);


    return (
        <>
            <Helmet>
                {requestuserinfo ? (
                    <title>{`${requestuserinfo.name} - YouTube`}</title>
                ):(
                    <title>YouTube</title>
                )}
                
            </Helmet>

            <LoadingBar
                color="#ff0000" // Customize the color (e.g., red)
                height={1.5}       // Customize the height (4 pixels)
                progress={isLoading ? 30 : 100} // Set progress based on loading state
            />

            <Navbar userInfo={userInfo} />
            <div className="main">
                <Side />
                <Sidebar subdata={subdata} />
                <div className="main-scroll">
                    <div className="channellayer">
                        <Channel channelslug={channelslu} onDataReceived={onDataReceivedFromChild} />
                        <div className="channelvideoscon">
                            <h4>Subscriptions</h4>
                            <div className="channelvideoscon-inner">
                                {subs ? (
                                    <>
                                        {subs.length <= 4 ? (
                                            <>
                                                {subs.map((sub) => (
                                                    <div className="channelvid">
                                                        <div className="channelvidimg">
                                                            <NavLink to='/'>
                                                                <img src={sub.image ? sub.image : author} />
                                                            </NavLink>
                                                        </div>
                                                        <div className="channelviddetail">
                                                            <label>{sub.name}</label>
                                                            <span>{sub.subs} subscribers</span>
                                                            <button className="subscribed">Subscribed</button>
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
                                                {subs.map((sub) => (
                                                    <div className="channelvid">
                                                        <div className="channelvidimg">
                                                            <NavLink to='/'>
                                                                <img src={sub.image ? sub.image : author}  />
                                                            </NavLink>
                                                        </div>
                                                        <div className="channelviddetail">
                                                            <label>{sub.name}</label>
                                                            <span>{sub.subs} subscribers</span>
                                                            <button className="subscribed">Subscribed</button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </>
                                        )}
                                        
                                    </>
                                ):(
                                    <label>No Subscriptions</label>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}