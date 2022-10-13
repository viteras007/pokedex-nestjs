import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

function CardPokemon({ name, imageUrl, imageAlt, number}) {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      borderColor="#bdff73"
      bgColor="#bdff73"
      w={200}
      h={300}
    >
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        h="full"
        w="full"
      >
        <Image
          mb={12}
          src={imageUrl}
          alt={imageAlt}
          width={120}
          height={120}
        />
        <Flex gap={2} direction="column" alignItems="center">
          <Heading as="h4" fontWeight="bold" size="md">
            {name}
          </Heading>
          <Text>{number}</Text>
        </Flex>
      </Flex>
    </Box>
  );
}

export default CardPokemon;
