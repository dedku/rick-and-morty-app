import { Box, TableContainer, Table, Thead, Tr, Th, Tbody, Td, VStack, Text, Checkbox } from "@chakra-ui/react"

const TableContent = () => {
    return (
        <Box pt={12} fontSize={14}>
            <TableContainer rounded='lg' boxShadow='2xl'>
                <Table variant='mytable' >
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Avatar</Th>
                        <Th>Origin</Th>
                        <Th>Episodes</Th>
                        <Th>Status</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>
                            <VStack alignItems='right'>
                                <Text>TestName</Text>
                                <Text fontWeight={300}>Human</Text>
                            </VStack>
                        </Td>
                        <Td>Avatar</Td>
                        <Td>
                            <VStack alignItems='right'>
                                <Text>TestOrigin</Text>
                                <Text fontWeight={300}>Planet</Text>
                            </VStack>
                        </Td>
                        <Td>
                            <VStack alignItems='right'>
                                <Text>TestEpisode</Text>
                                <Text>TestEpisode2</Text>
                            </VStack>
                        </Td>
                        <Td>
                            testStatus
                        </Td>
                    </Tr>
                </Tbody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default TableContent