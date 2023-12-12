import { Box, Center, Text, useColorModeValue } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../Context/Theme";

export const About = () => {
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
    <>
      <Text
        fontSize={{ base: "22px", md: "22px", lg: "40px" }}
        fontWeight={{ base: "600", md: "700" }}
        textAlign="center"
        margin={5}
        marginTop={-50}
      >
        About Me
      </Text>
      <Center style={Theme === "light" ? light : dark}>
        <Box
          style={Theme === "light" ? light : dark}
          maxW={{ base: "350px", md: "450px", lg: "600px", xl: "800px" }}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          rounded={"lg"}
          textAlign={"center"}
        >
          <Text
            textAlign="justify"
            color={useColorModeValue("gray.700", "gray.400")}
            px={5}
            fontSize={{ base: "sm", md: "md", lg: "lg" }}
            style={Theme === "light" ? light : dark}
          >
            A Full Stack Web Developer with expertise in <b>MERN</b> Stack. I've completed a comprehensive <b>Full Stack Web Development Course</b> at Masai and have solved 500+ DSA problems. My tech toolkit includes <b>React, Redux, JAVA, Node, Express, Mongoose, MongoDB, HTML, CSS, JavaScript, and Git.</b> I'm passionate about creating efficient, elegant code and have experience in both front-end and back-end development. I thrive on problem-solving and love collaborating with teams to build innovative solutions. Let's connect and turn ideas into reality through technology.
          </Text>
        </Box>
      </Center>
    </>
  );
};
