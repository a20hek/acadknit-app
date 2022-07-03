import {View, Text} from 'native-base';
import React from 'react';
import moment from 'moment';

export default function MessageCard({author, userName, content, timestamp}) {
  const isMyMessage = () => {
    return author === userName;
  };

  const time = moment(timestamp).fromNow();
  return (
    <View
      py={isMyMessage() ? '14px' : '10px'}
      px="16px"
      bg={isMyMessage() ? '#00bb9e' : '#f2f2f7'}
      my="4px"
      rounded="md"
      maxW="80%"
      borderBottomLeftRadius={isMyMessage() ? '15px' : '2px'}
      borderBottomRightRadius={isMyMessage() ? '2px' : '15px'}
      borderTopRadius="15px"
      display="flex"
      alignSelf={isMyMessage() ? 'flex-end' : 'flex-start'}>
      {!isMyMessage() && <Text fontWeight="semibold">{author}</Text>}
      <Text color="#2c2c2e" fontWeight={500}>
        {content}
      </Text>
      <Text display="flex" w="100%" alignSelf="flex-end" fontSize="10px">
        {time}
      </Text>
    </View>
  );
}
