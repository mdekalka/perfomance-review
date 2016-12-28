import React, { Component } from 'react';


class MoviesAdd extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = props.onSubmit;
    }

    defineModel(event) {
        event.preventDefault();

        const currentModel = {
            title: this.title.value,
            author: this.author.value,
            description: this.description.value,
            rating: this.rating.value
        }

        this.onSubmit(currentModel);

        this.clearModel();
    }

    clearModel() {
        this.title.value = '';
        this.author.value = '';
        this.description.value = '';
        this.rating.value = '';
    }

    render() {
        const { header, buttonLabel } = this.props;

        return (
            <div className="movies-add-wrapper">
                <h3>{header}</h3>
                <form className="form" onSubmit={(event) => {
                    this.defineModel(event);
                }}>
                    <div className="form-group">
                        <label htmlFor="movieTitle">Film title:</label>
                        <input type="text" className="form-control" id="movieTitle" ref={(title) => this.title = title} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="movieAuthor">Film author: </label>
                        <input type="text" className="form-control" id="movieAuthor" ref={(author) => this.author = author} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="movieDescription">Film description: </label>
                        <textarea className="form-control" id="movieDescription" rows="3" ref={(description) => this.description = description} ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="movieRating">Film rating: </label>
                        <input type="number" className="form-control" id="movieRating" ref={(rating) => this.rating = rating} />
                    </div>
                    
                    <button type="submit" className="btn btn-primary">{buttonLabel}</button>
                </form>
            </div>
        )
    }
};

export default MoviesAdd;