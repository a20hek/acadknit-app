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
      p="12px"
      my="6px"
      borderWidth="0.2px"
      borderColor="#666666"
      borderRadius="3px">
      <Flex flexDir="row" justifyContent="space-between">
        <Flex flexDir="row" alignItems="center">
          <Image
            borderRadius="6px"
            h="36px"
            w="36px"
            alt={clubName}
            source={require('../assets/clubdp.png')}
          />
          <Text color="#333" fontWeight={500} fontSize="16px" mx="10px">
            {clubName}
          </Text>
        </Flex>
        <Flex>
          <Button
            // w="80px"
            // height="40px"
            w="80px"
            size="sm"
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
      <Text fontSize="14px" color="#4d4d4d" mt="8px">
        {clubDesc}
      </Text>
    </Box>
  );
}
