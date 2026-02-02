import { Button } from "@chakra-ui/react"
import { MouseEventHandler} from "react"

interface CButton{
    onClick: MouseEventHandler<HTMLButtonElement>
}

export const LoginButton = ({onClick}: CButton) => {
    return (
        <Button onClick={onClick} style={{ backgroundColor: "green", color: "white", fontSize: "18px", borderRadius: "8px", cursor: "pointer"}}>
            {"Fazer Login"}
        </Button>
    )
}