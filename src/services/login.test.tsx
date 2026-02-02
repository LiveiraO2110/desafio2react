import { LoginAlert } from "./login";

describe("login", () =>{
    const mockEmail:string = "gabriel@gmail.com"
    const mockPassword: string = "123456"

    it("Exibir alert de Bem vindo caso o email seja válido", async () =>{
        const response = await LoginAlert(mockEmail, mockPassword)
        expect(response).toBeTruthy()
    })

    it("Exibir alert de Email Inválido", async () =>{
        const response = await LoginAlert("gabriel", "12345")
        expect(response).toBeFalsy()
    })
})