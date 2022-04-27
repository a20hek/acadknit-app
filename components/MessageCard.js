import {View, Text} from 'native-base';
import React from 'react';

export default function MessageCard({author, userName, content}) {
  if (author === userName) {
    return (
      <View p="8px" bg="#00bb9e" m="2px" rounded="md" maxW="80%" left="20%">
        {/* <Text fontWeight="semibold">{author}</Text> */}
        <Text>{content}</Text>
      </View>
    );
  }
  return (
    <View p="8px" bg="#f2f2f7" m="2px" rounded="md" maxW="80%">
      <Text fontWeight="semibold">{author}</Text>
      <Text>{content}</Text>
    </View>
  );
}
