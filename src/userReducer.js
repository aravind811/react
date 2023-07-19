// userReducer.js
const initialState = {
  sports:'',
  username: '',
  // img: '',
  // cardTitle: '',
  // cardBody: ''
  date:'',
  members:'',
  responses: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SPORT':
      return {
        ...state,
        sports: action.payload
      };
    case 'UPDATE_USERNAME':
      return {
        ...state,   
        username: action.payload
      };
      case 'UPDATE_DATE':
      return {
        ...state,
        date: action.payload
      };
      case 'UPDATE_MEMBERS':
      return {
        ...state,
        members : action.payload
      };case 'ADD_RESPONSE':
      return {
        ...state,
        responses: [...state.responses, action.payload], // Add the new response to the array
      };
    // case 'ADD_PRODUCT':
    //   return {
    //     ...state,
    //     img: action.payload.img,
    //     cardTitle: action.payload.cardTitle,
    //     cardBody: action.payload.cardBody
    //   };
    default:
      return state;
  }
};

export default userReducer;
