import {Box, ChakraProvider} from "@chakra-ui/react";
import {system} from "./theme"
import { Layout } from "./components/Layout";
import { LoginCard } from "./components/LoginCard";

function App() {
  return (
    <ChakraProvider value={system}>
        <Box backgroundColor= "green">
          <Layout>
            <LoginCard/>
          </Layout>
        </Box>
    </ChakraProvider>
  );
}

export default App;
