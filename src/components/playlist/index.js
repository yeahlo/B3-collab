import React, {Component} from 'react';
import '../../App.css';

class playlist extends Component {


    constructor() {
        super();

        this.state = {
            videoPlaylist: [
            ],
            currentVideo: null,
        }
    }

    deleteVideo(video) {
        let i = 0;
        for(i ; i < this.state.videoPlaylist.length ; i++) {
            if(this.state.videoPlaylist[i].id === video.id) {
                break;
            }
        }

        this.setState(state => {
            let copy = this.state.videoPlaylist.slice(0);
            copy.splice(i,1);
            return {
                videoPlaylist : copy
            }
        })
    }

    onNext() {

        this.setState(state => {
            let copy = this.state.videoPlaylist.slice(0);
            copy.splice(0,1);
            return {
                videoPlaylist : copy
            }
        }, () => {
            let next = this.state.videoPlaylist[0];
            if(next) {
                this.props.onVideoSelected(next);
            }

        })


    }

    getNextVideo() {
        return this.state.videoPlaylist[0];
    }

    addVideo(video)
    {
        let copy = this.state.videoPlaylist.slice();
        copy.push(video);

        this.setState({videoPlaylist: copy}, () => {
            if(this.state.videoPlaylist.length === 1 ) {
                this.props.onVideoSelected(video);
            }
        });

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
                <button  onClick={() => this.onNext()}>Passer à la vidéo suivante >></button>
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