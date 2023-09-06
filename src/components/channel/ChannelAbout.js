import { useState, useEffect } from "react";
import thumbnail from '../../assets/placeholder.jpg';
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

function ChannelAbout({ videos, loading, delayloading, userInfo, totalview }){
    const { channelId } = useParams();

    return (
        <>
        <Helmet>
            <title>{`${userInfo.channeluser} - YouTube`}</title>
        </Helmet>
            <div className="channel-inner">
                <div class="aboutdesc">
                    <div class="left">
                        <div class="descript">
                            <label>Description</label>
                            <p></p>
                                <p>{userInfo.description}</p>
                            <p></p>
                        </div>
                    </div>
                    <div class="right">
                        <div class="stats">
                            <label>Stats</label>
                            <div class="line"></div>
                            <span>Joined {userInfo.joined}</span>
                            <div class="line"></div>
                            <span>{totalview} views</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ChannelAbout;