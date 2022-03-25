import { Box, Container, Text, Flex } from 'native-base';
import React from 'react';
import FriendReq from '../../components/FriendReq';

export default function FriendsScreen() {
	return (
		<Box w='100%' m='0' p='0'>
			<Flex justifyContent='center' alignItems='center'>
				<FriendReq />
			</Flex>
		</Box>
	);
}
