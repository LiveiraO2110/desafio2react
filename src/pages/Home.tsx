import { LoginButton } from "../components/LoginButton"
import { LoginCard } from "../components/LoginCard"
import { Box, Card, Field, Input, Stack } from "@chakra-ui/react"
import { LoginAlert } from "../services/login"
import { useContext, useState } from "react"
import { AppContext } from "../components/AppContextProvider"
import { useNavigate } from "react-router-dom"
import { changeLocalStorage } from "../services/storage"

export const Home = () =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState<string>("")
    const {setIsLoggedIn} = useContext(AppContext)
    const navigate = useNavigate()

    async function login () {
        const response: boolean = await LoginAlert(email, password)

        if (!response){
            alert("Email ou Senha Inválido")
            return
        }
        
        setIsLoggedIn(true)
        changeLocalStorage({
            login: true
        })
        navigate(`/conta/1`)
    }

    return (
        <Box backgroundColor= "green">
            <LoginCard>
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
                                <Input type="text" placeholder="Digite seu Email" value={email} onChange={(event) => {
                                    setEmail(event.target.value)
                                }}/>
                                <Field.Label>
                                    Senha
                                </Field.Label>
                                <Input type="password" placeholder="Digite sua Senha" value={password} onChange={(e) => {
                                    setPassword(e.target.value)
                                }}/>
                            </Field.Root>
                            <LoginButton onClick={login}/>
                        </Stack>
                    </Card.Body>
                </Card.Root>
            </LoginCard>
        </Box>
    )
}