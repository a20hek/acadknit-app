import { Box, Text, Flex, Image } from 'native-base';
import React from 'react';

export default function ClubCard({ name, imgUrl }) {
	return (
		<Box
			borderWidth='0.2px'
			borderColor='#666666'
			height='196px'
			w='176px'
			borderRadius='6px'
			padding='0'
			margin='8px'>
			<Flex flexDir='column'>
				<Image
					borderTopRadius='6px'
					h='154px'
					w='100%'
					source={{ uri: imgUrl }}
					alt='Alternate Text'
				/>
				<Box p='8px'>
					<Text fontWeight='medium' fontSize='16px'>
						{name}
					</Text>
				</Box>
			</Flex>
		</Box>
	);
}
