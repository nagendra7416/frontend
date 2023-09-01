import './App.css';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import Subscriptions from './pages/Subscriptions';
import Library from './pages/Library';
import VideoDetail from './pages/VideoDetail';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/watch/:videoId' element={<VideoDetail />}></Route>
        <Route exact path='/feed/explore' element={<Explore />}></Route>
        <Route exact path='/feed/subscriptions' element={<Subscriptions />}></Route>
        <Route exact path='/feed/library' element={<Library />}></Route>
      </Routes>
    </>
  );
}

export default App;
