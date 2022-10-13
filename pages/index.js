import { Box, Flex, Input, Container, Image, Text  } from '@chakra-ui/react'
import Layout from '../components/Layout';

export default function Home() {
  const propertyCard = {
    name: 'Bulbasaur',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    imageAlt: 'Bulbasaur-img',
    number: '003'
  }
  return (
    <Layout>
      <Flex flexDirection="column" justifyContent="center" alignItems="center" py={20}>
        <Box>
          <Input placeholder='Buscar...' size='lg' />
        </Box>
        <Flex mt="100px" gap={16}>
          <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' w={200} h={300}>
            <Flex direction="column" alignItems="center" justifyContent="center" h="full" w="full">
              <Image mb={12} src={propertyCard.imageUrl} alt={propertyCard.imageAlt} width={120} height={120}/>
              <Flex gap={2} direction="column" alignItems="center">
                <Text>{propertyCard.name}</Text>
                <Text>{propertyCard.number}</Text>
              </Flex>
            </Flex>
          </Box>

          <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' w={200} h={300}>
            <Flex direction="column" alignItems="center" justifyContent="center" h="full" w="full">
              <Image mb={12} src={propertyCard.imageUrl} alt={propertyCard.imageAlt} width={120} height={120}/>
              <Flex gap={2} direction="column" alignItems="center">
                <Text>{propertyCard.name}</Text>
                <Text>{propertyCard.number}</Text>
              </Flex>
            </Flex>
          </Box>

          <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' w={200} h={300}>
            <Flex direction="column" alignItems="center" justifyContent="center" h="full" w="full">
              <Image mb={12} src={propertyCard.imageUrl} alt={propertyCard.imageAlt} width={120} height={120}/>
              <Flex gap={2} direction="column" alignItems="center">
                <Text>{propertyCard.name}</Text>
                <Text>{propertyCard.number}</Text>
              </Flex>
            </Flex>
          </Box>

          <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' w={200} h={300}>
            <Flex direction="column" alignItems="center" justifyContent="center" h="full" w="full">
              <Image mb={12} src={propertyCard.imageUrl} alt={propertyCard.imageAlt} width={120} height={120}/>
              <Flex gap={2} direction="column" alignItems="center">
                <Text>{propertyCard.name}</Text>
                <Text>{propertyCard.number}</Text>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Layout>
  )
}
