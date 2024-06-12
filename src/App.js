
import './App.css';
import Header from './components/header/header';
import Banner from './components/banner/banner';
import Timer from './components/timer/timer';
import SetTime from './components/setTimeout/setTimeout';
import Interval from './components/setInterval/setInterval';

function App() {
  return (
    <div className="App">
   <Header/>
   <Banner/>
   <Timer/>
   <SetTime/>
   <Interval/>
    </div>
  );
}

export default App;
