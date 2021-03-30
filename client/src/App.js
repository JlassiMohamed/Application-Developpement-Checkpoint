import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router";
//import Landpage from "./pages/Landpage/Landpage";//
import Home from "./components/Home";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./pages/Cart/Cart";
import Errors from "./pages/Errors/Errors";
import Order from "./pages/Order/Order";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import PrivateRoute from "./router/PrivateRoute";

import { currentUser } from "./JS/actions/user";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser());
  }, []);
  return (
    <div class="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <PrivateRoute path="/order" component={Order} />
        <PrivateRoute path="/cart" component={Cart} />
        {/* <Route path="" component={} /> */}
        {/* <Route path="" component={} /> */}
        {/* <Route path="" component={} /> */}
        <Route path="/*" component={Errors} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
