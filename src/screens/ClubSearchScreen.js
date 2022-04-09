import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {getUser, clubByclubName} from '../graphql/queries';
import {useRoute} from '@react-navigation/native';

export default function ClubSearchScreen() {
  const route = useRoute();

  const [input, setInput] = useState(route?.params?.searchQuery);

  return (
    <View>
      <Text>ClubSearch</Text>
      <Text>{input}</Text>
    </View>
  );
}
