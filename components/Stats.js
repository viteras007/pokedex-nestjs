import { Box, Flex, Progress, Text, Tooltip } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

function Stats({ pokemon }) {
  const { t, i18n } = useTranslation();
  return (
    <Flex flexDirection="column" w="full" gap={2}>
      {pokemon.map((stats) => (
        <Tooltip key={stats.stat.name} label={t(`pokemon.status.${stats.stat.name}`)}>
          <Box>
            <Text>{t(`pokemon.status.${stats.stat.name}`)}</Text>
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
