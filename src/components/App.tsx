import { Box, Container, HStack, Spacer, Heading, Center, Spinner, Text } from '@chakra-ui/react'
import Font from '../lib/Font'
import SearchAndFilters from './SearchAndFilters'
import Buttons from './Buttons'
import { FetchResponse } from '../lib/Types';
import useFetch from '../hooks/useFetch';

function App() {
  const { data, statusContent, isPending, error }: FetchResponse = useFetch('https://rickandmortyapi.com/api/character')

  if (!isPending) console.log(data);

  return (
    <Box as='main'>
      <Font />
      {error && <Container  maxW='container.lg'>
        <Center h='100vh'>
          <Box bg='red' p={12} rounded='lg'>
            <Text>{statusContent}</Text>
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
        <HStack pt={8} h='40px'>
          <SearchAndFilters />
          <Spacer />
          <Buttons />
        </HStack>
      </Container>}
    </Box>
  )
}

export default App
