import './App.css'
import SideNav from './Nav/SideNav.tsx'
import RightNav from './Nav/RightNav.tsx';
import TopNav from './Nav/TopNav.tsx';
import BottomNav from './Nav/BottomNav.tsx';
import MainBody from './Main/MainBody.tsx';

function App() {

  return (
    <div className="grid grid-cols-8 grid-rows-8 h-screen">
      <SideNav />
      <TopNav />
      <RightNav />
      <BottomNav />
      <MainBody />
    </div>
  )
}

export default App
