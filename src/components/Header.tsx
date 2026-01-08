import {Box, Center, Stack} from "@chakra-ui/react"

export const Header = () =>{
    return(
        <Stack backgroundColor= "white" width= "95%" borderRadius= "10px" color= "white" minHeight= "50px" marginBottom= "50px" marginLeft= "50px">
            <Center>
                <Box marginTop= "10px" fontSize="2xl" color="green" fontFamily= "ui-sans-serif">
                    <h1>DIO BANK</h1>
                </Box>
            </Center>
        </Stack>
    )
}