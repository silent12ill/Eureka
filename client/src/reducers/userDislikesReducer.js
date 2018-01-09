const userDislikes = (state=[], action) => {
  switch( action.type ) {
    case 'SET_USER_DISLIKES':
      return action.dislikes;

    default:
      return state;
  }


}

export default userDislikes;