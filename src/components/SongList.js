import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song, index) => {
      return (
        <div className="item" key={index} style={{margin: 5, padding: 10}}>
          <div className="right floated content">
            <button className="ui button primary" onClick={() => this.props.selectSong(song)}>
              Select
            </button>
          </div>
          <div className="content">
            <strong>
              {song.title}
            </strong>
          </div>
        </div>
      )
    })
  }
  
  render() {
    return (
      <div className="ui raised segment">
        <div className="ui divided list">
          {this.renderList()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
}

export default connect(mapStateToProps,{selectSong})(SongList);