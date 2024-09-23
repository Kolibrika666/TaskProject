import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { Tasks } from "./Tasks";


function App() {
  return (
    <Provider store={store}>
      <Tasks/>
    </Provider>
  );
}

export default App;
