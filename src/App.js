import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import History from "./components/history/History";

class App extends Component {
    constructor() {
        super();
        this.state = {
            videos: [
                {
                    id: "testid",
                    title : "testtitre",
                    description: "testDescription",
                },
                {
                    id: "testid2",
                    title : "testtitre",
                    description: "testDescription",
                }
            ]
        }
    }

    render() {
        return (
            <div className="App">
                <History videos={this.state.videos}/>
            </div>
        );
    }

}


export default App;

