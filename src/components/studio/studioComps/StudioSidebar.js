import { NavLink, useLocation } from "react-router-dom";
import author from '../../../assets/author.png';

export default function StudioSidebar({ userInfo }){
    const location = useLocation();
    const isStudioHomePage = location.pathname === `/studio/${userInfo.channelslug}`;
    const isStudioContentPage = location.pathname === `/studio/${userInfo.channelslug}/videos`;

    return (
        <>
            <div className="studioside">
                <div className="studioinner">
                    <div className="channelimage">
                        <div className="img">
                            <img alt="s" src={userInfo.channelimage ? userInfo.channelimage : author} />
                        </div>
                        <label>Your Channel</label>
                        <span>{userInfo.channeluser ? userInfo.channeluser : "Loading..."}</span>
                    </div>
                    <div className="studiolinks">
                        <ul>
                            {isStudioHomePage ? (
                                <li className="active">
                                    <NavLink to={`/studio/${userInfo.channelslug}`}>
                                        <button>
                                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope tp-yt-iron-icon"><g width="24" height="24" viewBox="0 0 24 24" className="style-scope tp-yt-iron-icon"><path d="M10 16V20H4V16H10ZM11 15H3V21H11V15ZM20 4V8H14V4H20ZM21 3H13V9H21V3ZM3 3V13H11V3H3ZM10 12H4V4H10V12ZM13 11V21H21V11H13ZM20 20H14V12H20V20Z" className="style-scope tp-yt-iron-icon"></path></g></svg>
                                            <label>Dashboard</label>
                                        </button>
                                    </NavLink>
                                </li>
                            ):(
                                <li>
                                    <NavLink to={`/studio/${userInfo.channelslug}`}>
                                        <button>
                                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope tp-yt-iron-icon"><g width="24" height="24" viewBox="0 0 24 24" className="style-scope tp-yt-iron-icon"><path d="M10 16V20H4V16H10ZM11 15H3V21H11V15ZM20 4V8H14V4H20ZM21 3H13V9H21V3ZM3 3V13H11V3H3ZM10 12H4V4H10V12ZM13 11V21H21V11H13ZM20 20H14V12H20V20Z" className="style-scope tp-yt-iron-icon"></path></g></svg>
                                            <label>Dashboard</label>
                                        </button>
                                    </NavLink>
                                </li>
                            )}
                            {isStudioContentPage ? (
                                <li className="active">
                                    <NavLink to={`/studio/${userInfo.channelslug}/videos`}>
                                        <button>
                                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope tp-yt-iron-icon"><g width="24" height="24" viewBox="0 0 24 24" className="style-scope tp-yt-iron-icon"><path d="M10 16V20H4V16H10ZM11 15H3V21H11V15ZM20 4V8H14V4H20ZM21 3H13V9H21V3ZM3 3V13H11V3H3ZM10 12H4V4H10V12ZM13 11V21H21V11H13ZM20 20H14V12H20V20Z" className="style-scope tp-yt-iron-icon"></path></g></svg>
                                            <label>Content</label>
                                        </button>
                                    </NavLink>
                                </li>
                            ):(
                                <li>
                                    <NavLink to={`/studio/${userInfo.channelslug}/videos`}>
                                        <button>
                                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope tp-yt-iron-icon"><g width="24" height="24" viewBox="0 0 24 24" className="style-scope tp-yt-iron-icon"><path d="M10 16V20H4V16H10ZM11 15H3V21H11V15ZM20 4V8H14V4H20ZM21 3H13V9H21V3ZM3 3V13H11V3H3ZM10 12H4V4H10V12ZM13 11V21H21V11H13ZM20 20H14V12H20V20Z" className="style-scope tp-yt-iron-icon"></path></g></svg>
                                            <label>Content</label>
                                        </button>
                                    </NavLink>
                                </li>
                            )}
                            
                            <li>
                                <NavLink to='/'>
                                    <button>
                                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope tp-yt-iron-icon"><g width="24" height="24" viewBox="0 0 24 24" className="style-scope tp-yt-iron-icon"><path d="M10 16V20H4V16H10ZM11 15H3V21H11V15ZM20 4V8H14V4H20ZM21 3H13V9H21V3ZM3 3V13H11V3H3ZM10 12H4V4H10V12ZM13 11V21H21V11H13ZM20 20H14V12H20V20Z" className="style-scope tp-yt-iron-icon"></path></g></svg>
                                        <label>Analytics</label>
                                    </button>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/'>
                                    <button>
                                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope tp-yt-iron-icon"><g width="24" height="24" viewBox="0 0 24 24" className="style-scope tp-yt-iron-icon"><path d="M10 16V20H4V16H10ZM11 15H3V21H11V15ZM20 4V8H14V4H20ZM21 3H13V9H21V3ZM3 3V13H11V3H3ZM10 12H4V4H10V12ZM13 11V21H21V11H13ZM20 20H14V12H20V20Z" className="style-scope tp-yt-iron-icon"></path></g></svg>
                                        <label>Comments</label>
                                    </button>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/'>
                                    <button>
                                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope tp-yt-iron-icon"><g width="24" height="24" viewBox="0 0 24 24" className="style-scope tp-yt-iron-icon"><path d="M10 16V20H4V16H10ZM11 15H3V21H11V15ZM20 4V8H14V4H20ZM21 3H13V9H21V3ZM3 3V13H11V3H3ZM10 12H4V4H10V12ZM13 11V21H21V11H13ZM20 20H14V12H20V20Z" className="style-scope tp-yt-iron-icon"></path></g></svg>
                                        <label>Subtitles</label>
                                    </button>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/'>
                                    <button>
                                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope tp-yt-iron-icon"><g width="24" height="24" viewBox="0 0 24 24" className="style-scope tp-yt-iron-icon"><path d="M10 16V20H4V16H10ZM11 15H3V21H11V15ZM20 4V8H14V4H20ZM21 3H13V9H21V3ZM3 3V13H11V3H3ZM10 12H4V4H10V12ZM13 11V21H21V11H13ZM20 20H14V12H20V20Z" className="style-scope tp-yt-iron-icon"></path></g></svg>
                                        <label>Copyright</label>
                                    </button>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/'>
                                    <button>
                                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope tp-yt-iron-icon"><g width="24" height="24" viewBox="0 0 24 24" className="style-scope tp-yt-iron-icon"><path d="M10 16V20H4V16H10ZM11 15H3V21H11V15ZM20 4V8H14V4H20ZM21 3H13V9H21V3ZM3 3V13H11V3H3ZM10 12H4V4H10V12ZM13 11V21H21V11H13ZM20 20H14V12H20V20Z" className="style-scope tp-yt-iron-icon"></path></g></svg>
                                        <label>Earn</label>
                                    </button>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/'>
                                    <button>
                                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope tp-yt-iron-icon"><g width="24" height="24" viewBox="0 0 24 24" className="style-scope tp-yt-iron-icon"><path d="M10 16V20H4V16H10ZM11 15H3V21H11V15ZM20 4V8H14V4H20ZM21 3H13V9H21V3ZM3 3V13H11V3H3ZM10 12H4V4H10V12ZM13 11V21H21V11H13ZM20 20H14V12H20V20Z" className="style-scope tp-yt-iron-icon"></path></g></svg>
                                        <label>Customization</label>
                                    </button>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/'>
                                    <button>
                                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope tp-yt-iron-icon"><g width="24" height="24" viewBox="0 0 24 24" className="style-scope tp-yt-iron-icon"><path d="M10 16V20H4V16H10ZM11 15H3V21H11V15ZM20 4V8H14V4H20ZM21 3H13V9H21V3ZM3 3V13H11V3H3ZM10 12H4V4H10V12ZM13 11V21H21V11H13ZM20 20H14V12H20V20Z" className="style-scope tp-yt-iron-icon"></path></g></svg>
                                        <label>Audio Library</label>
                                    </button>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/'>
                                    <button>
                                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope tp-yt-iron-icon"><g width="24" height="24" viewBox="0 0 24 24" className="style-scope tp-yt-iron-icon"><path d="M10 16V20H4V16H10ZM11 15H3V21H11V15ZM20 4V8H14V4H20ZM21 3H13V9H21V3ZM3 3V13H11V3H3ZM10 12H4V4H10V12ZM13 11V21H21V11H13ZM20 20H14V12H20V20Z" className="style-scope tp-yt-iron-icon"></path></g></svg>
                                        <label>Audio Library</label>
                                    </button>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}