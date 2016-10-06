import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import OneTwoTrip from './containers/OneTwoTrip';
import reducer from './reducers';
import styles from './style/main.css';

const store = createStore(reducer)

render(
    <Provider store={store}>
        <OneTwoTrip />
    </Provider>,
    document.getElementById('root')
)
