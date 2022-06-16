
import './App.css';
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'
import Headline from './components/Headline';

function App() {
  return (
    <div className="App">
      <div className="App-firstPart">
     <Navbar/>
     <Headline/>
      </div>
      <div className="App-secondPart">
        <Gallery/>
      </div>
    </div>
    
  );
}

export default App;
