import { Box, SimpleGrid } from '@chakra-ui/layout'
import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../components/MovieCard'

function Watchlist() {
    const watchlist = useSelector((state) => state.watchlist)

    return (
        <div>
            <Box>
                <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }}>
                    {watchlist.map(movie => {
                        return <MovieCard key={movie.imdbID} movie={movie} />
                    })}
                </SimpleGrid>
            </Box>
        </div>
    )
}

export default Watchlist