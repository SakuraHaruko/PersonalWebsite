// MusicPlayer.tsx

import React, { Component } from 'react';
import AudioPlayer from 'react-h5-audio-player';

interface MusicPlayerProps {
  playlist: { name: string; src: string }[];
}

interface PlayListState {
  currentMusicIndex: number;
}

class MusicPlayer extends Component<MusicPlayerProps, PlayListState> {
  state = {
    currentMusicIndex: 0,
  };

  handleClickPrevious = (): void => {
    this.setState((prevState) => ({
      currentMusicIndex: prevState.currentMusicIndex === 0 ? this.props.playlist.length - 1 : prevState.currentMusicIndex - 1,
    }));
  };

  handleClickNext = (): void => {
    this.setState((prevState) => ({
      currentMusicIndex: prevState.currentMusicIndex < this.props.playlist.length - 1 ? prevState.currentMusicIndex + 1 : 0,
    }));
  };

  render(): React.ReactNode {
    const { currentMusicIndex } = this.state;
    const { playlist } = this.props;

    return (
      <div className='bg-white justify-center rounded-lg p-4 pt-2 left-4 bottom-4 mt-4'>
        <p className='text-pink-200 text-center'>Now Playing - {playlist[currentMusicIndex].name}</p>
        <AudioPlayer hasDefaultKeyBindings={true} 
          showJumpControls={false} 
          showSkipControls={true} 
          volume={0.5} 
          autoPlay={true} 
          autoPlayAfterSrcChange={true} 
          customAdditionalControls={[]}
          src={playlist[currentMusicIndex].src}
          onEnded={this.handleClickNext}
          onClickPrevious={this.handleClickPrevious}
          onClickNext={this.handleClickNext}
          />
      </div>
    );
  }
}

export default MusicPlayer;
