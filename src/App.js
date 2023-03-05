import "./App.css";
import About from "./page/About";
import Best from "./page/best/Best";
import Home from "./page/Home";
import Navbar from "./page/Navbar";
import Service from "./page/service/Service";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About/>
      <Best/>
       <Service/>
    </div>
  );
}

export default App;
