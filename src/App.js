import React, { Component } from 'react';
import './App.css';
import Playlist from './components/playlist'

class App extends Component {


    componentDidMount() {
        setTimeout(() => this.refs.playlist.addVideo({id:4, title:"La maison dans les bois"}) ,2000);
    }

    render() {
    return (
      <div className="App">
         <Playlist ref="playlist">
         </Playlist>
      </div>
    );
  }
}

export default App;
