import {Box, Text, Flex, Container, ScrollView, Heading} from 'native-base';
import React, {useState, useEffect} from 'react';
import FeedCard from '../../components/FeedCard';

export default function FeedScreen() {
  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  return (
    <ScrollView>
      <Flex justifyContent="center" alignItems="center">
        <Heading textAlign="center" m="16px">
          A space for official college committees to communicate what's
          happening
        </Heading>
        <Text>Coming Soon</Text>
        {/* <FeedCard />
        <FeedCard />
        <FeedCard /> */}
      </Flex>
    </ScrollView>
  );
}
