import { CloseIcon, SearchIcon } from '@chakra-ui/icons';
import { TbPokeball } from 'react-icons/tb';
import Head from 'next/head';
import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Icon,
  Text,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import InfiniteScroll from 'react-infinite-scroll-component';

import CardPokemon from '../components/CardPokemon';
import Layout from '../components/Layout';
import NotFound from '../components/NotFound';
import utils, { exists, isEmptyString } from '../utils/utils';


export default function Home({ data }) {
  const maxPokemonsQtd = data?.count ;
  const { t, i18n } = useTranslation();
  const [pokemons, setPokemons] = useState([...data?.results]);
  const [pokemonsFiltered, setPokemonsFiltered] = useState([]);
  const listToRender =
    pokemonsFiltered.length > 0 ? pokemonsFiltered : pokemons;
  const [filters, setFilters] = useState('');
  const [offset, setOffset] = useState(20);
  const offsetLimit = 20;

  function clearCompleteList() {
    setOffset(0);
    setPokemons([]);
  }

  function clearFilteredList() {
    setPokemonsFiltered([]);
    setFilters('');
  }

  function getDataFiltered() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${filters}`)
      .then(function (response) {
        if (exists(filters) && !isEmptyString(filters)) {
          setPokemonsFiltered([
            {
              name: response?.data.name,
              url: `https://pokeapi.co/api/v2/pokemon/${filters}`,
            },
          ]);
        }
        clearCompleteList();
      })
      .catch(function (error) {
        clearCompleteList();
        setPokemonsFiltered([]);
      });
  }

  function getData() {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon?limit=${offsetLimit}&offset=${offset}`,
      )
      .then(function (response) {
        setPokemons([...pokemons, ...response?.data?.results]);
        setOffset(offset + offsetLimit);
        clearFilteredList();
      })
      .catch(function (error) {
        setPokemons([]);
        setPokemonsFiltered([]);
        setOffset(0);
      });
  }

  return (
    <Layout>
      <Head>
        <title>Pokédex</title>
        <meta property="og:title" content={`Pokédex`} key="title" />
      </Head>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        py={20}
      >
        <Box display='flex' flexDirection='column' gap={6}>
          <InputGroup>
            <InputLeftElement
              children={
                exists(filters) && !isEmptyString(filters) ? (
                  <CloseIcon onClick={getData} color="gray.300" />
                ) : (
                  <SearchIcon color="gray.300" />
                )
              }
            />
            <Input
              placeholder={t('inputSearch')}
              onChange={(event) => setFilters((event.target.value).toLocaleLowerCase())}
              value={filters}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (exists(filters) && !isEmptyString(filters)) {
                    getDataFiltered();
                  } else {
                    getData();
                  }
                }
              }}
            />
          </InputGroup>
          <Box display='flex' gap={4} justifyContent='center' alignItems='center' w='full'>
            <Icon as={TbPokeball} w={10} h={10} color="red.300" />
            <Text>{ listToRender.length } {t('pokemon.listed')}</Text>
          </Box>
        </Box>
        <Box mx={6}>
          {listToRender.length <= 0 && (
            <Flex justifyContent="center" alignItems="center" mt={24}>
              <NotFound />
            </Flex>
          )}
          {listToRender.length <= 1 ? (
            <SimpleGrid columns={5} spacing={16} mt="100px">
              {listToRender.length <= 0 ? (
                <></>
              ) : (
                listToRender.map((pokemon, index) => (
                  <CardPokemon key={pokemon.url} {...pokemon} />
                ))
              )}
            </SimpleGrid>
          ) : (
            <InfiniteScroll
              dataLength={listToRender.length}
              next={getData}
              hasMore={
                listToRender.length === 1
                  ? false
                  : listToRender.length < maxPokemonsQtd
              }
              loader={<h4>Loading...</h4>}
            >
              {listToRender.length <= 0 ? (
                <Flex justifyContent="center" alignItems="center">
                  <NotFound />
                </Flex>
              ) : (
                <SimpleGrid columns={[1, 2, 2, 3, 4]} spacing={16} mt="100px">
                  {listToRender.map((pokemon, index) => (
                    <CardPokemon key={pokemon.url} {...pokemon} />
                  ))}
                </SimpleGrid>
              )}
            </InfiniteScroll>
          )}
        </Box>
      </Flex>
    </Layout>
  );
}

export async function getStaticProps() {
  const responseData = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`)
  const data = await responseData.json();
  console.log('RETORNOU DADOS', data);
  return { 
    props:{ 
      data 
    }
  };
}
