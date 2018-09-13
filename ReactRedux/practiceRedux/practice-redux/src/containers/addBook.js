export default function addBook(bookInfo){
    return {
      type: 'ADD_BOOK',
      payload : bookInfo ,
    }
  }
