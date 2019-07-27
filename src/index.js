import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import configStore from './component/redux/store'

const store = configStore()

store.subscribe(()=>{
    console.log('state',store.getState())
})

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));