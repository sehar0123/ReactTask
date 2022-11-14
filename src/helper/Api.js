import axios from 'axios';
import {EventRegister} from 'react-native-event-listeners';
import {ENV} from 'src/config/env';
import Messages from 'src/config/Messages';
const VALID_SUCCESS_CODE = [200, 201, 202, 203, 204];
class Api {
  static headers(token) {
    return {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    };
  }
  static get(route) {
    return this.func(route, null, 'GET');
  }
  static post(route, params) {
    return this.func(route, params, 'POST');
  }

  static put(route, params) {
    return this.func(route, params, 'PUT');
  }
  static delete(route) {
    return this.func(route, null, 'DELETE');
  }
  static request(type, route, token, params) {
    return this.func(route, params, type, token);
  }
  static async postFormData(endPoint, formdata) {
    // console.log(JSON.stringify(ENV.base_url + endPoint));
    return fetch(ENV.base_url + endPoint, {
      method: 'POST',
      body: formdata,
    })
      .then(response => {
        let json = response.json();

        if (response.ok) {
          return json;
        }
      })
      .catch(err => {
        console.log(err);
        throw null;
      });
  }

  static async externalGet(route, params, verb) {
    const url = `${route}`;
    console.log(url);
    let options = Object.assign(
      {method: verb},
      params ? {body: JSON.stringify(params)} : null,
    );

    options.headers = this.headers();

    return fetch(url, options)
      .then(resp => {
        // console.log('Api response is ------------->>>>>>', resp);

        let json = resp.json();

        if (resp.ok) {
          return json;
        }

        return json.then(err => {
          return null;
        });
      })
      .catch(json => {
        // console.log('Api response is ------------->>>>>>', json);

        throw null;
      });
  }

  static formRequest({method, url, token, data = {}}) {
    return axios({
      method,
      url: `${ENV.base_url}/${url}`,
      data,
      headers: {
        accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        ...(token && {Authorization: `Bearer ${token}`}),
      },
    })
      .then(res => res.data)
      .catch(err => {
        throw err;
      });
  }

  static async func(route, params, verb, token) {
    const url = `${ENV.base_url}/${route}`;
    // let options = Object.assign(
    //   {method: verb},
    //   params ? {body: JSON.stringify(params)} : null,
    // );
    // console.log({url, token, method: verb});
    const options = {
      method: verb,
      url,
      data: JSON.stringify(params),
      timeout: 20000,
      timeoutErrorMessage: Messages.TIMEOUT,
      validateStatus: status => VALID_SUCCESS_CODE.includes(status),
    };
    options.headers = this.headers(token);
    return axios(options)
      .then(resp => {
        // console.log(' Api response is !!!------------->>>>>>', resp.data);

        // let json = resp.data;

        // if (resp.ok) {
        //   return json;
        // }

        // return json.then(err => {
        //   return null;
        // });
        return resp.data;
      })
      .catch(async error => {
        console.log(
          'ERROR IN Api response is !------------->>>>>>',
          error.response.data,
          url,
        );
        if (error.message === Messages.TIMEOUT) {
          // EventRegister.emit('snackbar', {
          //   data: error.message,
          // });
        } else {
          const {status, data} = error.response;
          // if (data?.error_description?.toString().includes('access token')) {
          //   // EventRegister.emit('snackbar', {
          //   //   data: data.error_description,
          //   // });
          //   if (params.grant_type !== 'refresh_token') {
          //     let {refresh_token} = await LocalDb.getToken(params?.type);
          //     EventRegister.emit('refreshToken', refresh_token);
          //   } else {
          //     EventRegister.emit('snackbar', {
          //       data: 'Session has Expired',
          //     });
          //   }
          // }
          throw {status, data};
        }
        throw null;
      });
  }
}
export default Api;
