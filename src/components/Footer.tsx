import { Blockquote, Stack } from "@chakra-ui/react"

export const Footer = () =>{
    return(
        <Stack height= "80px" backgroundColor= "#ffffffff" color= "white" marginTop="600px">
            <Blockquote.Root colorPalette={"blue"}>
                <Blockquote.Content color="green" fontSize="2xl" fontFamily= "sans-serif">
                    Obrigado por visitar o nosso site
                </Blockquote.Content>
            </Blockquote.Root>   
        </Stack>
    )
}