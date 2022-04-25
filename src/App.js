import './App.css';
import { ThemeProvider } from 'styled-components';
import { Features } from './components/Features';
import { Feedback } from './components/Feedback';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Slider } from './components/Slider';
import content from './content';

function App() {

  const theme = {
  
    mobile: '920px'

  }

  return (
    <ThemeProvider theme={theme}>
      <>
      <Header />
      <Features />
      <Slider slides={content}/>
      <Feedback />
      <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
