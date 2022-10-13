import { Box, Flex, Input, Heading, Image, Text  } from '@chakra-ui/react'
import Layout from '../components/Layout';
import CardPokemon from '../components/CardPokemon';

export default function Home() {
  const propertyCard = {
    name: 'Bulbasaur',
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
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
          <CardPokemon {...propertyCard}/>
          <CardPokemon {...propertyCard}/>
          <CardPokemon {...propertyCard}/>
          <CardPokemon {...propertyCard}/>
        </Flex>
      </Flex>
    </Layout>
  )
}
