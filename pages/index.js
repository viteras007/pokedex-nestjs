import { CloseIcon, SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import InfiniteScroll from 'react-infinite-scroll-component';

import CardPokemon from '../components/CardPokemon';
import Layout from '../components/Layout';
import NotFound from '../components/NotFound';
import utils, { exists, isEmptyString } from '../utils/utils';

const maxPokemonsQtd = 1154;

export default function Home(props) {
  const { t, i18n } = useTranslation();
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsFiltered, setPokemonsFiltered] = useState([]);
  const listToRender =
    pokemonsFiltered.length > 0 ? pokemonsFiltered : pokemons;
  const [filters, setFilters] = useState();
  const [offset, setOffset] = useState(0);
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
        if (response.data !== undefined) {
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
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log('POKEMONS', pokemons);
  }, [pokemons]);

  return (
    <Layout>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        py={20}
      >
        <Box>
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
              onChange={(event) => setFilters(event?.target?.value)}
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
              {/* <SimpleGrid columns={[1, 2 , null, 3, 4]} spacing={16} mt="100px"> */}
              {listToRender.length <= 0 ? (
                <Flex justifyContent="center" alignItems="center">
                  <Heading> aas</Heading>
                  <NotFound />
                </Flex>
              ) : (
                <SimpleGrid
                  columns={[1, 2, null, 3, 4]}
                  spacing={16}
                  mt="100px"
                >
                  {listToRender.map((pokemon, index) => (
                    <CardPokemon key={pokemon.url} {...pokemon} />
                  ))}
                </SimpleGrid>
              )}
              {/* </SimpleGrid> */}
            </InfiniteScroll>
          )}
        </Box>
      </Flex>
    </Layout>
  );
}
