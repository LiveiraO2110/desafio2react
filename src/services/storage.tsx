interface DioBank {
    login: boolean
}

const diobank = {
    login: false
}

export const getAllStorage = () => {
    return localStorage.getItem("diobank")
}

export const createLocalStorage = () => {
    localStorage.setItem("diobank", JSON.stringify(diobank))
}

export const changeLocalStorage = (value: DioBank) => {
    localStorage.setItem("diobank", JSON.stringify(value))
}