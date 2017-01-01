import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="App">{this.props.children}</div>
                </div>
            </div>
        );
    }
}

export default App;
