import React from 'react'
import { Box, Flex, Input, Button } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { setResults, setSearch } from '../redux/reducers/searchReducer'

function SearchForm() {
    const term = useSelector(state => state.search.term)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const encodedTerm = encodeURIComponent(term);
        fetch(`https://www.omdbapi.com/?apikey=59354c85&s=${encodedTerm}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.Search)
                dispatch(setResults(data.Search))
                dispatch(setSearch(''))
            })
    }

    return (
        <Box p={5}>
            <form onSubmit={handleSubmit}>
                <Flex maxW={400} mx='auto'>
                    <Input
                        mr={3}
                        value={term}
                        onChange={(e) => dispatch(setSearch(e.target.value))}
                    />
                    <Button type="submit">Search</Button>
                </Flex>
            </form>
        </Box>
    )
}

export default SearchForm