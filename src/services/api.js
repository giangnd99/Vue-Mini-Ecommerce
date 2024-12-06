import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
})
export const fetchProducts = async () => {
  try {
    const response = await apiClient.get('/products')
    return response.data
  } catch (er) {
    console.error(er)
    throw err
  }
}
export const addProduct = async (product) =>{
  try {
    const response = await apiClient.post('/products', {
      id: product.id,
      name: product.name,
      price: product.price,
    })
    return response.data;
  }catch(error){
    console.error(error)
  }
}
export const updateProduct = async (product)=>{
  try {
    const response = await apiClient.put(`/products/${product.id}`,product);
    return response.data;
    }catch(error){
      console.error(error)
  }
}
export const removeProduct = async (productId) =>{
  try{
    const response = await apiClient.delete(`/products/${productId}`)
    return JSON.stringify(response.data)==='{}';
  }catch(err){
    alert(err);
  }
}

