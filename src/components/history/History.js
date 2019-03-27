// old items
// callback onVideoSelected ex: this.props.onVideoSelected(id)

import React, {Component} from 'react';
import './history.css';

class History extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: this.props.videos
        }
    }

    onHistoryClicked(video) {
        if (this.props.onVideoSelected) {
            this.props.onVideoSelected(video.id);
        }
        else {
            console.log("OnVideoSelected existe pas");
        }
    }

    getView() {
        let listVideos = this.state.videos;
        console.log(listVideos);
        const rendervideos = listVideos.map((video) =>
            <li key={video.id} className={video.status}>
                <a onClick={() => this.onHistoryClicked(video)}>
                    {video.id} - {video.title}
                </a>
            </li>
        );
        return rendervideos;
    }

    render() {
        return (
            <div className="History">
                <h2>History</h2>
                <ul>
                    {this.getView()}
                </ul>
            </div>
        );
    }
}

export default History;
