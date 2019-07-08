import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if(!song) {
    return <div className="ui raised segment">Select a song</div>
  }

  return (
    <div className="ui raised segment">
      <h3>Details for:</h3>
      <p>Title: {song.title}</p>
      <p>Duration: {song.duration}</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);