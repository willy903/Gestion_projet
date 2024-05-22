import './App.css';
import Sidebar from './components/sidebar/sidebar';
import Center from './components/center/Center';
import RightBar from './components/rightbar/RightBar';

function App() {
  return (
    <div className="containerParent">
      <Sidebar/>
      <Center/>
      <RightBar/>
    </div>
  );
}

export default App;
