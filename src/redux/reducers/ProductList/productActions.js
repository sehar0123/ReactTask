import {State} from 'react-native-gesture-handler';
import API from 'src/config/API';
import {EnableSnackBar} from 'src/config/function';
import Api from 'src/helper/Api';

import { GET_PRODUCT_LIST } from './productReducers';

// ========================Get Public Categories=================

export const getproduct = (data, callback) => async (dispatch, getState) => {
  let {method, url} = API.PRODUCT_LIST;
  Api.request(method, url, undefined, undefined)
    .then(res => {
      console.log('getproduct response', JSON.stringify(res, null, 2));
      dispatch({
        type:GET_PRODUCT_LIST,
        payload: res,
      });
      callback({success: true});
    })
    .catch(err => {
      console.log(err, 'getcategories');
    });
};


