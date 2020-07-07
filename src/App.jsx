import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './common/header'
import store from './store'
import Home from './pages/home'
import Detail from './pages/detail/loadable'
import Login from './pages/login'
import Write from './pages/write'

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
            <Header />
            <Route path="/" exact component={Home}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/write" exact component={Write} />
            <Route path="/detail/:id" exact component={Detail}></Route>
          </Router>
        </Provider>
      </div>
    )
  }
}
