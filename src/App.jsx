import './App.css'
import Navbar from './components/NavBar'
import Home from './pages/home';

function App() {

  return (
    <>
        <header>
        <Navbar/>
        </header>
        <div>
          <Home/>
        </div>
        
    </>
  );
}

export default App
