import React from 'react';

import {Text, Box} from 'native-base';

export default function EmptyState({query}) {
  return (
    <Box bg="#fff" flex={1} mx="32px" top="20%">
      <Text fontWeight={500} fontSize="20px" textAlign="center" color="#737373">
        Uh-oh!
      </Text>
      <Text fontSize="16px" textAlign="center" fontWeight={400} color="#999">
        Unfortunately we couldn't find any results for
        <Text bold> "{query}"</Text>
      </Text>
    </Box>
  );
}
