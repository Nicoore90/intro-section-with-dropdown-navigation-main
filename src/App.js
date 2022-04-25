import './App.css';
import { Header } from "./components/header/header"
import heromobile from "./image-hero-mobile.png"
import { Text } from "./components/text/text"
import { Footer } from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <img src={heromobile} className="hero-mobile"/>
      <Text />
      <Footer />
    </div>
  );
}

export default App;
