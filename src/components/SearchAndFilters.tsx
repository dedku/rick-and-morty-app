import { useState } from 'react';
import { Box, Input, Select, HStack } from '@chakra-ui/react'
import { FetchData } from '../lib/TypesAndInterfaces'

interface ChildProps {
    data: FetchData;
    setFilteredResults?: any
}

const SearchAndFilter: React.FC<ChildProps> = ({data, setFilteredResults}) => {

    const [searchInput, setSearchInput] = useState('');
    const searchItems = (searchValue:any) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = data.filter((item:any) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            console.log('a')
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(data.results)
            console.log(data)
        }
    }

    return (
            <Box >
                <HStack>
                    <Input placeholder='Search' w={32} focusBorderColor='blue.500' colorScheme='blue' color='black' bg='white' borderColor='black'  _placeholder={{ opacity: 0.4, color: 'inherit' }} _hover={{ borderColor: 'black'}} onChange={(e) => searchItems(e.target.value)}/>
                    <Select placeholder='Species' w={32} focusBorderColor='blue.500' colorScheme='blue' color='black' bg='white' borderColor='black'  _placeholder={{ opacity: 0.4, color: 'inherit' }} _hover={{ borderColor: 'black'}}/>
                    <Select placeholder='Origin' w={32} focusBorderColor='blue.500' colorScheme='blue' color='black' bg='white' borderColor='black'  _placeholder={{ opacity: 0.4, color: 'inherit' }} _hover={{ borderColor: 'black'}}/>
                    <Select placeholder='Status' w={32} focusBorderColor='blue.500' colorScheme='blue' color='black' bg='white' borderColor='black'  _placeholder={{ opacity: 0.4, color: 'inherit' }} _hover={{ borderColor: 'black'}}/>
                </HStack>
            </Box>
        )
    }

export default SearchAndFilter