import './App.css';
import Details from './pages/Details';
import Home from './pages/Home';
import List from './pages/List';
import { Routes, Route, } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path='List' element={<List />} />
        <Route path='List/Details' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
