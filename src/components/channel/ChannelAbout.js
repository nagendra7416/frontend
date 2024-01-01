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

function ChannelAbout({ userInfo, subdata }){
    const [isLoading, setIsLoading] = useState(true);   
    const [requestuserinfo, setRequestUserInfo] = useState([]);

    const { channelslug } = useParams();

    const channelslu = channelslug.replace('@', '');

    const onDataReceivedFromChild = (data) => {
        setRequestUserInfo(data);
        setIsLoading(false);
        console.log(data);
    }

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
                            <div className="channelvideoscon-inner">
                                <div className="description">
                                    <div className="desc-left">
                                        <div className="descript">
                                            <label>Description</label>
                                            <p>{requestuserinfo.description}</p>
                                        </div>
                                        <div className="descdetails">
                                            <label>Details</label>
                                            <div>
                                                <span>For business enquiries: <a href="#">hew@gmail.com</a></span>
                                                <span>Location: <label>India</label></span>
                                            </div>
                                        </div>
                                        <div className="descdetails">
                                            <label>Links</label>
                                            <div>
                                                <span>Facebook: <label>hew@gmail.com</label></span>
                                                <span>Twitter: <label>India</label></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="desc-right">
                                        <label>Stats</label>
                                        <div className="line"></div>
                                        <span>Joined {requestuserinfo.joined}</span>
                                        <div className="line"></div>
                                        <span>{requestuserinfo.total_views} views</span>
                                        <div className="line"></div>
                                        <button>
                                            <svg height="24" viewBox="0 0 24 24" width="24" focusable="false"><path d="m13.18 4 .24 1.2.16.8H19v7h-5.18l-.24-1.2-.16-.8H6V4h7.18M14 3H5v18h1v-9h6.6l.4 2h7V5h-5.6L14 3z"></path></svg>
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