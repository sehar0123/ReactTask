import {CHANGE_COLOR} from './styleReducer';

export const changeColor =
  (data = {}, callback) =>
  async (dispatch, getState) => {
    dispatch({
      type: CHANGE_COLOR,
      payload: data,
    });
    callback({success: true});
  };
