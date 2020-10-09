import React from 'react'
import PropTypes from 'prop-types'

const Track = ({ onClick, track }) =>{ 
  console.log(track.track.artists[0]) 
  console.log(track.track.name)
  return (
  <li
    onClick={onClick}
  >
    <div>
      <div>{track.track.name}</div>
      <div>{track.track.artists[0].name}</div>
    </div>
  </li>
)}

Track.propTypes = {
  onClick: PropTypes.func.isRequired,
  track: PropTypes.object.isRequired
}

export default Track