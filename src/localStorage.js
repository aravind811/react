
import { Link } from "react-router-dom";
export const saveStateToLocalStorage = (state) => {
    console.log(state,'arar')
    try {
      const serializedState = JSON.stringify(state.user);
      localStorage.setItem('reduxState', serializedState);
    } catch (error) {
      console.error('Error saving state to local storage:', error);
    }
  };
  
  export const loadStateFromLocalStorage = () => {
    try {
      const serializedState = localStorage.getItem('reduxState');
      var newData = [];
      if (serializedState.length>0) {
        console.log(newData,"ara")
        newData.push(serializedState);
      var parsedData=JSON.parse(serializedState);
      newData=[...parsedData,serializedState];
      console.log(newData,"rav")
      localStorage.setItem('reduxState', JSON.stringify(newData))
      console.log(serializedState)
      }
      else{
        localStorage.setItem('reduxState', JSON.stringify[serializedState])
      }
      var storedData = localStorage.getItem('reduxState');

      // Parse the stored responses from JSON
      var formResponses = storedData ? JSON.parse(storedData) : [];
      
      return JSON.parse(formResponses);
    } catch (error) {
      console.error('Error loading state from local storage:', error);
      return undefined;
    }
  };
  
  //var existingData = localStorage.getItem('formResponses');
//   var newData = [];
//   if (existingData) {
//     var parsedExistingData = JSON.parse(existingData);
//     newData = [...parsedExistingData, formData];
//     localStorage.setItem('formResponses', JSON.stringify(newData));
//   } else {
//     localStorage.setItem('formResponses', JSON.stringify([formData]));
//   }

//   // Reset the form
//   form.reset();

