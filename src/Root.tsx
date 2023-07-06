import SideNav from './Nav/SideNav';
import TopNav from './Nav/TopNav';
import {Outlet} from 'react-router-dom'
const Root = () => {
    return (
        <div className="grid grid-cols-8 grid-rows-8 h-screen">
            <TopNav />
            <SideNav />
            <div className="col-span-6 row-start-2 row-end-9">
            {/* <Outlet/> */}
            </div>
        </div>
    )
};

export default Root