import './App.css';
import { Features } from './components/Features';
import { Feedback } from './components/Feedback';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Slider } from './components/Slider';
import content from './content';

function App() {
  return (
    <>
    <Header />
    <Features />
    <Slider slides={content}/>
    <Feedback />
    <Footer />
    </>
  );
}

export default App;
