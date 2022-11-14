
import { DARK_THEME } from './themeReducer';



export const changeTheme = (data, callback) => async (dispatch, getState) => {
 
      dispatch({
        type:DARK_THEME,
        payload: data,
      });
      callback({success: true});
    
   
};