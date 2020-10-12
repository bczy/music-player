import React,{useEffect} from 'react'
import { connect } from "react-redux";
import Axios from 'axios'

import { setPlaylist } from '../store/actions';
import { getPlaylist } from '../store/selectors';

import Track from './Track';
import { playlistId } from '../config';

const PlayList = ({playlist, setPlaylist}) =>  {
  useEffect(()=>{
    Axios.get(`https://api.spotify.com/v1/playlists/${playlistId}`)
    .then(res => { 
      const { tracks } = res.data;
      setPlaylist(tracks.items);
  }).catch(e => console.log(e)) // TODO Make a proper error page
},[setPlaylist])

return (
<ul>
  {playlist.tracks.map((track,id) => {
    return (
    <Track key={id} {...track} onClick={() => console.log(track.id)} />
  )})}
</ul>)}


const mapStateToProps = state => {
  const playlist = getPlaylist(state);
  return { playlist };
};

export default connect(
  mapStateToProps,
  { setPlaylist }
)(PlayList);
