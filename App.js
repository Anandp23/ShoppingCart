import React from "react";
import { Provider, useDispatch } from "react-redux";
import Main from "./Main";
import { mystore } from "./redux/MyStore";

const App = () => {
  return(
    <Provider store={mystore}>
      <Main/>
    </Provider>
  );
};
 
export default App;
