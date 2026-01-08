import { LoginAlert } from "./login";

describe("login", () =>{

    const mockAlert = jest.fn()
    window.alert = mockAlert
    it("Exibir alert de Bem vindo", () =>{
        LoginAlert()
        expect(mockAlert).toHaveBeenCalledWith("Bem-vindo, Gabriel!")
    })
})