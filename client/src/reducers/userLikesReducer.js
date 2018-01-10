const userLikes = (state=[], action) => {
  switch( action.type ) {
    case 'SET_USER_LIKES':
      return [...state, ...action.likes];

    case 'UPDATE_USER_LIKES':
      return [...state, action.like];

    default:
      return state;
  }


}

export default userLikes;