import React from 'react'
import { createStore } from 'redux'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import DevTools from './dev-tools/DevTools'
import './App.scss';


import rootReducer from './Reducers'

import Application from './application/Application'
import PageTwo from './pageTwo/PageTwo'

const store = createStore(
    rootReducer,
    {},
    DevTools.instrument()
)

const history = syncHistoryWithStore(browserHistory, store)

const Profile = () => {
    return <div>test</div>
}

const App = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={Application}>
                    <Route path="profile" component={Profile}/>
                    <Route path="pageTwo" component={PageTwo}/>
                </Route>
            </Router>
        </Provider>
    )
}

export default App;
