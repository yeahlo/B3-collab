import React, { Component } from 'react';
import Search from './components/search/Search';
import './App.css';
import Playlist from './components/playlist'
import History from "./components/history/History";

class App extends Component {


    componentDidMount() {
        setTimeout(() => this.refs.playlist.addVideo({id:4, title:"La maison dans les bois"}) ,2000);
    }

    render() {
    return (
      <div className="App">
        <Search/>
         <Playlist ref="playlist">
         </Playlist>
      </div>
    );
  }
}

export default App;
