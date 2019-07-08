import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Good song of today', duration: '4:07' },
    { title: 'Night of light', duration: '4:23' },
    { title: 'Find the time', duration: '3:29' },
    { title: 'Let it go', duration: '5:01' }
  ]
}

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})