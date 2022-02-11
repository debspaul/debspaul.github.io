// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import About from './Pages/About';
import Connect from './Pages/Connect';

function App() {
  return (
    <>  
      <Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/skills' element={<Skills />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/about' element={<About />} />
					<Route path='/connect' element={<Connect />} />
				</Routes>
			</Router>
    </>
  );
}

export default App;