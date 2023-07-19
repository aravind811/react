// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';


// function LoginPage() {
  
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
    
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform login logic here, such as sending a request to the server
//     console.log('Logging in...', username, password);
//     dispatch({ type: 'UPDATE_USERNAME', payload: username });
//     // Navigate to App.js with the username on top
//    navigate('/');
//   };
//   const createData = async (data) => {
//     try {
//       const response = await fetch('http://localhost:3001/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });
//       const createdData = await response.json();
//       console.log(createdData);
//     } catch (error) {
//       console.error(error);
//     }
//   };
  
//     const newData = { name: username, password: password };
//     createData(newData);
  
  
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
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={handlePasswordChange}
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default LoginPage;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Submit() {
  const [sports, setsport] = useState('');
  const [username, setUsername] = useState('');
  const [members, setmembers] = useState('');
  const [date, setdate] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUsersportChange = (e) => {
    setsport(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlemembersChange = (e) => {
    setmembers(e.target.value);
  };

  const handledateChange = (e) => {
    setdate(e.target.value);
  };

  // Calculate rupees based on members
   const rupees = members * 100;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here, such as sending a request to the server
    dispatch({ type: 'UPDATE_USERNAME', payload: username });
    dispatch({ type: 'UPDATE_SPORT', payload: sports });
    dispatch({ type: 'UPDATE_DATE', payload: date });
    dispatch({ type: 'UPDATE_MEMBERS', payload: members });
    // Navigate to App.js with the username on top
    const newResponse = {
      sports,
      username,
      date,
      members,
      rupees
    };
    dispatch({ type: 'ADD_RESPONSE', payload: newResponse });
    navigate('/display');
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">sports:</label>
          <input
            type="text"
            id="sports"
            value={sports}
            onChange={handleUsersportChange}
          />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="members">members:</label>
          <input
            type="number"
            id="members"
            value={members}
            onChange={handlemembersChange}
          />
        </div>
        <br></br>
        <div>
          <label htmlFor="date">date</label>
          <input
            type="datetime-local"
            id="date"
            value={date}
            onChange={handledateChange}
          />
        </div>
        <button type="submit">submit</button>
      </form>

      {/* Display the calculated rupees */}
      <p>Rupees: {rupees}</p>
    </div>
  );
}

export default Submit;
