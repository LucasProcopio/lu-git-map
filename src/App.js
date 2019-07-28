import React from "react";

import { Provider } from "react-redux";
import store from "./store";

import Main from "./pages/main";

import { Reset } from "./styles/reset";

function App() {
  return (
    <Provider store={store}>
      <Reset />
      <Main />
    </Provider>
  );
}

export default App;
