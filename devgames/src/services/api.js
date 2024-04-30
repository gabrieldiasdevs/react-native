import axios from 'axios'

// /games?page_size=5&key=b3b4091a91e64e7594837149f6e03037
// b3b4091a91e64e7594837149f6e03037

const api = axios.create({
  baseURL: 'https://api.rawg.io/api'
})

export default api