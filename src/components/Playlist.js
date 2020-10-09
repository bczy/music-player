import React,{useEffect} from 'react'
import { connect } from "react-redux";

import Axios from 'axios'
import { setPlaylist } from '../store/actions';
import { getPlaylist } from '../store/selectors';
import Track from './Track';

const PlayList = ( props ) =>  { useEffect(()=>{
  Axios.get(`https://api.spotify.com/v1/playlists/0S3Vix6jcXA54eIIhlegFY`)
  .then(res => { 
    console.log(res.data)
    const {tracks} = res.data
    props.setPlaylist(tracks.items)
  })
},[])

return (
<ul>
  {getPlaylist(props).map(tracks =>{
    console.log(tracks.playlist)
    return tracks.playlist.map(track => 
      <Track track={track} onClick={()=>console.log('muf')}/>) })
  }
</ul>)}


const mapStateToProps = state => {
  const playlist = getPlaylist(state);
  return { playlist };

};

export default connect(
  mapStateToProps,
  { setPlaylist }
)(PlayList);

/*{tracks.map((track,id) => (
    <Track key={id} {...track} onClick={() => togglePlay(track.id)} />
  ))}*/