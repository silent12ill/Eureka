const currentVideo = (state = {}, action) => {
  switch(action.type) {
    case 'SET_CURRENT_VIDEO':
      return Object.assign({}, action.video)
    default:
      return state;
  }
};

export default currentVideo;