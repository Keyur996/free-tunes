import './App.css';
import Navbar from './shared/Navbar';
import Header from './shared/Header';
import Footer from './shared/Footer';
import Home from './components/Home';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Navbar />
        <Home/>
        <Footer />
      </header>
    </div>
  );
}

export default App;
