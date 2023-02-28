//NOTE: action -> going to be an objet that has a type (which is just going to be a string)
const githubReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
      case 'CLEAR_USERS':
        return {
          ...state,
          users: []
        }
    default:
      return state;
  }
};

export default githubReducer;
