import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
import About from './pages/About';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
