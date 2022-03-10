import { Box, Image, Button } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMovie, removeMovie } from '../redux/reducers/watchlistReducer'

function MovieCard(props) {
    const { movie } = props
    const dispatch = useDispatch()
    const watchlist = useSelector((state) => state.watchlist)

    const handleAddMovie = () => {
        dispatch(addMovie(movie))
    }

    const handleRemoveMovie = () => {
        dispatch(removeMovie(movie))
    }

    const isAlreadySaved = watchlist.find((savedMovie) => {
        return savedMovie.imdbID === movie.imdbID
    });

    return (
        <Box maxW='sm' m="3" borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image w="full" src={movie.Poster} alt={movie.Title} />
            <Box p="3">
                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h2'
                    lineHeight='tight'
                    isTruncated
                >
                    {movie.Title}
                </Box>
                <Box mb="3">
                    {movie.Year}
                </Box>
                {isAlreadySaved ? (
                    <Button onClick={handleRemoveMovie} colorScheme='red'>Remove</Button>
                ) : (
                    <Button onClick={handleAddMovie} colorScheme='blue'>Add</Button>
                )}
            </Box>
        </Box>
    )
}

export default MovieCard