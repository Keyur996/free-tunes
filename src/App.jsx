import './App.css';
import Navbar from './shared/Navbar';
import Header from './shared/Header';
import Footer from './shared/Footer';
import Playlist from './components/Playlist';
import Album from './components/Album';
import Genre from './components/Genre';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Navbar />
        <Playlist />
        <Album />
        <Genre />
        <Footer />
      </header>
    </div>
  );
}

export default App;
