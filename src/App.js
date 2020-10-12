import React, { useEffect } from 'react';
import { connect } from "react-redux";
import styled from "styled-components"
import Axios from 'axios';

import { getPlayer } from './store/selectors'
import { setPlayerState, setToken } from './store/actions';

import hash from "./utils/hash";
import { authEndpoint, clientId, redirectUri, scopes } from "./config";

import PlayList from './components/Playlist';
import Player  from './components/Player';
import { PLAYER_STATE } from './store/reducers/player';

const AppContainer = styled.div`
  font-family: arial
`

function App({playerState, setPlayerState, setToken}) {
  useEffect(()=>{
    const _token = hash.access_token;
    if (_token) {
      Axios.defaults.headers.common['Authorization'] = `Bearer ${_token}`
      setPlayerState(PLAYER_STATE.PAUSED)
      setToken(_token)
    }
  }, [setPlayerState, setToken]); 

  return (
    <AppContainer>
      {playerState === PLAYER_STATE.DISCONNECTED ? 
            <a
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                "%20"
              )}&response_type=token&show_dialog=true`}
            >
              Please login to Spotify to access playlist
            </a>
           :
          ( <>
              <Player/>
              <PlayList />
            </>)}
    </AppContainer>
  );
}

const mapStateToProps = state => {
  const player  = getPlayer(state);
  return player;

};

export default connect(
  mapStateToProps,
  {  setPlayerState, setToken }
)(App);
