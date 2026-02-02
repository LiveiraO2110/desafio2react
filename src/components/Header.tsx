import {Box, Button, Center, Flex, Spacer, Stack} from "@chakra-ui/react"
import { AppContext } from "./AppContextProvider"
import { useContext } from "react"
import { changeLocalStorage } from "../services/storage"

export const Header = () =>{
    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)

    function logout () {
        changeLocalStorage({
            login: false
        })
        setIsLoggedIn(false)
    }

    return(
        <Flex 
        backgroundColor= "white" 
        width= "95%" 
        borderRadius= "10px" 
        color= "white" 
        minHeight= "50px" 
        marginBottom= "50px" 
        marginLeft= "50px"
        >
            <Center>
                <Box marginTop= "10px" fontSize="2xl" color="green" fontFamily= "ui-sans-serif">
                    <h1>DIO BANK</h1>
                </Box>
            </Center>

            <Spacer/>
            
            <Button
            onClick={logout}
            disabled={!isLoggedIn}>
                Sair
            </Button>
        </Flex>
    )
}