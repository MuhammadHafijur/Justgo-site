import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Pages/Shared/Header/Header";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import AuthProvider from "./Context/AuthProvider";
import Booking from "./Pages/Booking/Booking";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import ManageTour from "./Pages/ManageTour/ManageTour";
import AddTour from "./Pages/AddTour/AddTour";

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
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/booking">
            <Booking></Booking>
          </Route>
          <PrivateRoute path="/managetour">
            <ManageTour></ManageTour>
          </PrivateRoute>
          <PrivateRoute path="/addtour">
            <AddTour></AddTour>
          </PrivateRoute>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
