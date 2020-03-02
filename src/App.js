import React from "react";
import AppDrawer from "./components/AppDrawer";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <div className="App">
      <AppDrawer>
        <CssBaseline />
        <h1>Hello World</h1>
      </AppDrawer>
    </div>
  );
}

export default App;
