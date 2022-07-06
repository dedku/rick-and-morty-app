import { Box, Container, HStack, Spacer, Text } from '@chakra-ui/react'
import Font from '../lib/Font'
import SearchAndFilters from './SearchAndFilters'
import Buttons from './Buttons'
import TableContent from './Table'

function App() {

  return (
    <Box as='main'>
      <Font />
      <Container maxW='container.lg' h='100%' pt={14} fontFamily='Oswald'>
        <Text color='black' fontWeight='bold' fontSize={24} >Characters</Text>
        <HStack pt={8} h='40px'>
          <SearchAndFilters />
          <Spacer />
          <Buttons />
        </HStack>
        <TableContent />
      </Container>
    </Box>
  )
}

export default App
