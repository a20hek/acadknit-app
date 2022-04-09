import {Box, Text, Button, Center, Heading} from 'native-base';
import React from 'react';

export default function ClubSearchCard({clubName, clubDesc, memberCount}) {
  return (
    <Box
      mx="5%"
      bg="#fff"
      p="8px"
      my="6px"
      borderColor="#333"
      borderWidth="0.4px"
      borderRadius="8px">
      <Heading fontSize="20px">{clubName}</Heading>
      <Text color="#999">27 Members</Text>
      <Text fontSize="16px">{clubDesc}</Text>
      <Center>
        <Button w="40%" bg="#00bb9e" _text={{color: '#fff'}}>
          Join
        </Button>
      </Center>
    </Box>
  );
}
