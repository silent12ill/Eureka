
const bookMarkedVideos = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_NEW_BOOKMARK':
      return { ...state,
                bookmarkedVideos: action.bookmarkedVideos
                //use underscore or lodash to create new array with state maybe?
                //discuss with team
      }
    default:
      return state;
  }
}

export default bookMarkedVideos;


