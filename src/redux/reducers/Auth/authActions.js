import {CardStyleInterpolators} from '@react-navigation/stack';
import {ToastAndroid} from 'react-native';
import API from 'src/config/API';
import {EnableSnackBar} from 'src/config/function';
import Api from 'src/helper/Api';
import {
  LOGOUT,
  RESET_TOKEN,
  SET_Error,
  SET_PROFILE,
  SET_USER_Profile,
} from './authReducers';

export const login =
  (data = {}, callback) =>
  async (dispatch, getState) => {
    let state = getState();
    let {method, url} = API.LOGIN;
    let postData = {...data};
    Api.request(method, url, undefined, postData)
      .then(res => {
        if (res.status == 200) {
          callback({success: true});
          console.log('==>', JSON.stringify(res, null, 2));
          dispatch({
            type: SET_PROFILE,
            payload: res,
          });
        } else {
          callback({success: false});
          EnableSnackBar(
            {
              data: res.errors[0],
            },
            false,
          );
        }
      })
      .catch(err => {
        console.log(err, 'login');
        callback({success: false});
      });
  };

export const register =
  (data = {}, callback) =>
  async (dispatch, getState) => {
    let state = getState();
    let {method, url} = API.REGISTER;
    let postData = {...data};
    Api.request(method, url, undefined, postData)
      .then(res => {
        console.log('==>', JSON.stringify(res, null, 2));

        if (res.status == 200) {
          callback({success: true});

          dispatch({
            type: SET_PROFILE,
            payload: res,
          });
        } else {
          callback({success: false});
          EnableSnackBar(
            {
              data: res.errors[0],
            },
            false,
          );
        }
      })
      .catch(err => {
        console.log(err, 'login');
        // callback({success: false});
      });
  };

export const logout = () => async (dispatch, getState) => {
  let state = getState();

  dispatch({
    type: LOGOUT,
  });
};

export const EditProfile =
  (data = {}, callback) =>
  async (dispatch, getState) => {
    let state = getState();
    let {method, url} = API.UPDATE_USER_PROFILE_INFO;
    let postData = {...data};
    Api.request(method, url, state.auth.token, postData)
      .then(res => {
        console.log('........', res);
        if (res.status == 200) {
          callback({success: true});
          dispatch({
            type: SET_PROFILE,
            payload: res.data,
          });
        } else {
          console.log('____');

          callback({success: false});
        }
      })
      .catch(err => {
        console.log(err, 'updateProfile');
        callback({success: false});
      });
  };
export const UpdatePassword =
  (data = {}, callback) =>
  async (dispatch, getState) => {
    let state = getState();
    let {method, url} = API.UPDATE_OLD_PASSWORD;
    // let postData = {...data};

    Api.request(method, url, state?.auth?.token, data)
      .then(res => {
        console.log('==>', JSON.stringify(res, null, 2));
        if (res.status == 200) {
          callback({success: true});
          console.log(res);
          // dispatch({
          //   type: SET_PROFILE,
          //   payload: res?.data,
          // });
        } else {
          callback({success: false});
        }
      })
      .catch(err => {
        console.log(err, 'update');
        callback({success: false});
      });
  };
export const sendopt =
  (data = {}, callback) =>
  async (dispatch, getState) => {
    let state = getState();
    let {method, url} = API.OPT_SEND;

    Api.request(method, url, state.auth.token, data)
      .then(res => {
        console.log('==>', JSON.stringify(res, null, 2));
        if (res.status == 200) {
          callback({success: true});
        } else {
          callback({success: false});
        }
      })
      .catch(err => {
        console.log(err, 'update');
        // callback({success: false});
      });
  };
export const verifyopt =
  (data = {}, callback) =>
  async (dispatch, getState) => {
    let state = getState();
    let {method, url} = API.OPT_VERIFY;

    Api.request(method, url, state.auth.token, data)
      .then(res => {
        console.log('==>', JSON.stringify(res, null, 2));
        if (res.status == 200) {
          callback({success: true});
          dispatch({
            type: RESET_TOKEN,
            payload: res,
          });
        } else {
          callback({success: false});
        }
      })
      .catch(err => {
        console.log(err, 'update');
        // callback({success: false});
      });
  };
export const resetPassword =
  (data = {}, callback) =>
  async (dispatch, getState) => {
    let state = getState();
    let {method, url} = API.RESET_PASSWORD;

    Api.request(method, url, state?.auth?.resettoken, data)
      .then(res => {
        console.log('==>', JSON.stringify(res, null, 2));
        if (res.status == 200) {
          // dispatch({
          //   type: SET_PROFILE,
          //   payload: res.data,
          // });
          callback({success: true});
        } else {
          callback({success: false});
        }
      })
      .catch(err => {
        console.log(err, 'update');
        // callback({success: false});
      });
  };
export const getUserDetails =
  (data, callback) => async (dispatch, getState) => {
    let state = getState();
    let {method, url} = API.EDIT_USER_PROFILE_INFO;

    Api.request(method, url, state.auth.token, undefined)
      .then(res => {
        console.log('UserDetails===>', JSON.stringify(res, null, 2));
        dispatch({
          type: SET_USER_Profile,
          payload: res.user,
        });
        callback({success: true});
      })
      .catch(err => {
        callback({success: true});
      });
  };
