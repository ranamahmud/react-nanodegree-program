import React, { Component } from 'react'
import MovieCard from './MovieCard';

export class Dashboard extends Component {
    render() {
        const { usersByMovie, users, movies } = this.props;
        const movieCards = Object.keys(movies).map(
            id => (
                <MovieCard
                    key={id}
                    users={users}
                    usersWhoLikedMovie={usersByMovie[id]}
                    movieInfo={movies[id]}
                />
            )
        )
        return (
            <ul>{movieCards}</ul>
        )
    }
}

export default Dashboard
