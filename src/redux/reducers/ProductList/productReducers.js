export const GET_PRODUCT_LIST = 'GET_PRODUCT_LIST';

const initialState = {
product:[],
 
};

export default function (state = initialState, action) {
  try {
    switch (action.type) {
      case GET_PRODUCT_LIST:
        return {
          ...state,
          product: action.payload,
        };
      
      default:
        return state;
    }
  } catch (error) {
    console.log(`Error in reducers`, error);
  }
}
