import {Box, Text, Input} from 'native-base';
import React from 'react';

export default function Message({content, createdAt}) {
  return (
    <Box>
      <Text>{content}</Text>
      <Input />
    </Box>
  );
}
