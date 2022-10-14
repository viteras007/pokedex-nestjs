import { Box, Flex, Progress, Text, Tooltip } from '@chakra-ui/react';
import React from 'react';

function Stats({ pokemon }) {
  return (
    <Flex flexDirection="column" w="full" gap={2}>
      {pokemon.map((stats) => (
        <Tooltip label={stats.stat.name}>
          <Box>
            <Text>{stats.stat.name}</Text>
            <Progress
              value={stats.base_stat}
              colorScheme="yellow"
              borderRadius="10px"
            />
          </Box>
        </Tooltip>
      ))}
    </Flex>
  );
}

export default Stats;
