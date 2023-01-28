import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Memes from './pages/Memes/Memes';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <main>
      <Routes>
        <Route path="/memes" element={<Memes/>}/>
      </Routes>
      </main>
    </div>
  );
}

export default App;
