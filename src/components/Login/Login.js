// import React from 'react';
// import { Link } from 'react-router-dom';

// const Login = (props) => {
//   const {
//     email, 
//     setEmail, 
//     password, 
//     setPassword,
//     handleLogin,
//     handleSignup,
//     isUser
//   } = props
//   return (
//     <section>
//       <form>
//         <label>Username</label>
//         <input 
//           type='email' 
//           required 
//           value={email} 
//           onChange={e => setEmail(e)}
//         />
//         <label>Password</label>
//         <input 
//           type='password' 
//           required 
//           value={password} 
//           onChange={e => setPassword(e)}
//         />
//         <div>
//           {isUser? (
//             <button onClick={ () => handleLogin()}>Login</button>
            
//           ) : (
//             <button onClick={ () => handleSignup()}>Sign Up</button>
//           )}
//         </div>
//       </form>
//     </section>
//   )
// }


// export default Login