import { Helmet } from 'react-helmet';
import StudioNav from './studioComps/StudioNav';
import StudioSidebar from './studioComps/StudioSidebar';

export default function StudioContent({userInfo}){
    return (
        <>
            <Helmet>
                <title>Channel Content - YouTube</title>
            </Helmet>
            <StudioNav userInfo={userInfo} />
            <div className='main'>
                <StudioSidebar userInfo={userInfo} />
                <div className="studioscroll">
                    <div className="inner">
                        <div className="line">
                            Videos Content
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}