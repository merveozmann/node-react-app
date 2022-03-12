import React from "react"
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Shop from "./pages/shop/Shop";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Header />
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/shop">
            <Shop />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
