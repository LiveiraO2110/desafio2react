import { Box } from "@chakra-ui/react"
import { Footer } from "./Footer"
import { Header } from "./Header"

export const Layout = ({children}: any) => {
    return(
        <Box backgroundColor= "green">
            <Header />
            {children}
            <Footer />
        </Box>
    )
}