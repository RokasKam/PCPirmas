import './App.css';
import Details from './pages/Details';
import Home from './pages/Home';
import List from './pages/List';
import { Routes, Route, } from 'react-router-dom';
import { createContext, useState } from 'react';

export const NameContext = createContext();

function App() {
  const [name, setName] = useState('');
  return (
    <div className="App">
      <NameContext.Provider value={{name, setName}}>
      <Routes>
        <Route index element={<Home />} />
        <Route path='List' element={<List />} />
      </Routes>
      </NameContext.Provider>
    </div>
  );
}

export default App;
