import React, { Component } from 'react';
import './Search.css';

class Search extends Component {

    constructor(props){
        super(props);

        this.state = {
            "results": []
        };

        this.TOKEN_KEY = "AIzaSyAoX3lUWUEdg_eXEl2S6iOr06EtccrqhUk";
    }

    search(){
        const searchVal = document.querySelector('#input').value;

        if(searchVal.trim() === ""){
            return;
        }

        const request = "https://www.googleapis.com/youtube/v3/search?" +
            "key="+this.TOKEN_KEY +
            "&part=snippet" +
            "&maxResults=5" +
            "&q=" + searchVal;
        fetch(request)
            .then(data => data.json())
            .then(rawData => {
                this.setState({
                    "results": rawData.items
                });
            });
    }

    render() {
        return (
            <div>
                <input id={"input"} type={"text"} placeholder={"Rechercher une vidéo..."} className={"searchbar"}/>
                <input type={"submit"} onClick={this.search.bind(this)} value={"Ok"}/>

                <div className={"results"}>
                    {this.state.results.map((video, index) =>
                        <div key={"row" + index} className={"row"} onClick={() => this.props.onVideoSelected({id : video.id.videoId, title : video.snippet.title})}>
                            <div className={"thumbnail"}>
                                <img key={"img" + index} src={video.snippet.thumbnails.default.url}/>
                            </div>
                            <div className={"text"}>
                                <span key={"title" + index} className={"title"}>
                                    {video.snippet.title}
                                </span>
                                <span key={"description" + index} className={"description"}>
                                    {video.snippet.description}
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Search;
