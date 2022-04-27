import {
  Box,
  Text,
  Flex,
  Container,
  ScrollView,
  Heading,
  View,
} from 'native-base';
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
    <View bg="#fff" flex={1}>
      <ScrollView>
        <Flex justifyContent="center" alignItems="center">
          <FeedCard
            author="Pillai College"
            image={require('../../assets/feed2.jpg')}
            content="✨ Greetings from PCIE ✨
            The finals of the Business Plan Competition will be held on 27th April, at the 6th floor Mini Auditorium"
          />
          <FeedCard
            image={require('../../assets/feed1.png')}
            author="CSI-PCE"
            content="✨ Greetings from CSI PCE ✨

🌀A hearty welcome, warm enough to encompass you all for our grand commencement of CSI-PCE's Sub-Core Auditions Orientation Program .

📈This could be your first step to build your own identity, interact with new people, gain practical knowledge and learn from their experience. 

📝Please note that the orientation is open for all .

🗓️ Date : 22nd Sept, 2021
⏰ Time : 5:30 PM"
          />
          {/* <FeedCard author="AESA MESA" /> */}
        </Flex>
      </ScrollView>
    </View>
  );
}
