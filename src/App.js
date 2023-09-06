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
import Channel from './components/channel/Channel';
import ChannelVideos from './components/channel/ChannelVideos';
import ChannelAbout from './components/channel/ChannelAbout';

function App() {
  return (
    <>
    <HiddenSideBar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/watch/:videoId' element={<VideoDetail />}></Route>
        <Route exact path='/feed/explore' element={<Explore />}></Route>
        <Route exact path='/feed/subscriptions' element={<Subscriptions />}></Route>
        <Route exact path='/feed/library' element={<Library />}></Route>
        <Route exact path='/feed/history' element={<History />}></Route>
        <Route exact path='/search' element={<Search />}></Route>
        <Route exact path='/channel' element={<Channel />}>
            <Route exact path=':channelId' element={<ChannelHome />}></Route>
            <Route exact path=':channelId/videos' element={<ChannelVideos />}></Route>
            <Route exact path=':channelId/about' element={<ChannelAbout />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
