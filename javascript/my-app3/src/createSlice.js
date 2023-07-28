// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';


// function Submit() {
  
//   const [username, setUsername] = useState('');
//   const [members, setmembers] = useState('');
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
    
//   };

//   const handlemembersChange = (e) => {
//     setmembers(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform login logic here, such as sending a request to the server
//     dispatch({ type: 'UPDATE_USERNAME', payload: username });
//     // Navigate to App.js with the username on top
//    navigate('/');
//   };
 
//   return (
//     <div>
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit} >
//         <div>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={handleUsernameChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="members">members:</label>
//           <input
//             type="number"
//             id="members"
//             value={members}
//             onChange={handlemembersChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="date">date</label>
//           <input
//             type="datetime-local"
//             id="members"
//             value={members}
//             onChange={handlemembersChange}
//           />
//         </div>
//         <button type="submit">sumbit</button>
//       </form>
//     </div>
//   );
// }

// export default Submit;
import { createSlice } from "@reduxjs/toolkit";
 const userSlice= createSlice({
  name: "data",
  initialState:{
    loading: false,
    error: null,
    data:null
  },
  reducers:{
    fetchDataStart(state){
      state.loading=true;
      state.error=false
    },
    fetchDataSuccess(state , action){
      state.loading=false;
      state.data=action.payload
    },
   fetchDataFailure(state){
    state.loading=false;
    state.error=true
   }

  }

 }) ;
 export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = userSlice.actions;
 export default userSlice.reducer