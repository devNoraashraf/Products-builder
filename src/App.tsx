
import './index.css'
import ProductsCard from './components/ProductsCard'
import { formData, products } from './data';
import Model from './components/Ui/Model';
import { useState } from 'react';
import Button from './components/Ui/Button';
import Input from './components/Ui/Input';
import type { Iproduct } from './interfaces';



function App() {
  const [formState, setFormState] = useState<Iproduct>({
    title: "",
    description: "",
    price:"",
    imageURL: "",
    colors: [],
    category: {
      name: "",
      imageU: ""
    }
  })
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () =>setIsOpen(false)


  const openModal = () =>setIsOpen(true)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

   setFormState({
      ...formState,
      [name]: value
   })
  }
  const productCards = products.map(product => (
    <ProductsCard key={product.id} product={product} />
  ));

  const renderform = formData.map(input =>
    <div className='flex flex-col space-y-2'>
      <label htmlFor={input.id}> {input.label}</label>
      <Input type={input.type} id={input.id} name={input.name} placeholder={input.placeholder}  value={formState[input.name]} onChange={handleChange} />
    </div>
  );

  return (
    <main>
      <Button onClick={openModal} className="bg-blue-600 hover:bg-blue-700 text-white ">
        Open Modal
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {productCards}
      </div>
      <Model isOpen={isOpen} closeModal={closeModal} title="My Modal Title">
        {renderform}
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
