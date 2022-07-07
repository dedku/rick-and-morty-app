import React from 'react';
import  { Text, Tooltip } from '@chakra-ui/react'
import { ChapterProps } from '../../lib/TypesAndInterfaces';

const Chapter: React.FC<ChapterProps> = ({ name, id }: ChapterProps) => <Tooltip label={name}><Text key={id}  noOfLines={1} maxWidth={32}>{name}</Text></Tooltip>;

export default Chapter;
