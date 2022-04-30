import './App.css';
import { Header, Dropdown } from "./components/header/header"
import heromobile from "./image-hero-mobile.png"
import herodesktop from "./image-hero-desktop.png"
import { Text } from "./components/text/text"
import { Footer } from './components/footer/footer';

export function App() {
  return (
    <div className="App">
      <Header><Dropdown /></Header>
      <div className='content'>
        <img src={heromobile} className="hero-mobile"/>
        <img src={herodesktop} className="hero-desktop" />
        <Text />
        <Footer />
      </div>
    </div>
  );
}

export default App;
