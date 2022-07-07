import { useState } from 'react'
import { Table } from 'react-chakra-pagination'
import  { Flex, Avatar, Text, Box, Button, Heading, Checkbox, Spinner} from '@chakra-ui/react'
import { CharacterProps, ChapterProps, FetchResponse } from '../lib/TypesAndInterfaces'
import { FiUser } from 'react-icons/fi';
import useFetch from '../hooks/useFetch';
import Chapter from './assets/Chapter';
import Location from './assets/Location';
import IconStatus from './assets/IconsStatus';
interface Items {
    items: CharacterProps[]
}


const TableContent: React.FC<Items> = (props) => {

  const [page, setPage] = useState(1);

  const tableData = props.items.map((char) => ({
    checkbox:(
        <Checkbox borderColor='gray'></Checkbox>
    ),
    name: (
      <Flex align="right" direction='column'>
        <Text>{char.name}</Text>
        <Text fontWeight={300}>{char.species}</Text>
      </Flex>
    ),
    avatar: (
        <Avatar name={char.name} src={char.image} size="sm" mr="4" />
    ),
    origin: (
        <Flex align='right' direction='column'>
          <Text>{char.origin.name}</Text>
          <Location {...char.origin}/>
        </Flex>
    ),
    episodes: (
        <Flex align='right' direction='column'>
          {char.episode.slice(0,2).map((episode:any) =>
          {
            const { data, isPending, error }: FetchResponse = useFetch(episode)
            return <Chapter {...data}/>}
        )}
        </Flex>
    ),
    status: (
        <IconStatus {...char}/>
    )
  }));

  const tableColumns = [
    {
        Header: ( <Checkbox borderColor='gray'></Checkbox>),
        accessor: "checkbox" as const
    },
    {
      Header: "Name",
      accessor: "name" as const
    },
    {
      Header: "Avatar",
      accessor: "avatar" as const
    },
    {
      Header: "Origin",
      accessor: "origin" as const
    },
    {
      Header: "Episodes",
      accessor: "episodes" as const
    },
    {
      Header: "Status",
      accessor: "status" as const
    }
  ];

    return (
    <Box>
      <Box mt={12} color='black' bg='white' rounded='lg' shadow='lg'>
        <Table
          colorScheme="blue"
          emptyData={{
            icon: FiUser,
            text: "Nobody is registered here."
          }}
          totalRegisters={props.items.length}
          page={page}
          onPageChange={(page) => setPage(page)}
          columns={tableColumns}
          data={tableData}
        />
      </Box>
    </Box>
  );
}

export default TableContent