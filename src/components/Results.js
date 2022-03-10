import { Box, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'

function Results() {
  const results = useSelector(state => state.search.results)

  return (
    <Box>
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }}>
        { results.map(movie => {
          return <MovieCard key={movie.imdbID} movie={movie} />
        })}
      </SimpleGrid>
    </Box>
  )
}

export default Results