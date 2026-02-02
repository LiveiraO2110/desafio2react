import { InfoCard } from "../components/InfoCard"
import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { api } from "../api"
import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AppContext } from "../components/AppContextProvider"

interface UserData {
    email: string
    password: string
    name: string
    balance: number
    id: string
}

export const Conta = () => {
    const navigate = useNavigate()
    const [userData, setUserData] = useState<null | UserData>(null)

    const {id} = useParams()

    const curData: Date = new Date()

    const {isLoggedIn} = useContext(AppContext)

    if(!isLoggedIn) navigate("/")

    useEffect(() =>{
        if(!isLoggedIn){
            navigate("/")
            return
        }   

        const getData = async () =>{
        const data: any | UserData = await api
        setUserData(data)
        }
        
        getData()
    }, [])

    return (
            <Center>
                <SimpleGrid columns = {2} gap = {6} >
                    {
                        userData === null || userData === undefined ? 
                        (
                            <Center>
                                <Spinner size= "xl" color= "white"/>
                            </Center>
                        ) :
                        (
                            <>
                                <InfoCard mainContent = {`Olá, ${userData.name}!`} content= {`Acesso em: ${curData.getDate()}/${curData.getMonth() + 1}/${curData.getFullYear()}`}/>
                                <InfoCard mainContent= "Saldo" content= {`${userData.balance} R$`}/>
                                <InfoCard mainContent="Email:" content={userData.email}/>
                            </>
                        )
                    }
            </SimpleGrid>
        </Center>
    )
}