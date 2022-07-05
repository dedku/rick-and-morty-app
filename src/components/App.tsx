import { Box, Container, Text } from '@chakra-ui/react'
import Font from '../lib/Font'
function App() {

  return (
    <Box as='main'>
      <Font />
      <Container maxW='container.lg' h='100%' pt={14}>
        <Text color='black' fontWeight='bold' fontSize={24}>Characters</Text>
      </Container>
    </Box>
  )
}

export default App
