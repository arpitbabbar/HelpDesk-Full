import './App.css';
import Navbar from './components/Navbar';
import MainBody from './components/MainBody';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainBody className="main" />
    </div>
  );
}

export default App;
