import { Box, Button, Flex, Heading, Stat } from "@chakra-ui/react";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import Stats from "./Components/Stat";
import AllRoutes from "./Components/AllRoutes";
import { Link } from "react-router-dom";

function App() {
  return (
    <Box className="App">
      <Heading>Admin Dashboard</Heading>
      <Flex justifyContent={"center"} gap={"10px"}>
        <Link to={"/"}>
          {" "}
          <Button>Dashboard</Button>{" "}
        </Link>
        <Link to={"/stats"}>
          {" "}
          <Button>STATS</Button>{" "}
        </Link>
      </Flex>
      <AllRoutes />
    </Box>
  );
}

export default App;

