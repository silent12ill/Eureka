const updateUserVotes = (state =[], action) => {
  switch(action.type) {
    case 'UPVOTE_ON_VIDEO':
      return [...state, action];
    case 'DOWNVOTE_ON_VIDEO':
      return [...state, action];
    default:
      return state;
  }

}