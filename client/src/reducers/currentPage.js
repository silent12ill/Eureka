// Reducer used for changing the current navigation view
// Sets a default value for 'home'

const currentPage = (state = 'home', action) => {
  switch (action.type) {
    case 'SET_CURRENT_NAVIGATION':
      return action.page
    default: 
      return state;
  }
}

export default currentPage;