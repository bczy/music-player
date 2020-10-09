import { connect } from 'react-redux'
import { togglePlay } from '../actions'
import Playlist from '../components/playlist'

const getPlaylist = (state) => state.playlist


const mapStateToProps = state => ({
  playlist: getPlaylist(state)
})

const mapDispatchToProps = dispatch => ({
    togglePlay: trackId=> dispatch(togglePlay(trackId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Playlist)