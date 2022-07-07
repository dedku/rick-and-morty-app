import { useState } from 'react'
import { Box, Container, Stack, Spacer, Heading, Center, Spinner, Text } from '@chakra-ui/react'
import Font from '../lib/Font'
import SearchAndFilters from './SearchAndFilters'
import Buttons from './Buttons'
import { FetchResponse } from '../lib/TypesAndInterfaces';
import useFetch from '../hooks/useFetch';
import TableContent from './Table'

async function App() {
  const { data, isPending, error }: FetchResponse = await useFetch('https://rickandmortyapi.com/api/character')
  const [filteredResults, setFilteredResults] = useState([])
  const [search, setSearch] = useState('')

  return (
    <Box as='main'>
      <Font />
      {error && <Container  maxW='container.lg'>
        <Center h='100vh'>
          <Box bg='red' p={12} rounded='lg'>
            <Text>{error}</Text>
          </Box>
        </Center>
      </Container>}
      {isPending &&
        <Center  h='100vh'>
          <Spinner size='xl' color='red.500' />
        </Center>}
      {data && <Container maxW='container.lg' h='100%' pt={14} fontFamily='Oswald'>
        <Heading color='black' fontWeight='bold' fontSize={24} >Characters</Heading>
        <Stack pt={8} pb={{sm:'16',md:'8'}} h='40px' direction={{sm: 'column', md:'row'}}>
          <SearchAndFilters data={data} setFilteredResults={setFilteredResults}/>
          <Spacer />
          <Buttons />
        </Stack>
        <TableContent items={filteredResults}/>
      </Container>}
    </Box>
  )
}

export default App
