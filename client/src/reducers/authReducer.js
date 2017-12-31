const authStatus = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_LOGGED_IN_STATUS': // Change boolean value logged in or not
      return { ...state, action.loggedIn }

    case 'SET_CURRENT_USER':
      return { ...state, action.currentUser } // Update currentUser from 'guest' to whatever

    default:
      return state;
  }
}

export default authStatus;
