import {Box, Text, Button, Image, Flex} from 'native-base';
import React from 'react';

export default function ClubSearchCard({
  clubName,
  clubDesc,
  memberCount,
  clubID,
}) {
  return (
    <Box
      mx="5%"
      bg="#fff"
      p="8px"
      my="6px"
      borderWidth="0.2px"
      borderColor="#666666"
      borderRadius="8px">
      <Flex flexDir="row" justifyContent="space-between">
        <Flex flexDir="row" alignItems="center">
          <Image
            borderRadius="6px"
            h="42px"
            w="42px"
            alt={clubName}
            source={require('../assets/clubdp.png')}
          />
          <Text color="#333" fontWeight={500} fontSize="18px" mx="10px">
            {clubName}
          </Text>
        </Flex>
        <Flex>
          <Button
            w="80px"
            height="40px"
            bg="#00bb9e"
            _text={{
              color: '#fff',
              fontWeight: '600',
              margin: '0px',
              padding: '0px',
            }}>
            Join
          </Button>
        </Flex>
      </Flex>
      <Text fontSize="16px" color="#4d4d4d" my="8px">
        {clubDesc}
      </Text>
    </Box>
  );
}
