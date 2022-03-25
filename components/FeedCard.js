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
import { Image } from 'react-native';
import React from 'react';

export default function FeedCard() {
	return (
		<Box w='90%'>
			<Text fontWeight='bold' fontSize='18px'>
				Pillai College
			</Text>
			<Text fontSize='14px' color='#999'>
				Mon, 27 Feb 08:00
			</Text>
			<Image source={require('../assets/feed1.png')} alt='feed1' width='100%' height='auto' />
			<Text color='#414141'>
				We are organising bla bla bla, interested people can DM us on +91 85648 78569
			</Text>
		</Box>
	);
}
