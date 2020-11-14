import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware  from 'redux-thunk';
import { composeWithDevTools  } from 'redux-devtools-extension';
import coursesReducer from './reducers/coursesReducer';
import AsyncStorage  from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const rootReducer = combineReducers({
    courses: coursesReducer
})

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}
const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(pReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
let persistor = persistStore(store);
export {persistor, store};