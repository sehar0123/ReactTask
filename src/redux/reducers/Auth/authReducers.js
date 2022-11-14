export const SET_PROFILE = 'SET_PROFILE';
export const LOGOUT = 'LOGOUT';
export const RESET_TOKEN = 'RESET_TOKEN';
export const SET_Error = 'SET_Error';
export const SET_USER_Profile = 'SET_USER_Profile';
const initialState = {
  profile: {},
  loggedIn: false,
  token: '',
  resettoken: '',
  error: [],
  userDetaills: [],
};

export default function (state = initialState, action) {
  try {
    switch (action.type) {
      case SET_PROFILE:
        return {
          ...state,

          profile: action?.payload?.user,
          token: action.payload.token,
          loggedIn: true,
        };
      case RESET_TOKEN:
        console.log('token', action.payload.token);
        return {
          ...state,
          resettoken: action.payload.token,
        };
      case SET_Error:
        // console.log('token', action.payload.token);
        console.log('heiei', action.payload.errors);
        return {
          ...state,
          error: action.payload?.errors,
        };
      case SET_USER_Profile:
        // console.log('token', action.payload.token);
        return {
          ...state,
          userDetaills: action.payload,
        };
      case LOGOUT:
        return {
          ...state,
          profile: {},
          userDetaills: [],
          token: '',
          loggedIn: false,
        };

      default:
        return state;
    }
  } catch (error) {
    console.log(`Error in reducers`, error);
  }
}
