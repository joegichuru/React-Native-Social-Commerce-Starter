/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    StatusBar,
} from 'react-native';
import {ThemeProvider} from 'nachos-ui';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Main from './src/screens/main';
import reducer from "./src/redux/reducers"
const store=createStore(reducer);
console.log("store.getState()",store.getState());
const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <StatusBar barStyle="dark-content"/>
                <Main/>
            </ThemeProvider>
        </Provider>
    );
};
export default App;
