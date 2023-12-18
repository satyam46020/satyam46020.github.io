import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useContext } from "react";
import GitHubCalendar from "react-github-calendar";
import { AppContext } from "../Context/Theme";

// export const Github=()=> {
//   const selectLastHalfYear = contributions => {
//       const currentYear = new Date().getFullYear();
//       const currentMonth = new Date().getMonth();
//       const shownMonths = 6;

//       return contributions.filter(activity => {
//           const date = new Date(activity.date);
//           const monthOfDay = date.getMonth();

//           return (
//               date.getFullYear() === currentYear &&
//               monthOfDay > currentMonth - shownMonths &&
//               monthOfDay <= currentMonth
//           );
//       });
//   };
//   return (
//       <GitHubCalendar
//           username="satyam46020"
//           transformData={selectLastHalfYear}
//           labels={{
//               totalCount: '{{count}} commits in last 6 months',
//           }}
//           blockSize={19}
//           blockMargin={5}
//           fontSize={20}
//           hideTotalCount={true}
//           theme={{
//               "light": [
//                   "hsl(0, 0%, 92%)",
//                   "#3498db"
//               ],
//               "dark": [
//                   "hsl(0, 0%, 10%)",
//                   "#3498db"
//               ]
//           }}
//           style={{
//               color: "#3498db",
//               margin: "auto",
//               padding: "15px",
//           }}
//       />
//   );
// }


export const Github = () => {
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
        style={Theme === "light" ? light : dark}
        textAlign="center"
        fontSize={{ base: "20px", md: "22px", lg: "40px" }}
        fontWeight={{ base: "600", md: "700" }}
        letterSpacing={{ base: "3px" }}
        color="black"
      >
        Github Stats
      </Text>
      <Flex
        w={{ base: "70%", md: "80%", lg: "80%" }}
        m="auto"
        mt={{ base: "15px", md: "25px" }}
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <GitHubCalendar
            blockMargin={5}
            blockRadius={7}
            blockSize={14}
            username="satyam46020"
          />
        </Box>
      </Flex>

      <Flex
        width={{ base: "75%", md: "85%", lg: "70%" }}
        m="auto"
        direction={{ base: "column-reverse", md: "row" }}
        justifyContent="center"
        alignItems="center"
        mt={{ base: "10px", md: "30px", lg: "50px" }}
        gap={{ base: "15px", md: "35px", lg: "70px" }}
      >
        <Box>
          <a href="https://github.com/satyam46020">
            <Image
              width={{ base: "250px", md: "480px", lg: "500px" }}
              src={`https://github-readme-streak-stats.herokuapp.com/?user=satyam46020&theme=${
                Theme === "light" ? "blue" : "midnight-green"
              }&show_icons=true&count_private=true&border=lightblue`}
            />
          </a>
        </Box>

        <Box>
          <a href="https://github.com/satyam46020">
            <Image
              width={{ base: "300px", md: "490px", lg: "500px" }}
              src={`https://github-readme-stats.vercel.app/api?username=satyam46020&count_private=true&show_icons=true&theme=${
                Theme === "light" ? "blue" : "midnight-green"
              }`}
            />
          </a>
        </Box>
      </Flex>

      <Flex
        w={{ base: "70%", md: "80%", lg: "30%" }}
        m="auto"
        mt={{ base: "15px", md: "25px" }}
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <a href="https://github.com/satyam46020">
            <Image
              width={{ base: "250px", md: "260px", lg: "350px" }}
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=satyam46020&theme=${
                Theme === "light" ? "blue" : "midnight-green"
              }&show_icons=true&count_private=true`}
            />
          </a>
        </Box>
      </Flex>
    </>
  );
};
