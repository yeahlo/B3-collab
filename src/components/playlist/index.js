import React, {Component} from 'react';
import '../../App.css';

class playlist extends Component {


    constructor() {
        super();

        this.state = {
            videoPlaylist: [
                {id: 1, title: "video test"},
                {id: 2, title: "other video"},
                {id: 3, title: "troisieme video"},

            ],
            currentVideo: null,
        }
    }

    getNextVideo() {
        let copyarray = this.state.videoPlaylist.slice(0);
        let nextVideo = copyarray.shift();
        this.setState({videoPlaylist: copyarray});
        console.log("copyarray", copyarray);

        console.log("nextvideo", nextVideo);
        return nextVideo;

    }

    addVideo({id, title})
    {
        let copy = this.state.videoPlaylist.slice();
        copy.push({id,title});
        this.setState({videoPlaylist: copy});
        console.log("addvideo", copy);

    }


    render() {

        var listVideo = [];

        for (let i = 0; i < this.state.videoPlaylist.length; i++) {
            listVideo.push(
                <div className={"liste"} key={i} >
                    <ul>
                        <a>{this.state.videoPlaylist[i].id} -  </a>
                        <a>{this.state.videoPlaylist[i].title}</a>
                    </ul>
                </div>
            )
        }

        return (

            <div className="playlist">
                <button  onClick={() => this.getNextVideo()}>Passer à la vidéo suivante >></button>
                {listVideo}
            </div>
        )
            ;
    }
}

export default playlist;


//tableau d'objet , ID et status

// item actif
// next items

// getNextVideo() return an id