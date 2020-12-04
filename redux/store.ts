import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware  from 'redux-thunk';
import { composeWithDevTools, devToolsEnhancer  } from 'redux-devtools-extension';
import coursesReducer from './reducers/coursesReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import userReducer from './reducers/userReducer';
import rootReducer from './reducers/rootReducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}
const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(pReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
let persistor = persistStore(store);
export {persistor, store};