
export default function (state = [
  { title: 'Javascript : The good part' },
  { title: 'Harry poter' },
  { title: 'Ruby on rails' },
  { title: 'game of thrones' },
], action) {
  var currentState = state
  switch (action.type) {
    case 'ADD_BOOK':
      return [...currentState, { title: action.payload }];
    case 'RENAME_BOOK':
    return 
      default:

      return state;
  }
}




