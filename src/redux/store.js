import {applyMiddleware, createStore, compose} from 'redux';
// import {persistStore, persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import thunk from 'redux-thunk';

import reducer from './reducers';

// const configureStore = (initialState) => {
//     const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//     const middleware = applyMiddleware(
//         thunk,
//     );
//
//     // const persistConfig = {
//     //   key: 'primary',
//     //   storage,
//     // };
//
//     // const persistedReducer = persistReducer(persistConfig, reducer);
//
//     const store = createStore(
//         reducer,
//         initialState,
//         composeEnhancers(middleware),
//     );
//
//     // const persistor = persistStore(store)
//     // .purge();
//
//     // return {store, persistor};
// }
const store = createStore(
    reducer,
);

export default store;
