import { 
    Box,
    Center
} from "@chakra-ui/react"

export const LoginCard = ({children}: any) => {

    return(
        <Center>
            <Box backgroundColor= "white" borderRadius= "15px">
                {children}
            </Box>
        </Center>
    )
}