import axios from 'axios'

export const api = axios.create({
    baseURL: 'ttps://viacep.com.br/ws/'
})