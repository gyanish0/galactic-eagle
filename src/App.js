import "./App.css";
import Team from "./Components/Team";
import Background8 from "./Components/Background8";
import MapDev from "./Components/MapDev";
import Eaglefe from "./Components/Eaglefe";
import EagleLore from "./Components/EagleLore";
import Secondpage from "./Components/Secondpage";
import Middlepg from "./Components/Middlepg";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Roadmap from "./Components/Roadmap";

function App() {
  return (
    <div className="App">
      <Home />
      <Roadmap />
      <Middlepg />
      <Footer />
      <Secondpage />
      <EagleLore />
      <Eaglefe />
      <MapDev />
      <Background8 />
      <Team />
    </div>
  );
}

export default App;
