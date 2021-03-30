import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./pages/Cart/Cart.js";
import Errors from "./pages/Errors/Errors";
//import Landpage from "./pages/Landpage/Landpage";//
import Home from "./components/Home";
import Order from "./pages/Order/Order";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import { currentUser } from "./JS/actions/user";
import PrivateRoute from "./router/PrivateRoute";
import "./App.css";

function App() {
  const dispatch = useDispatch()
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
