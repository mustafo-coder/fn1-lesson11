import React, { useState } from 'react'
import { Create, Home, Login} from './components'
import { allProducts } from './utils/data'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  const toggleShowLogin = (bool) => {
    setShowLogin(bool)
  }
  const [products, setProducts] = useState(allProducts);
  return (
    <div>
      <nav className='flex justify-end px-10 py-5 border-b'>
        <button className='btn btn-success' onClick={() => setShowLogin(true)}>Log In</button>
      </nav>
      <Create setProducts={setProducts}/>
      <Home products={products} setProducts={setProducts}/> 
      <Login show={showLogin} toggleShowLogin={toggleShowLogin}/>
    </div>
  )
}

export default App