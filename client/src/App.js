import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Pages/Cart/Cart";
import Errors from "./Pages/Errors/Errors";
import Landpage from "./Pages/Landpage/Landpage";
import Order from "./Pages/Order/Order";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import PrivateRoute from "./router/PrivateRoute";
import { currentUser } from "./JS/actions/user";
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
        <Route exact path="/" component={Landpage} />
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
