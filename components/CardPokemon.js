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
  Progress,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

function CardPokemon({ name, imageUrl, imageAlt, number }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
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
            bgColor="#bdff73"
            borderRadius="100%"
            opacity={1}
            alignItems="center"
            justifyContent="center"
          >
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={120}
              height={120}
              borderRadius="100%"
            />
          </Flex>
          <Flex gap={2} direction="column" alignItems="center">
            <Heading as="h4" fontWeight="bold" size="md">
              {name}
            </Heading>
            <Text>{number}</Text>
          </Flex>
        </Flex>
      </Box>
      <Modal isCentered isOpen={isOpen} onClose={onClose} size={'3xl'}>
        <ModalOverlay />
        <ModalContent size={'xl'}>
          <ModalHeader>
            {name} #{number}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody mb={6}>
            <Box display="flex" flexDirection="row" gap={20} alignItems="center" justifyContent="center">
              <Flex alignItems="center" justifyContent="center" bgColor="#bdff73" borderRadius="100%" p={6}>
              <Image
                src={imageUrl}
                alt={imageAlt}
                width={120}
                height={120}
              />
              </Flex>
              <Box>
                <Flex ml={-2}>
                  <Box
                    margin={2}
                    padding={2}
                    color="green"
                    bgColor="#D3D3D3"
                    borderRadius={4}
                  >
                    <Heading as="h5" size={'sm'}>
                      Planta
                    </Heading>
                  </Box>
                  <Box
                    margin={2}
                    padding={2}
                    color="purple"
                    bgColor="#D3D3D3"
                    borderRadius={4}
                  >
                    <Heading as="h5" size={'sm'}>
                      Tóxico
                    </Heading>
                  </Box>
                </Flex>
                <Flex gap={10} mt={4}>
                  <Box>
                    <Text fontWeight="bold">Altura</Text>
                    <Text>0.7m</Text>
                  </Box>
                  <Box>
                    <Text fontWeight="bold">Peso</Text>
                    <Text>69kg</Text>
                  </Box>
                  <Box>
                    <Text fontWeight="bold">Hab.</Text>
                    <Text>overgrow</Text>
                  </Box>
                </Flex>
                <Flex mt={4} flexDirection="column">
                  <Text fontWeight="bold">Fraquezas</Text>
                  <Flex >
                    <Flex ml={-2} mb={-2}>
                      <Box
                        margin={2}
                        padding={2}
                        color="red"
                        bgColor="#D3D3D3"
                        borderRadius={4}
                      >
                        <Heading as="h5" size={'sm'}>
                          Fogo
                        </Heading>
                      </Box>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex mt={4} flexDirection="column">
                  <Text fontWeight="bold">Status</Text>
                  <Flex flexDirection="column" w="full">
                    <Box display="flex" flexDirection="row" >
                      <Text>HP</Text>
                      <Progress value={30} />
                    </Box>
                    <Box display="flex" gap={4} justifyContent="space-between">
                      <Text>Ataque</Text>
                      <Progress value={30} />
                    </Box>
                    <Box display="flex" gap={4} justifyContent="space-between">
                      <Text>Defesa</Text>
                      <Progress value={60} />
                    </Box>
                  </Flex>
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
