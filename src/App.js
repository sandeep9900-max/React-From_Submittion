import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import FormDetails from "./component/FormDetails/FormDetails";
import AdressForm from "./component/AdressForm/AdressForm";
import ContactForm from "./component/ContactForm/ContactForm";
import HobbyForm from "./component/HobbyForm/HobbyForm";
import store from "./redux/Store";
import { Provider } from "react-redux";
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/hobby" component={HobbyForm} />
            <Route path="/address" component={AdressForm} />
            <Route path="/contact" component={ContactForm} />
            <Route path="/" component={FormDetails} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
