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
import './login.css'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateSport, updateDate, updateMembers, updateUsername, addResponses } from './userReducer';
import { saveStateToLocalStorage } from './localStorage';
import { Button } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
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

  // just for Calculate rupees
  const rupees = members * 100;
 
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const newResponse = {
      sports,
      username,
      date,
      members,
      rupees,
    };
   
     dispatch(addResponses(newResponse));
    
    navigate('/display');
  };

  
  return (
    <div >
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className='form'>

      <div>
      <label htmlFor="username">sports:</label>
        <select className="custom-select"  value={sports}  id='inputGroupSelect01'  onChange={handleUsersportChange} >
        <option  selected>Choose...</option>
    <option >cricket</option>
    <option >football</option>
    <option >tennis</option>
  </select>
          <br></br>
          {/* <input
            type="text"
            id="sports"
            value={sports}
            onChange={handleUsersportChange}
          /> */}
        </div>
        
        <div>
          <label htmlFor="username">Username</label>
          <br></br>
          <input
          placeholder='username'
            type=""
            id="username"
            required
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="members">members:</label>
          <br></br>
          <input
             placeholder='nos of peoples'
            type="number"
            id="members"
            required
            value={members}
            onChange={handlemembersChange}
          />
        </div>
        <br></br>
        <div>
          <label htmlFor="date">date</label>
          <br></br>
          <input
           placeholder='date'
            type="datetime-local"
            id="date"
            value={date}
            onChange={handledateChange}
          />
        </div>
        <br></br>
        <br></br>
        <Button type="submit">submit</Button>
      
      <br></br>

      {/* Display the calculated rupees */}
      <p>Rupees: {rupees}</p>
      </form>
    </div>
  );
}

export default Submit;
