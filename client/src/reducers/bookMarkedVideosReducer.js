
const bookMarkedVideos = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_NEW_BOOKMARK':
      return { ...state,
                bookmarkedVideos: action.bookmarkedVideos
      }
    default:
      return state;
  }
}

//export default bookMarkedVideos;