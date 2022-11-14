export const CHANGE_COLOR = 'CHANGE_COLOR';

const initialState = {
  themeColor: 'red',
};

export default function (state = initialState, action) {
  try {
    switch (action.type) {
      case CHANGE_COLOR:
        return {
          ...state,
          themeColor: action.payload,
        };

      default:
        return state;
    }
  } catch (error) {
    console.log(`Error in reducers`, error);
  }
}
