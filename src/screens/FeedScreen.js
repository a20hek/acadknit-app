import { Box, Text, Flex, Container, ScrollView } from 'native-base';
import React from 'react';
import FeedCard from '../../components/FeedCard';

export default function FeedScreen() {
	return (
		<ScrollView>
			<Flex justifyContent='center' alignItems='center'>
				<FeedCard />
				<FeedCard />
				<FeedCard />
			</Flex>
		</ScrollView>
	);
}
