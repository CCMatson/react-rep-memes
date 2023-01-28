
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Memes from './pages/Memes/Memes';
import MemeDetails from './pages/MemeDetails/MemeDetails';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <main>
      <Routes>
        <Route path="/" element={<Memes/>}/>
        <Route path="/meme" element={<MemeDetails />}/>
      </Routes>
      </main>
    </div>
  );
}

export default App;
