import { Box, Button, HStack, Icon } from "@chakra-ui/react"
import { DeleteIcon, EditIcon} from '@chakra-ui/icons'

const Buttons = () => {
    return (
        <Box fontFamily='Oswald'>
                <HStack >
                    <Button bg='#0088DA' borderColor='#005183' leftIcon={<EditIcon/>} fontWeight='500' fontSize='14px' borderRadius={4} _hover={{ transition: '0.5s', bg: '#005183'}}>
                        Change Status
                    </Button>
                    <Button bg='#BC2626' borderColor='#972121' leftIcon={<DeleteIcon/>} fontSize='14px' fontWeight='500' borderRadius={4} _hover={{ transition: '0.5s', bg: '#972121'}}>
                        Remove Character
                    </Button>
                </HStack>
        </Box>
    )
}

export default Buttons