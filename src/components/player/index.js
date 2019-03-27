// API PLAYER YOUTUBE
// on video complete -> this.props.onNextVideo()
// changeVideo(id) change la video en cours

import React, {Component} from 'react'
import YouTube from 'react-youtube'

import './index.css'

class Player extends Component {

    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                autoplay: 1
            }
        };

        return (
            <div className="player">
                <YouTube
                    videoId={this.props.idVideo}
                    opts={opts}
                    onReady={this._onReady}
                    onEnd={(event) => this._onEnd(event)}
                />
            </div>
        );
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    _onEnd(event){
        this.props.videoComplete()
    }
}

export default Player;

/* How to import ?
    <Player idVideo={this.state.idVideo} videoComplete={this.videoComplete}/>
 */

/* videoComplete:
    change state idVideo
 */
