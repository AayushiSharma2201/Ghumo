import React from "react";
import './index.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact } from "./components";
function App() {
  var sectionStyle = {
    width: "100%",
    height: "100vh",
    backgroundImage: "url(" + "http://lara-business.getgolo.com/uploads/5fed7f86a6560_1609400198.jpg " + ")"
  };
  return (
    
   <div style={ sectionStyle }>
    <div className="App">         
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
        </Switch>
       <Footer />
      </Router>
     </div>
    </div>
  );
}

export default App;






