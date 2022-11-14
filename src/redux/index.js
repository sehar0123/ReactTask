import {combineReducers} from 'redux';
import styleReducer from './reducers/Style/styleReducer';

import productReducers from './reducers/ProductList/productReducers';
import themeReducer from './reducers/ChangeTheme/themeReducer';

const reducers = combineReducers({
  style: styleReducer,
product: productReducers,
theme:themeReducer
});
export const reducersArray = ['colorSelection', 'images', 'effects', 'addText'];
export default reducers;
