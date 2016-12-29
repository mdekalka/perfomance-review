import axios from 'axios';

const moviesService = {
    config: {
        routes: {
            movies: 'http://localhost:9000/api/movies'
        }
    },

    getMoviesList() {
        const url = this.config.routes.movies;

        return axios.get(url).then(response => {
            return response.data;
        }).catch(error => {
            throw new Error(error);
        });
    },

    getMovieById(id) {
        const url = `${this.config.routes.movies}/${id}`;

        return axios.get(url).then(response => {
            return response.data;
        }).catch(error => {
            throw new Error(error);
        });
    },

    updateMovieById(id, updateMovie) {
        const url = `${this.config.routes.movies}/${id}`;

        return axios.put(url, { movie: updateMovie}).then(response => {
            return response.data;
        }).catch(error => {
            throw new Error(error);
        });
    },

    removeMovieById(id) {
        const url = `${this.config.routes.movies}/${id}`;

        return axios.delete(url).then(response => {
            return response.data;
        }).catch(error => {
            throw new Error(error);
        });
    },

    addNewMovie(movie) {
        const url = this.config.routes.movies;

        return axios.post(url, {movie: movie}).then(response => {
            return response.data;
        }).catch(error => {
            throw new Error(error);
        });
    }
}

export default moviesService;
