const userDislikes = (state=[], action) => {
  switch( action.type ) {
    case 'SET_USER_DISLIKES':
      return [...state, ...action.dislikes];

    case 'UPDATE_USER_DISLIKES':
      return [ ...action.dislikes];

    default:
      return state;
  }


}

export default userDislikes;