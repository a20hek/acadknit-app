import {Text, Box, Divider} from 'native-base';
import {Image} from 'react-native';
import React from 'react';

export default function FeedCard({author, image, content}) {
  return (
    <>
      <Box my="16px" mx="32px">
        <Text fontWeight={500} fontSize="18px">
          {author}
        </Text>
        <Text fontSize="14px" color="#999" mb="8px" mt="-4px">
          Mon, 27 Feb 08:00
        </Text>
        <Image source={image} alt="feed1" width="100%" height="auto" />
        <Text color="#414141" mt="2px" lineHeight="sm">
          {content}
        </Text>
      </Box>
      <Divider mt="-2px" w="90%" />
    </>
  );
}
