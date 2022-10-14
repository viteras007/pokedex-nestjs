import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Flex,
  Heading,
  Link,
  useColorMode,
  useColorModeValue,
  Box,
  Image,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useTranslation, withTranslation, Trans } from 'react-i18next';

function Topbar() {
  const { t, i18n } = useTranslation();
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('#FFFFFF', '#1A202C');
  const titleColor = useColorModeValue('#000', '#fbc418');
  const color = useColorModeValue('#1A202C', '#EDEEEE');
  const borderColor = useColorModeValue('#DDD', '#3b3b3f');

  const usaFlag = 'https://cdn.statically.io/flags/us.png';
  const ptFlag = 'https://cdn.statically.io/flags/br.png';

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Flex
      mb={[8, 16]}
      w="full"
      position="fixed"
      zIndex={99999}
      bgColor={bg}
      color={color}
      borderBottom={`1px solid ${borderColor}`}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        pt={4}
        pb={4}
        maxW="1200px"
        margin="0 auto"
        w="full"
        px={[4, 8]}
        h="60px"
      >
        <Flex alignItems="center">
          <NextLink href="/" passHref>
            <Link>
              <Heading
                size="md"
                mr={4}
                display={['none', 'block']}
                color={titleColor}
              >
                Pokédex
              </Heading>
            </Link>
          </NextLink>
        </Flex>
        <Flex justifyContent="center" alignItems="center" gap={6}>
          <Box>
            {colorMode === 'light' ? (
              <MoonIcon
                cursor={'pointer'}
                w={6}
                h={6}
                onClick={toggleColorMode}
              />
            ) : (
              <SunIcon
                cursor={'pointer'}
                w={6}
                h={6}
                onClick={toggleColorMode}
              />
            )}
          </Box>
          <Box display="flex" gap={2}>
            <Image
              borderRadius="10px"
              src={usaFlag}
              width={8}
              height={6}
              alt="US"
              cursor={'pointer'}
              onClick={() => changeLanguage('en')}
            />
            <Image
              borderRadius="10px"
              src={ptFlag}
              width={8}
              height={6}
              alt="PT"
              cursor={'pointer'}
              onClick={() => changeLanguage('pt')}
            />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Topbar;
