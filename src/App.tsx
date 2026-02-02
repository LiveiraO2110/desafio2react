import { ChakraProvider } from "@chakra-ui/react";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { system } from "./theme";
import { Conta } from "./pages/Conta";
import { AppContextProvider } from "./components/AppContextProvider";
import MainRoutes from "./routes";
import { changeLocalStorage, createLocalStorage, getAllStorage } from "./services/storage";


function App() {

  !getAllStorage() && createLocalStorage()

  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider value={system}>
          <Layout>
            <MainRoutes/>
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
