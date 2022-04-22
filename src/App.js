import './App.css';
import { Features } from './components/Features';
import { Header } from './components/Header';
import { Slider } from './components/Slider';
import content from './content';

function App() {
  return (
    <>
    <Header />
    <Features />
    <Slider slides={content}/>
    </>
  );
}

export default App;
