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

function ChannelAbout({ userInfo }){
    const [isLoading, setIsLoading] = useState(true);
    // const [delayedLoading, setDelayedLoading] = useState(false);
    
    const { channelId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8000/api/explore`)
        .then(response => response.json())
        .then(res => {
            setIsLoading(false);
        })
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
                            <h4>Videos</h4>
                            <div className="channelvideoscon-inner">
                                <div class="description">
                                    <div class="desc-left">
                                        <div class="descript">
                                            <label>Description</label>
                                            <p>{userInfo.description}</p>
                                        </div>
                                        <div class="descdetails">
                                            <label>Details</label>
                                            <div>
                                                <span>For business enquiries: <a href="#">hew@gmail.com</a></span>
                                                <span>Location: <label>India</label></span>
                                            </div>
                                        </div>
                                        <div class="descdetails">
                                            <label>Links</label>
                                            <div>
                                                <span>Facebook: <label>hew@gmail.com</label></span>
                                                <span>Twitter: <label>India</label></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="desc-right">
                                        <label>Stats</label>
                                        <div class="line"></div>
                                        <span>Joined {userInfo.joined}</span>
                                        <div class="line"></div>
                                        <span>{userInfo.total_views} views</span>
                                        <div class="line"></div>
                                        <button>
                                            <svg enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false"><path d="m13.18 4 .24 1.2.16.8H19v7h-5.18l-.24-1.2-.16-.8H6V4h7.18M14 3H5v18h1v-9h6.6l.4 2h7V5h-5.6L14 3z"></path></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ChannelAbout;