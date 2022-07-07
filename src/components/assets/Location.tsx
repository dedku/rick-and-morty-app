import { Text } from '@chakra-ui/react';
import React from 'react';
import useFetch from '../../hooks/useFetch';
import { Data, FetchResponse } from '../../lib/TypesAndInterfaces';

const Location: React.FC<Data> = ( {url}: Data) => {
    const { data }: FetchResponse = useFetch(url)
    return (data && <Text fontWeight={300}>{data.type}</Text>)
};

export default Location;
