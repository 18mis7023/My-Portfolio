import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/aboutus'
import Experience from './pages/experience'
import Projects from './pages/Projects/Projects'
import ContactUs from './pages/contactus'
import Services from './pages/Services/Services';

function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={AboutUs} />
          <Route path="/experience" exact component={Experience} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/contact-us" exact component={ContactUs} />
          <Route path="/services" exact component={Services} />
        </Switch>
    </Router>
  );
}

export default App;
