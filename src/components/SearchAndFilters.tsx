import { Box, Input, Select, HStack } from '@chakra-ui/react'

const SearchAndFilters = () => {
    return (
        <Box >
            <HStack>
                <Input placeholder='Search' w={32} focusBorderColor='blue.500' colorScheme='blue' color='black' bg='white' borderColor='black'  _placeholder={{ opacity: 0.4, color: 'inherit' }} _hover={{ borderColor: 'black'}}/>
                <Select placeholder='Species' w={32} focusBorderColor='blue.500' colorScheme='blue' color='black' bg='white' borderColor='black'  _placeholder={{ opacity: 0.4, color: 'inherit' }} _hover={{ borderColor: 'black'}}/>
                <Select placeholder='Origin' w={32} focusBorderColor='blue.500' colorScheme='blue' color='black' bg='white' borderColor='black'  _placeholder={{ opacity: 0.4, color: 'inherit' }} _hover={{ borderColor: 'black'}}/>
                <Select placeholder='Status' w={32} focusBorderColor='blue.500' colorScheme='blue' color='black' bg='white' borderColor='black'  _placeholder={{ opacity: 0.4, color: 'inherit' }} _hover={{ borderColor: 'black'}}/>
            </HStack>
        </Box>
    )
}

export default SearchAndFilters