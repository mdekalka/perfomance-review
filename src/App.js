import React, { Component } from 'react';
import './App.css';

import Toastr from './components/common/toastr/toastr.container'; 



class App extends Component {
    render() {
        return (
            <div className="App">
                <Toastr></Toastr>
                <div>{this.props.children}</div>
            </div>
        )
    }
}

export default App;
