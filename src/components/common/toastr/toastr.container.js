import React, { Component } from 'react';
import assign from 'lodash/assign';
import commonConstants from '../../../constants/constants';
const ReactToastr = require("react-toastr");
const keyMirror = require('keymirror');

import eventEmitter from '../../../utils/event-emitter';
const { ToastContainer } = ReactToastr;
const ToastMessageFactory = React.createFactory(ReactToastr.ToastMessage.animation);
const { TOASTR: { ON_TOASTR_MESSAGE } } = commonConstants;

class Toastr extends Component {
    constructor(props) {
        super(props);

        this.types = keyMirror({
            error: null,
            info: null,
            success: null,
            warning: null
        });

        this.config = {
            timeOut: 2000,
            showAnimation: 'animated fadeInUp',
            hideAnimation: 'animated fadeOutUp'
        };

        this.onToastrMessageReceive = this.onToastrMessageReceive.bind(this); 
    }

    componentDidMount() {
        eventEmitter.on(ON_TOASTR_MESSAGE, this.onToastrMessageReceive);
    }

    componcomponentWillUnmount() {
        eventEmitter.off(ON_TOASTR_MESSAGE, this.onToastrMessageReceive);
    }

    onToastrMessageReceive(options = {}) {
        const validOptions = this.validateOptions(options);

        this.refs.container[validOptions.type](validOptions.message.body, validOptions.message.header, this.config);
    }

    validateOptions(options) {
        const optionsCopy  = assign({}, options);

        for (let key in this.types) {
            if (!this.types[optionsCopy.type]) {
                optionsCopy.type = this.types.error;
            }
        }
        
        return optionsCopy
    }
    
    render() {
        return <ToastContainer 
                ref="container"
                toastMessageFactory={ToastMessageFactory}
                className="toast-top-right"
            />
    }
}
                

export default Toastr;