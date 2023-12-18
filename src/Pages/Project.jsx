import React, { useContext } from "react";
import { Box, Image, Badge, Text, Flex, Button } from "@chakra-ui/react";
import { AppContext } from "../Context/Theme";
import Jiomart from "./ProjectImages/Jiomart.png";
import myntra from "./ProjectImages/myntra.png";
import pharmacy from "./ProjectImages/pharmacy.png";
import Portfolio from "./ProjectImages/Portfolio.png"

export const Project = () => {
  const { Theme } = useContext(AppContext);

  const light = {
    backgroundColor: "white",
    color: "black",
  };

  const dark = {
    backgroundColor: "black",
    color: "white",
  };
  return (
    <Box>
      <Text>
        <Text
          textAlign="center"
          fontSize={{ base: "20px", md: "22px", lg: "40px" }}
          fontWeight={{ base: "600", md: "700" }}
        >
          My Projects
        </Text>
      </Text>

      <Box
        w={"80%"}
        display={{ base: "column", sm: "column", lg: "grid" }}
        gridTemplateColumns="repeat(2,1fr)"
        m={"auto"}
        mt="20px"
        gap={20}
      >
        {/* First Project */}
        <Text left>
          <Box
            style={Theme === "light" ? light : dark}
            w={"100%"}
            borderRadius="lg"
            overflow="hidden"
            backgroundColor={"white"}
            mb={10}
          >
            <Image
              w="full"
              src={myntra}
              alt="myntra"
              h={{ lg: "300px" }}
            />
            <Box p="6">
              <Text
                fontWeight="bold"
                fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
              >
                Myntra Clone
              </Text>
              <Box
                fontSize={{ base: "sm", md: "md", lg: "md" }}
                h={{ lg: "80px" }}
                mb={{ lg: 6 }}
              >
                Myntra is a stylish and user-centric e-commerce platform that brings the latest fashion trends to your fingertips. This Myntra clone website is designed to offer a seamless and enjoyable online shopping experience.
              </Box>
              <Box
                display={{ base: "column", sm: "column", lg: "flex" }}
                alignItems="baseline"
                mt={3}
              >
                <Badge
                  colorScheme="teal"
                  borderRadius="full"
                  px="2"
                  fontSize={{ base: "sm", md: "sm", lg: "sm" }}
                >
                  TECH STACK
                </Badge>
                <Box
                  display={{ base: "grid", sm: "grid", lg: "flex" }}
                  gridTemplateColumns="repeat(1,1fr)"
                  gap={1}
                >
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize={{ base: "xs", md: "sm", lg: "sm" }}
                    textTransform="uppercase"
                    ml="2"
                  >
                    HTML
                  </Box>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize={{ base: "xs", md: "sm", lg: "sm" }}
                    textTransform="uppercase"
                    ml="2"
                  >
                    CSS
                  </Box>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize={{ base: "xs", md: "sm", lg: "sm" }}
                    textTransform="uppercase"
                    ml="2"
                  >
                    Javascript
                  </Box>
                </Box>
              </Box>
            </Box>
            <Flex
              gap={10}
              alignItems="center"
              justifyContent="space-between"
              mb={5}
              ml={7}
            >
              <a
                href="https://github.com/satyam46020/Myntra-clone"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  size={{ base: "xs", md: "md", lg: "md" }}
                  colorScheme="teal"
                  borderRadius={20}
                  borderBottom="5px solid gray"
                >
                  Source Code
                </Button>
              </a>
              <a
                href="https://650b2f84de1078243d876e0c--effervescent-tulumba-71b6b7.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  size={{ base: "xs", md: "md", lg: "md" }}
                  colorScheme="teal"
                  borderRadius={20}
                  borderBottom="5px solid gray"
                >
                  Deploy URL
                </Button>
              </a>
            </Flex>
          </Box>
        </Text>
        {/* {second} */}
        <Text right>
          <Box
            style={Theme === "light" ? light : dark}
            w={"100%"}
            borderRadius="lg"
            overflow="hidden"
            backgroundColor={"white"}
            mb={10}
          >
            <Image
              w="full"
              src={Jiomart}
              alt="Jiomart"
              h={{ lg: "300px" }}
            />
            <Box p="6">
              <Text
                fontWeight="bold"
                fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
              >
                Jio Mart Clone
              </Text>
              <Box
                fontSize={{ base: "sm", md: "md", lg: "md" }}
                h={{ lg: "80px" }}
                mb={{ lg: 6 }}
              >
                Jio Mart is a clone of Jiomart.com. Jio Mart is India's most convenient online grocery website. No more hassles of sweating it out in crowded markets, grocery shops & supermarkets - now shop from the comfort of your home, office or on the move.
              </Box>
              <Box
                display={{ base: "column", sm: "column", lg: "flex" }}
                alignItems="baseline"
                mt={3}
              >
                <Badge
                  colorScheme="teal"
                  borderRadius="full"
                  px="2"
                  fontSize={{ base: "sm", md: "sm", lg: "sm" }}
                >
                  TECH STACK
                </Badge>
                <Box
                  display={{ base: "grid", sm: "grid", lg: "flex" }}
                  gridTemplateColumns="repeat(1,1fr)"
                  gap={1}
                >
                  
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize={{ base: "xs", md: "sm", lg: "sm" }}
                    textTransform="uppercase"
                    ml="2"
                  >
                    React
                  </Box>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize={{ base: "xs", md: "sm", lg: "sm" }}
                    textTransform="uppercase"
                    ml="2"
                  >
                    Redux
                  </Box>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize={{ base: "xs", md: "sm", lg: "sm" }}
                    textTransform="uppercase"
                    ml="2"
                  >
                    Chakra-UI
                  </Box>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize={{ base: "xs", md: "sm", lg: "sm" }}
                    textTransform="uppercase"
                    ml="2"
                  >
                    Javascript
                  </Box>
                </Box>
              </Box>
            </Box>
            <Flex
              gap={10}
              alignItems="center"
              justifyContent="space-between"
              mb={5}
              ml={7}
            >
              <a
                href="https://github.com/satyam46020/jio-mart"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  size={{ base: "xs", md: "md", lg: "md" }}
                  colorScheme="teal"
                  borderRadius={20}
                  borderBottom="5px solid gray"
                >
                  Source Code
                </Button>
              </a>
              <a
                href="https://jiomart-com-rct-201-shashikantrupin.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  size={{ base: "xs", md: "md", lg: "md" }}
                  colorScheme="teal"
                  borderRadius={20}
                  borderBottom="5px solid gray"
                >
                  Deploy URL
                </Button>
              </a>
            </Flex>

          </Box>
        </Text>
        {/* third */}
        <Text right>
          <Box
            style={Theme === "light" ? light : dark}
            w={"100%"}
            borderRadius="lg"
            overflow="hidden"
            backgroundColor={"white"}
            mb={10}
          >
            <Image
              w="full"
              src={pharmacy}
              alt="pharmacy"
              h={{ lg: "300px" }}
            />
            <Box p="6">
              <Text
                fontWeight="bold"
                fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
              >
                Pharmacy
              </Text>
              <Box
                fontSize={{ base: "sm", md: "md", lg: "md" }}
                h={{ lg: "80px" }}
                mb={{ lg: 6 }}
              >
                Pharmacy is an innovative Pharmacy Management System designed to streamline and modernize pharmacy operations. This comprehensive software solution empowers pharmacies to efficiently manage inventory and enhance customer service.
              </Box>
              <Box
                display={{ base: "column", sm: "column", lg: "flex" }}
                alignItems="baseline"
                mt={3}
              >
                <Badge
                  colorScheme="teal"
                  borderRadius="full"
                  px="2"
                  fontSize={{ base: "sm", md: "sm", lg: "sm" }}
                >
                  TECH STACK
                </Badge>
                <Box
                  display={{ base: "grid", sm: "grid", lg: "flex" }}
                  gridTemplateColumns="repeat(1,1fr)"
                  gap={1}
                >
                  
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize={{ base: "xs", md: "sm", lg: "sm" }}
                    textTransform="uppercase"
                    ml="2"
                  >
                    HTML
                  </Box>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize={{ base: "xs", md: "sm", lg: "sm" }}
                    textTransform="uppercase"
                    ml="2"
                  >
                    CSS
                  </Box>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize={{ base: "xs", md: "sm", lg: "sm" }}
                    textTransform="uppercase"
                    ml="2"
                  >
                    Javascript
                  </Box>
                </Box>
              </Box>
            </Box>
            <Flex
              gap={10}
              alignItems="center"
              justifyContent="space-between"
              mb={5}
              ml={7}
            >
              <a
                href="https://github.com/satyam46020/joyful-ring-9720"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  size={{ base: "xs", md: "md", lg: "md" }}
                  colorScheme="teal"
                  borderRadius={20}
                  borderBottom="5px solid gray"
                >
                  Source Code
                </Button>
              </a>
              <a
                href="https://joyful-ring-9720.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  size={{ base: "xs", md: "md", lg: "md" }}
                  colorScheme="teal"
                  borderRadius={20}
                  borderBottom="5px solid gray"
                >
                  Deploy URL
                </Button>
              </a>
            </Flex>

          </Box>
        </Text>
      </Box>
    </Box>
  );
};

