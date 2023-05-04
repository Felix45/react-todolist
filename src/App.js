import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
import About from './pages/About';
import NoMatch from './pages/NoMatch';
import Navbar from './components/Navbar';

function App() {
  console.log("Inside App component");
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/react-todolist" element={<TodoContainer />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
