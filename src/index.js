import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router, Switch,  Route } from "react-router-dom";
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import store from './store';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './containers/home';
import {Global} from './globalStyle';
import 'bootstrap/dist/css/bootstrap.min.css';    

ReactDOM.render(
    <Provider  store={store}>
        <React.StrictMode>
            <Global/>
            <Header title="Message List"/>
            <Router>
                <Switch>
                    <Route exact path="/" component = {Home} >
                    </Route>       
                </Switch>
            </Router>
            <Footer>
                <p> footer</p>
            </Footer>
        </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

 


