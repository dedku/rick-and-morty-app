import { Box, Container, HStack, Spacer, Text } from '@chakra-ui/react'
import Font from '../lib/Font'
import SearchAndFilters from './SearchAndFilters'
import Buttons from './Buttons'

function App() {

  return (
    <Box as='main'>
      <Font />
      <Container maxW='container.lg' h='100%' pt={14}>
        <Text color='black' fontWeight='bold' fontSize={24} fontFamily='Oswald'>Characters</Text>
        <HStack pt={8} h='40px'>
          <SearchAndFilters />
          <Spacer />
          <Buttons />
        </HStack>

      </Container>
    </Box>
  )
}

export default App
