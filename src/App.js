
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter as  Router, Routes,Route }  from 'react-router-dom';
import Home from './components/Home';
import Project from './components/Project';
import About from './components/About';


function App() {
  return (
    <div >
      <Router>
      <Header/>
      <Routes>

        <Route path='/' element ={<Home />}/>
        <Route path='/about' element ={<About />}/>
        <Route path='/project' element ={<Project />}/>
      </Routes>

      <Footer />
      </Router>
    </div>
  );
}

export default App;
