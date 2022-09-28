//import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './routes/Header/Header.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        

      </Route>
    </Routes>
  );
}

export default App;
