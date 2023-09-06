import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Side from "../components/Side";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import LoadingBar from 'react-top-loading-bar';
import NoInternetPage from "./NoInternetPage";

function Library(){
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [delayedLoading, setDelayedLoading] = useState(false);
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {

        const fetchData = () => {
            const apiurl = 'http://localhost:8000/api/liked_videos_api';

            fetch(apiurl, {
                method: 'GET',
                credentials: 'include',
            })
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch liked videos');
                }
            })
            .then(data => {
                setIsLoading(false);
                setVideos(data);
            })
            .catch(error => {
                setIsLoading(false);
                console.error('Error fetching user info:', error);
            });
        }
        fetchData();



        const handleOnlineStatusChange = () => {
            setIsOnline(navigator.onLine);
            fetchData();
        };
        window.addEventListener('online', handleOnlineStatusChange);
        window.addEventListener('offline', handleOnlineStatusChange);
        return () => {
            window.removeEventListener('online', handleOnlineStatusChange);
            window.removeEventListener('offline', handleOnlineStatusChange);
        };
        





    }, [])


    return (
        <>
            <Helmet>
                <title>Library - YouTube</title>
            </Helmet>

            <LoadingBar
                color="#ff0000" // Customize the color (e.g., red)
                height={1.5}       // Customize the height (4 pixels)
                progress={isLoading ? 30 : 100} // Set progress based on loading state
            />

            <Navbar />
            <div className="main">
                <Side />
                <Sidebar />
                <div className="main-scroll">
                    {isOnline ? (
                        <>
                            <h2 style={{padding: '20px 20px 0px 20px'}}>Library</h2>
                            <div className="inner">
                                {isLoading ? (
                                    <label>Loading...</label>
                                ):(
                                    <>
                                        
                                    </>
                                )}
                            </div>
                        </>
                    ):(
                        <NoInternetPage />
                    )}
                
                    
                </div>
            </div>
        </>
    )
}
export default Library;