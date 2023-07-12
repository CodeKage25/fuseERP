import './App.css'
import RightNav from './Nav/RightNav';
import BottomNav from './Nav/BottomNav';
import MainBody from './Main/MainBody';

function App() {

  return (
    <div className="grid grid-cols-8 grid-rows-8 h-screen">
      <RightNav />
      <BottomNav />
      <MainBody />
    </div>
  )
}

export default App
