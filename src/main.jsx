import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductProvider from './assets/components/context-api/product-context/ProductContext.jsx'
import Cart from './app/Cart.jsx'
import { CartProvider } from './assets/components/context-api/product-context/CartContext.jsx'
import { UserProvider } from './assets/components/context-api/user-context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <ProductProvider>
    <CartProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </CartProvider>
  </ProductProvider>
)
