

export const saveStateToLocalStorage = (state) => {
    console.log(state,'arar')
    try {
      const serializedState = JSON.stringify(state.user.responses);
      localStorage.setItem('reduxState', serializedState);
    } catch (error) {
      console.error('Error saving state to local storage:', error);
    }
  };
  
  export const loadStateFromLocalStorage = () => {
    try {
      const storedData = localStorage.getItem('reduxState');
      return storedData =JSON.parse(storedData) 
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

