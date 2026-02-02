import { changeLocalStorage, createLocalStorage, getAllStorage } from "./storage"

const diobank = {
    login: false
}

describe("storage", () => {


    const mockSetItem = jest.spyOn(Storage.prototype, "setItem")
    const mockGetItem = jest.spyOn(Storage.prototype, "getItem")  

    it("Deve retornar no local storage", () => {  
        getAllStorage()
        expect(mockGetItem).toHaveBeenCalledWith("diobank")
    })

    it("Deve criar local storage", () => {
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith("diobank", JSON.stringify(diobank))
    })

    it("Deve mudar a chave 'diobank' no local storage", () => {
        changeLocalStorage(diobank)
        expect(mockSetItem).toHaveBeenCalledWith("diobank", JSON.stringify(diobank))
    })
})