import {
  Box,
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Colors } from '../styles/typeColors';
import Stats from './Stats';
import TypeTag from './TypeTag';

import { firstLetterUppercase } from '../utils/utils';

function CardPokemon({ url }) {
  const [pokemonDetails, setPokemonDetails] = useState({});
  const pokemonImg =
    pokemonDetails?.sprites?.other['official-artwork']?.front_default;
  const pokemonImgAlt = `${pokemonDetails.name}-image`;
  const pokemonFirstType = pokemonDetails.types
    ? pokemonDetails.types[0].type.name
    : 'normal';
  const abilityFirst = pokemonDetails.abilities
    ? pokemonDetails.abilities[0].ability.name
    : 'none';
  function getData() {
    if (!url) return;
    axios
      .get(url)
      .then(function (response) {
        setPokemonDetails(response?.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }
  useEffect(() => {
    getData();
  }, []);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {/* CARD NA TELA */}
      <Box
        maxW="sm"
        overflow="hidden"
        borderWidth="2px"
        borderColor="gray.200"
        borderRadius="15px"
        w={250}
        h={300}
        onClick={onOpen}
        cursor={'pointer'}
      >
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          h="full"
          w="full"
        >
          <Flex
            h={160}
            w={160}
            bgColor={Colors[pokemonFirstType].bg}
            borderRadius="100%"
            opacity={1}
            alignItems="center"
            justifyContent="center"
          >
            <Image
              src={pokemonImg}
              alt={pokemonImgAlt}
              width={120}
              height={120}
              borderRadius="100%"
            />
          </Flex>
          <Flex mt={6} gap={2} direction="column" alignItems="center">
            <Heading as="h4" fontWeight="bold" size="md">
              {firstLetterUppercase(pokemonDetails.name)}
            </Heading>
            <Text>{pokemonDetails.id}</Text>
          </Flex>
        </Flex>
      </Box>
      {/* MODAL COM DADOS */}
      <Modal isCentered isOpen={isOpen} onClose={onClose} size={'3xl'}>
        <ModalOverlay />
        <ModalContent size={'xl'}>
          <ModalHeader
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={4}
          >
            <Heading as="h4" fontWeight="bold" size="lg">
              {firstLetterUppercase(pokemonDetails.name)}
            </Heading>{' '}
            <Text mt={2} size="lg">
              #{pokemonDetails.id}
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody mb={6}>
            <Box
              display="flex"
              flexDirection="row"
              gap={20}
              alignItems="center"
              justifyContent="center"
            >
              <Flex
                alignItems="center"
                justifyContent="center"
                bgColor={Colors[pokemonFirstType].bg}
                borderRadius="100%"
                p={6}
              >
                <Image
                  src={pokemonImg}
                  alt={pokemonImgAlt}
                  width={120}
                  height={120}
                />
              </Flex>
              <Box>
                <Flex ml={-2}>
                  {pokemonDetails.types &&
                    pokemonDetails.types.map((types) => (
                      <TypeTag type={types.type.name} />
                    ))}
                </Flex>
                <Flex gap={10} mt={4}>
                  <Box>
                    <Text fontWeight="bold">Altura</Text>
                    <Text>{pokemonDetails.height} pés</Text>
                  </Box>
                  <Box>
                    <Text fontWeight="bold">Peso</Text>
                    <Text>{pokemonDetails.weight} oz</Text>
                  </Box>
                  <Box>
                    <Text fontWeight="bold">Hab.</Text>
                    <Text>{abilityFirst}</Text>
                  </Box>
                </Flex>
                <Flex mt={4} flexDirection="column">
                  <Text fontWeight="bold">Status</Text>
                  <Stats pokemon={pokemonDetails.stats} />
                </Flex>
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CardPokemon;
