import React from "react";
import AppDrawer from "./components/AppDrawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Switch, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage";
// import SignUp from "./pages/SignUp";
// import LogIn from "./pages/LogIn";

function App() {
  return (
    <React.Fragment>
      <AppDrawer>
        <CssBaseline />
        <Switch>
          <Route
            exact
            path="/"
            render={props => {
              return <Home {...props} />;
            }}
          />
          <Route
            exact
            path="/about"
            render={props => {
              return <About {...props} />;
            }}
          />
          <Route
            exact
            path="/products"
            render={props => {
              return <ProductsPage {...props} />;
            }}
          />
          <Route
            exact
            path="/login"
            render={props => {
              return <AuthPage {...props} />;
            }}
          />
          <Route
            exact
            path="/profile"
            render={props => {
              return <ProfilePage {...props} />;
            }}
          />
          {/* <Route
            exact
            path="/login"
            render={props => {
              return <LogIn {...props} />;
            }}
          />
          <Route
            exact
            path="/signup"
            render={props => {
              return <SignUp {...props} />;
            }}
          /> */}
        </Switch>
      </AppDrawer>
    </React.Fragment>
  );
}

const Home = () => (
  <div>
    <h1>Hello Home</h1>
  </div>
);

const About = () => (
  <div>
    <h1>About Home</h1>
  </div>
);

export default App;
