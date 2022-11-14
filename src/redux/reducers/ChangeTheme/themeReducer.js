export const DARK_THEME = 'DARK_THEME';

const initialState = {
theme:'light',
 
};

export default function (state = initialState, action) {
  try {
    switch (action.type) {
      case DARK_THEME:
        return {
          ...state,
         theme: action.payload,
        };
      
      default:
        return state;
    }
  } catch (error) {
    console.log(`Error in reducers`, error);
  }
}
