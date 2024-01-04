import {legacy_createStore as createStore, combineReducers} from 'redux';
import cartReducer from '../redux/reducer/cartReducer';
const rootReducer = combineReducers({
  places: cartReducer,
});
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
