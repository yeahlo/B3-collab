import React, {Component} from 'react';
import Search from './components/search/Search';
import './App.css';
import Playlist from './components/playlist'
import History from "./components/history/History";
import VideoPlayer from './components/player'

class App extends Component {

    constructor() {
        super();

        this.state = {
            currentVideo : null
        }
    }

    onVideoSelected(video) {
        this.refs.playlist.addVideo(video);
    }

    onVideoComplete(video) {
        this.refs.playlist.deleteVideo(video);
        this.refs.history.addVideo(video);
        this.startVideo();
    }

    startVideo() {
        let nextVideo = this.refs.playlist.getNextVideo();

        if(nextVideo) {
            this.setState({
                currentVideo : nextVideo
            })
        }

    }

    render() {
        return (
            <div className="App">
                <div className={"search__container"}>
                    <Search onVideoSelected={id => this.onVideoSelected(id)} />
                </div>
                <div className={"video__container"}>
                    <VideoPlayer video={this.state.currentVideo} videoComplete={video => this.onVideoComplete(video)}/>
                    <Playlist ref={"playlist"} onVideoSelected={id => this.startVideo(id)} ></Playlist>
                    <History ref={"history"} onVideoSelected={id => this.onVideoSelected(id)}></History>
                </div>
            </div>
        );
    }
}

export default App;
