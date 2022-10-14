import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Flex,
  Heading,
  Link,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';

function Topbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('#FFFFFF', '#1A202C');
  const titleColor = useColorModeValue('#000', '#fbc418');
  const color = useColorModeValue('#1A202C', '#EDEEEE');
  const borderColor = useColorModeValue('#DDD', '#3b3b3f');

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
        <Flex justifyContent="center" alignItems="center">
          {colorMode === 'light' ? (
            <MoonIcon w={6} h={6} onClick={toggleColorMode} />
          ) : (
            <SunIcon w={6} h={6} onClick={toggleColorMode} />
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Topbar;
