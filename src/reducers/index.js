import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {title : 'No Scrubs', duration: '4:05'},
    {title: 'Stargazing', duration: '5:25'},
    {title: 'I Can', duration:'3:25'},
    {title: 'Toast', duration: '3:00'}
  ]
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};
// Merge reducers together
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});