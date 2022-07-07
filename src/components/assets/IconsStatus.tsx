import React from 'react';
import  { Text } from '@chakra-ui/react'
import { IconProps } from '../../lib/TypesAndInterfaces';
import { QuestionOutlineIcon, CheckCircleIcon, InfoOutlineIcon } from '@chakra-ui/icons'

const IconStatus: React.FC<IconProps> = ({ status }: IconProps) => {
    return (
        status=='Dead'?<Text><InfoOutlineIcon color='red' /> {status}</Text> : status=='unknown'?<Text><QuestionOutlineIcon color='gray' /> {status}</Text> : status=='Alive'? <Text><CheckCircleIcon color='green' /> {status}</Text> : null
    )
}

export default IconStatus;
