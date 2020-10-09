import React, { useEffect,useState } from 'react';

import hash from "./utils/hash";

import { authEndpoint, clientId, redirectUri, scopes } from "./config";

function App() {
  
  const [ token, setToken ] = useState('');
  useEffect(()=>{
    let _token = hash.access_token;

    if (_token) {
      // Set token
      setToken(_token)
      console.log(_token)
    }
  },[]);
  return (
    <div>
      {!token && (
            <a
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                "%20"
              )}&response_type=token&show_dialog=true`}
            >
              Please login to Spotify to access playlist
            </a>
          )}
    </div>
  );
}

export default App;
