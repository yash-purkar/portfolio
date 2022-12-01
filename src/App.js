import "./Components/App.css"
import Home from './Components/Home'
import Projects from './Components/Projects';
import Blogs from './Components/Blogs';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='projects' element={<Projects />} />
          <Route path="blogs" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
