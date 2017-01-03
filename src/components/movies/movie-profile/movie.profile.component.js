import React, { Component } from 'react';
import isEmpty from 'lodash/isEmpty';

class MovieProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditMode: false
        };
    }

    changeState = () => {
        var state = this.state.isEditMode;

        this.setState({ isEditMode: !state });
    }

    onSave = () => {
        const updatedModel = {
            title: this.title.value,
            author: this.author.value,
            description: this.description.value,
            rating: this.rating.value,
        };

        this.props.onUpdate(this.props.movie._id, updatedModel);

        this.setState({ isEditMode: false });
    }

    profileRender(movies) {
        const { movie } = this.props;

        if (isEmpty(movie)) {
            const { header } = this.props;

            return <h3>{header}</h3>;
        } else {
            const { title, author, description, rating } = this.props.movie;
            const state = this.state;

            return (
                <div>
                    <div className="movie-profile list-group">
                        <div className="list-group-item list-group-item-action">
                            <h4 className="list-group-item-heading">Title</h4>
                            {!state.isEditMode && <p className="list-group-item-text">{title}</p>}
                            {state.isEditMode && <input type="text" className="form-control" defaultValue={title} ref={(title) => this.title = title} />}
                        </div>
                        <div className="list-group-item list-group-item-action">
                            <h4 className="list-group-item-heading">Author</h4>
                            {!state.isEditMode && <p className="list-group-item-text">{author}</p>}
                            {state.isEditMode && <input type="text" className="form-control" defaultValue={author} ref={(author) => this.author = author} />}
                        </div>
                        <div className="list-group-item list-group-item-action">
                            <h4 className="list-group-item-heading">Description</h4>
                            {!state.isEditMode && <p className="list-group-item-text">{description}</p>}
                            {state.isEditMode && <textarea className="form-control" id="movieDescription" defaultValue={description} rows="3" ref={(description) => this.description = description} ></textarea>}
                        </div>
                        <div className="list-group-item list-group-item-action">
                            <h4 className="list-group-item-heading">Rating</h4>
                            {!state.isEditMode && <p className="list-group-item-text">{rating}</p>}
                            {state.isEditMode && <input type="number" className="form-control" defaultValue={rating} ref={(rating) => this.rating = rating} />}
                        </div>
                    </div>
                    <div className="btn-group" role="group">
                        {!this.state.isEditMode && <button type="button" onClick={() => this.changeState()} className="btn btn-primary">Edit</button>}
                        {this.state.isEditMode && <button onClick={() => this.onSave()} type="button" className="btn btn-primary">Save</button>}
                    </div>
                </div>
            )
        }
    }

    render() {
        return <div>{this.profileRender(this.props.movies)}</div>
    }
}


export default MovieProfile;