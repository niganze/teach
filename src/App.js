import "./App.css";
import About from "./page/About";
import Best from "./page/best/Best";
import Contact from "./page/contact/Contact";
import Footer from "./page/Footer/Footer";
import Home from "./page/Home";
import Navbar from "./page/Navbar";
import Service from "./page/service/Service";
import {BrowserRouter} from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link'
import ContactFor from "./page/BLOG/ContactFor";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Home />
      {/* <Link to='service'></Link> */}
      <About/>
      <Best/>
      {/* <link to='best'></link> */}
      <Service/>
      <ContactFor/>
      <Contact />
      {/* <link to='contact'></link> */}
      
      <Footer/>
    </div>
    </BrowserRouter>
  );
}
export default App;
