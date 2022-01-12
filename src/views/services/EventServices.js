import axios from 'axios'

const products = axios.create({
  baseURL: 'http://localhost:8083/product',
  withCredentials: false,
  headers:{
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
  
})
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')

export default{
  getRods(){
    return products.get('/rods')
  },
  getReels(){
    return products.get('/reels')
  },
  createUser(){
    return user.post('http://localhost:8083/user/create')
  },
  
  
}
