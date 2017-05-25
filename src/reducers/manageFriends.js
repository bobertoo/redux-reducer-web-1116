const initialState = {
  friends: [],
  numberOfPresents: 0
}

export function manageFriends(state = initialState, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {
        ...state,
        friends: [
          ...state.friends,
          action.payload
        ]
      };
    case 'REMOVE_FRIEND':
      return {
        ...state,
        friends: [
          ...state.friends.filter(friend => friend.id !== action.payload)
        ]
      };
    default:
      return state;
  }
}
