import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Contact from './pages/contact/Contact';
import Products from './pages/products/Products';
import Shop from './pages/shop/Shop';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/cart' element={ <Cart /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/products' element={ <Products /> } />
        <Route path='/shop' element={ <Shop /> } />
      </Routes>
    </>
  )
}

export default App