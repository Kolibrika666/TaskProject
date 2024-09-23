import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { Tasks } from "./Tasks";
import { GlobalStyle } from "./styles";




function App() {
  return (
    <Provider store={store}>
      <GlobalStyle/>
      <Tasks/>
    </Provider>
  );
}

export default App;
