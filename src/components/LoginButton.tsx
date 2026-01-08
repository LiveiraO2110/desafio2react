import { LoginAlert } from "../services/login"

export const LoginButton = () => {
    return (
        <button onClick={LoginAlert} style={{ backgroundColor: "green", color: "white", fontSize: "18px", borderRadius: "8px", cursor: "pointer"}}>
            Fazer Login
        </button>
    )
}