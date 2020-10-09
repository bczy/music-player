import React, { useEffect,useState } from 'react';

import hash from "./utils/hash";

import { authEndpoint, clientId, redirectUri, scopes } from "./config";
import Axios from 'axios';
import PlayList from './components/Playlist';

function App() {
  const [ token, setToken ] = useState();

  useEffect(()=>{
    const _token = hash.access_token;
    
    if (_token) {
      setToken(_token)
      Axios.defaults.headers.common['Authorization'] = `Bearer ${_token}`
    }
  },[]);
  return (
    <div>
      {!token ? 
            <a
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                "%20"
              )}&response_type=token&show_dialog=true`}
            >
              Please login to Spotify to access playlist
            </a>
           :
          <PlayList token={token} />}
    </div>
  );
}

export default App;
