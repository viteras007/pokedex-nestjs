import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { Colors } from '../styles/typeColors';
import { useTranslation } from 'react-i18next';

function TypeTag({ type }) {
  const { t, i18n } = useTranslation();
  return (
    <Box
      margin={2}
      padding={2}
      color={Colors[type].text}
      bgColor={Colors[type].bg}
      borderRadius={4}
    >
      <Heading as="h5" size={'sm'}>
        { t(`pokemon.type.${type}`) }
      </Heading>
    </Box>
  );
}

export default TypeTag;
