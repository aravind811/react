import { useSelector, useDispatch } from "react-redux";
export const saveStateToLocalStorage = (state) => {
  console.log(state, "arar");
  try {
    const CurrentState = state.user.playerData;
    //console.log("serializedState::", serializedState);
    const existData = JSON.parse(localStorage.getItem("reduxState"));
    //console.log(existData,"existData")
    let values = [];
    if (existData !== null) {
      values = [...existData];
    }

    values.push(CurrentState);

    const finalValues = JSON.stringify(values.flat(1));
    console.log("values::", values);
    localStorage.setItem("reduxState", finalValues);
  } catch (error) {
    console.error("Error saving state to local storage:", error);
  }
};

export const loadStateFromLocalStorage = () => {
  try {
    const storedData = localStorage.getItem("reduxState");
    return (storedData = JSON.parse(storedData));
  } catch (error) {
    console.error("Error loading state from local storage:", error);
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
