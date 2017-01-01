import React, { Component } from 'react';

import './create-user-profile.container.css';
import utilsService from '../../../utils/utils.service';

class CreateUserProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isCreateMode: true,
            previewImage: ''
        };

        this.model = {};
        this.onUserAdd = this.props.onUserAdd;
    }

    openForm = () => {
        const createMode = this.state.isCreateMode;

        this.setState({ isCreateMode: !createMode });
    }

    onChange = () => {
        utilsService.imageToBytes(this.image).then(imageInfo => {
            this.setState({ previewImage: imageInfo.image});
            // this.model.image = imageInfo.blob;
        })
        .catch(error => {
            console.log(error);
        })
    }

    submitForm = (event) => {
        event.preventDefault();

        this.model.name = this.name.value;
        this.model.title = this.title.value;
        this.model.department = this.department.value;
        this.model.room = this.room.value;
        this.model.mail = this.mail.value;
        // TODO : wtf
        this.model.image = 'https://pp.vk.me/c322825/v322825456/6efe/emn1txC-4yM.jpg'

        this.onUserAdd(this.model);

        this.model = {};
    }

    renderForm(isCreateMode) {
        if (isCreateMode) {
            return (
                 <form className="create-user-form" onSubmit={this.submitForm}>
                    <div className="form-group">
                        <label className="form-label">Name*
                            <input className="form-item" type="text" ref={(name) => this.name = name}/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Title*
                            <input className="form-item" type="text" ref={(title) => this.title = title}/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Department*
                            <input className="form-item" type="text" ref={(department) => this.department = department}/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Room*
                            <input className="form-item" type="text" ref={(room) => this.room = room}/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label className="form-label">E-mail
                            <input className="form-item" type="text" ref={(mail) => this.mail = mail}/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Image
                            <input className="form-item" type="file" onChange={this.onChange} ref={(image) => this.image = image}/>
                        </label>
                        {this.state.previewImage && <img className="preview-image" src={this.state.previewImage} alt="preview" />}
                    </div>
                    <button className="button" type="submit">Add user</button>
                </form>
            )
        } else {
            return null;
        }
    }

    render() {
        return (
            <div>
                <button className="button" onClick={this.openForm}>Create new user</button>
                {this.renderForm(this.state.isCreateMode)}
            </div>
        )
    }
}

export default CreateUserProfile;

