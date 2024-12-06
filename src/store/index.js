import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
  },
  mutations: {
    ADD_TO_CART(state, product) {
      const existingItem = state.cart.find((item) => item.id === product.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.cart.push({ ...product, quantity: 1 })
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter((item) => item.id !== productId)
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    UPDATE_QUANTITY(state, { product, quantity }) {
      const existingItem = state.cart.find((item) => item.id === product.id)
      if (existingItem) {
        existingItem.quantity = quantity
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
  },
  getters: {
    cartItems: (state) => state.cart,
    cartTotal: (state) => state.cart.reduce((total, item) => total + item.price * item.quantity, 0),
  },
})
