
export default function(state = null, action) {
    switch(action.type) {
      case 'BOOK_SELECTED':
      console.log(state);

        return action.payload;
      default: 
        return state;
    }
  }


