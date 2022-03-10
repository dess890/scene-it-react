const defaultState = []

const WATCHLIST_ADD_MOVIE = 'WATCHLIST_ADD_MOVIE'
const WATCHLIST_REMOVE_MOVIE = 'WATCHLIST_REMOVE_MOVIE'

export function addMovie(movie) {
    return {
        type: WATCHLIST_ADD_MOVIE,
        movie
    }
}

export function removeMovie(movie) {
    return {
        type: WATCHLIST_REMOVE_MOVIE,
        movie
    }
}

export function watchlistReducer(state = defaultState, action) {
    switch (action.type) {
        case WATCHLIST_ADD_MOVIE:
            return [
                ...state,
                action.movie
            ]
        case WATCHLIST_REMOVE_MOVIE:
            return []
        default:
            return state
    }
}
