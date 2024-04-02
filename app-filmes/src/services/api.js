import axios from 'axios'

// 20240402181811
// https://sujeitoprogramador.com/
// r-api/?api=filmes

const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com/'
})

export default api