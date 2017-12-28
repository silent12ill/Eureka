/*
  Note: not currently working, and no actions set up for this.
  Just an example of how to extract this from state into a reducer.
*/

const authStatus = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_LOGGED_IN_STATUS': // Change boolean value logged in or not
      return { ...state,
      loggedIn: !action.loggedIn }

    case 'SET_CURRENT_USER':
      return { ...state,
      currentUser: action.currentUser } // Update currentUser from 'guest' to whatever

    default:
      return state;
  }
}

export default authStatus;