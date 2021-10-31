import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Pages/Shared/Header/Header";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import ManageTour from "./Pages/ManageTour/ManageTour";
import AddTour from "./Pages/AddTour/AddTour";
import MyOrders from "./Pages/MyOrders/MyOrders";
import Booking from "./Pages/Booking/Booking/Booking";
import Services from "./Pages/Services/Services";
import Footer from "./Pages/Shared/Footer/Footer";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/managetour">
            <ManageTour></ManageTour>
          </PrivateRoute>
          <PrivateRoute path="/addtour">
            <AddTour></AddTour>
          </PrivateRoute>
          <PrivateRoute path="/myorders">
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
          </PrivateRoute>
          <PrivateRoute path="/booking/myorders/:id">
              <Booking></Booking>
          </PrivateRoute>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
