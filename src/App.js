import './App.css';
import './assets/script.js';
import Home from './pages/Home';
import Explore from './pages/Explore';
import {Routes, Route} from 'react-router-dom';
import Subscriptions from './pages/Subscriptions';
import Library from './pages/Library';
import VideoDetail from './pages/VideoDetail';
import HiddenSideBar from './components/HiddenSideBar';
import Search from './pages/Search';
import History from './pages/History';
import ChannelHome from './components/channel/ChannelHome';
import ChannelVideos from './components/channel/ChannelVideos';
import ChannelAbout from './components/channel/ChannelAbout';
import { useEffect, useState } from 'react';
import AuthorChannelHome from './components/authorchannel/AuthorChannelHome';
import AuthorChannelVideos from './components/authorchannel/AuthorChannelVideos';
import AuthorChannelAbout from './components/authorchannel/AuthorChannelAbout';

function App() {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
        fetch(`http://localhost:8000/api/get_user_data`, {
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
            setUserInfo(data.user);
        })
        .catch(error => {
            console.error('Error fetching user info:', error);
        });
  }, [])
  return (
    <>
    <HiddenSideBar />
      <Routes>
        <Route exact path='/' element={<Home userInfo={userInfo} />}></Route>
        <Route exact path='/watch/:videoId' element={<VideoDetail userInfo={userInfo} />}></Route>
        <Route exact path='/feed/explore' element={<Explore userInfo={userInfo} />}></Route>
        <Route exact path='/feed/subscriptions' element={<Subscriptions userInfo={userInfo} />}></Route>
        <Route exact path='/feed/library' element={<Library userInfo={userInfo} />}></Route>
        <Route exact path='/feed/history' element={<History userInfo={userInfo} />}></Route>
        <Route exact path='/search' element={<Search userInfo={userInfo} />}></Route>
        
        <Route exact path='/channel/:channelId' element={<ChannelHome userInfo={userInfo} />}></Route>
        <Route exact path='/channel/:channelId/videos' element={<ChannelVideos userInfo={userInfo} />}></Route>
        <Route exact path='/channel/:channelId/about' element={<ChannelAbout userInfo={userInfo} />}></Route>


        <Route path='/:authorslug' element={<AuthorChannelHome userInfo={userInfo} />}></Route>
        <Route path='/:authorslug/videos' element={<AuthorChannelVideos userInfo={userInfo} />}></Route>
        <Route path='/:authorslug/about' element={<AuthorChannelAbout userInfo={userInfo} />}></Route>
      </Routes>
    </>
  );
}

export default App;
