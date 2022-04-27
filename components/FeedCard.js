import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Code,
  Flex,
  Box,
  Button,
  FlatList,
  Container,
  Badge,
} from 'native-base';
import {Image} from 'react-native';
import React from 'react';

export default function FeedCard({author, image, content}) {
  return (
    <Box w="90%" my="16px">
      <Text fontWeight="bold" fontSize="18px">
        {author}
      </Text>
      <Text fontSize="14px" color="#999">
        Mon, 27 Feb 08:00
      </Text>
      <Image source={image} alt="feed1" width="100%" height="auto" />
      <Text color="#414141">{content}</Text>
    </Box>
  );
}
