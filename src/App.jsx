import './App.css';
import Routing from './shared/Routing';
import Navbar from './shared/Navbar';

const App = () => {
  return (
    <div className="flex">
        <Navbar />
        <Routing />
    </div>
  );
}

export default App;
