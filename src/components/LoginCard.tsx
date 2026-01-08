// interface ICard {
//     id: number
//     paragraph: string
//     details: string

import { 
    Box,
    Card,
    Center,
    Field,
    Input,
    Stack
} from "@chakra-ui/react"
import { LoginButton } from "./LoginButton"

// }
export const LoginCard = () => {
    return(
        <Center>
            <Box backgroundColor= "white" borderRadius= "15px">
                <Card.Root width = "300px">
                    <Card.Body gap="2">
                        <Card.Title>
                            FAÇA SEU LOGIN
                        </Card.Title>
                        <Stack>
                            <Field.Root>
                                <Field.Label>
                                    Email *
                                </Field.Label>
                                <Input type="text" placeholder="Digite seu Email"/>
                                <Field.Label>
                                    Senha
                                </Field.Label>
                                <Input type="password" placeholder="Digite sua Senha"/>
                            </Field.Root>
                            <LoginButton/>
                        </Stack>
                    </Card.Body>
                </Card.Root>
            </Box>
        </Center>
    )
}