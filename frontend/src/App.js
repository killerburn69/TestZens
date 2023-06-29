import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
