
import './index.css'
import ProductsCard from './components/ProductsCard'
import { products } from './data';
import Model from './components/Ui/Model';
import { useState } from 'react';
import Button from './components/Ui/Button';


function App() {
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  
  const productCards = products.map(product => (
    <ProductsCard key={product.id} product={product} />
  ));

  return (
    <main>
      <Button onClick={openModal} className="bg-blue-600 hover:bg-blue-700 text-white ">
        Open Modal
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {productCards}
      </div>
      <Model isOpen={isOpen} closeModal={closeModal} title="My Modal Title">

        <div className="flex  items-center space-x-2">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white ">
            Submit
          </Button>
          <Button className="mt-4 bg-blue-500 text-white ">
            Close Modal
          </Button>
        </div>
      </Model>
    </main>
  )
}

export default App
