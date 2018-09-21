import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { Provider } from 'react-redux'
import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
} from 'redux'

import dldReducer from './store/reducers/dld.reducer'

import InterfaceContainer from './containers/Interface.container'
import DldContainer from './containers/Dld.container'
import EmptyContenentComponent from './components/EmptyContent.component.js'

import './styles/index.css'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const appReducer = combineReducers( {
  dld: dldReducer,
} );

export const store = createStore(
  appReducer,
  composeEnhancers(
    // applyMiddleware(
    //   axiosMiddleware,
    //   driversMiddleware,
    //   routesMiddleware,
    //   fencesMiddleware
    // )
  )
)

class App extends Component {
  render() {
    const { translations } = this.props
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <InterfaceContainer translations={translations}>
              <div className="section-content">
                <Switch>
                  <Route path="/" exact component={DldContainer}/>
                  <Route component={EmptyContenentComponent} />
                </Switch>
              </div>
            </InterfaceContainer>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
