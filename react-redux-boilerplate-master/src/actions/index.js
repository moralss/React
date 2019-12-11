import Axios from 'axios';


export const updateName = text => ({
  type: 'UPDATE_NAME',
  text
})

export const clearName = () => ({
  type: 'CLEAR_NAME',
})

export const sendMessage = (text) => {
  console.log("text ", text);
  return (dispatch) => {
    Axios.post("http://ac88a44a6935711e982b602f197ebe6f-1529281652.eu-west-2.elb.amazonaws.com/chat/person/", text).
      then(response => console.log(response)).catch(e => console.log(e));

  }
}


