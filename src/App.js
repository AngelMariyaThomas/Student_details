
// import React, { useState } from 'react';
// import './App.css';
// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
// import jwt_decode from 'jwt-decode';
// import Details from './components/details/Details';

// function App() {
//   const [loggedIn, setLoggedIn] = useState(false);

//   const handleLogout = () => {
   
//     setLoggedIn(false);
//   };

//   const handleLoginSuccess = (credentialResponse) => {
//     const decode = jwt_decode(credentialResponse.credential);
//     console.log(decode);
//     setLoggedIn(true);
//   };

//   const handleLoginError = () => {
//     console.log('Login Failed');
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         flex: 1,
//         height: '100vh',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'white',
//       }}
//     >
//       {!loggedIn ? (
//         <GoogleOAuthProvider clientId="667833826669-gjfch6c8rd3gd1u1sgpcf92ojurque7m.apps.googleusercontent.com">
//           <GoogleLogin
//             onSuccess={handleLoginSuccess}
//             onError={handleLoginError}
//           />
//         </GoogleOAuthProvider>
//       ) : (
//         <div>
//           <Details />
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import './App.css';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import Details from './components/details/Details';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogout = () => {
   
    setLoggedIn(false);
  };

  const handleLoginSuccess = (credentialResponse) => {
    const decode = jwt_decode(credentialResponse.credential);
    console.log(decode);
    setLoggedIn(true);
  };

  const handleLoginError = () => {
    console.log('Login Failed');
  };

  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}
    >
      {!loggedIn ? (
        <GoogleOAuthProvider clientId="667833826669-gjfch6c8rd3gd1u1sgpcf92ojurque7m.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={handleLoginError}
          />
        </GoogleOAuthProvider>
      ) : (
        <div>
          <Details />
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default App;
