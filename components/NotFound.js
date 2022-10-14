import React from 'react';
import { Flex, Heading, Icon } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { TbPokeball } from 'react-icons/tb';

function NotFound(props) {
  const { t, i18n } = useTranslation();
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={10}
    >
      <Icon as={TbPokeball} w={100} h={100} color="red.500" />
      <Heading>{t('pokemon.notFound')}</Heading>
    </Flex>
  );
}

export default NotFound;
