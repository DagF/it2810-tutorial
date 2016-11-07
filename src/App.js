import React from 'react'
import { createStore } from 'redux'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import DevTools from './dev-tools/DevTools'


import rootReducer from './Reducers'

import Application from './application/Application'
import PageOne from './page-one/PageOne'


const store = createStore(
    rootReducer,
    {},
    DevTools.instrument()
)

const history = syncHistoryWithStore(browserHistory, store)



const App = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={Application}>
                    <Route path="page1" component={PageOne}/>
                </Route>
            </Router>
        </Provider>
    )
}

export default App;
