import './index.css'
import ProductsCard from './components/ProductsCard'
import { formData, products } from './data';
import Model from './components/Ui/Model';
import { useState, type FormEvent } from 'react';
import Button from './components/Ui/Button';
import Input from './components/Ui/Input';
import type { Iproduct } from './interfaces';
import { productValidation } from './validation';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [formState, setFormState] = useState<Iproduct>({
    title: "",
    description: "",
    price: "",
    imageURL: "",
    colors: [],
    category: {
      name: "",
      imageU: ""
    }
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
     setFormErrors(prevErrors => {
    const newErrors = { ...prevErrors };
    delete newErrors[name]; // يمسح الخطأ بمجرد ما المستخدم يكتب
    return newErrors;
  });
  };

  function submitHandler(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    
    const errors = productValidation(formState);
    setFormErrors(errors);

    const hasError = Object.values(errors).some(error => error);
    if (hasError) {
      console.log("Form has errors");
      return;
    }

    console.log("Form submitted with data:", formState);
    closeModal();
  }

  const onCancel = () => {
    console.log("cancelled");
    closeModal();
  };

  const productCards = products.map(product => (
    <ProductsCard key={product.id} product={product} />
  ));

  const renderform = formData.map(input =>
    <div key={input.id} className='flex flex-col space-y-2'>
      <label htmlFor={input.id}>{input.label}</label>
      <Input
        type={input.type}
        id={input.id}
        name={input.name}
        placeholder={input.placeholder}
        value={formState[input.name]}
        onChange={handleChange}
      />
      <ErrorMessage msg={formErrors[input.name]} />
    </div>
  );

  return (
    <main>
      <Button onClick={openModal} className="bg-blue-600 hover:bg-blue-700 text-white">
        Open Modal
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {productCards}
      </div>
      <Model isOpen={isOpen} closeModal={closeModal} title="My Modal Title">
        <form className='space-y-2' onSubmit={submitHandler}>
          {renderform}
          <div className="flex items-center space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Submit
            </Button>
            <Button className="bg-blue-500 text-white" onClick={onCancel} type="button">
              Close Modal
            </Button>
          </div>
        </form>
      </Model>
    </main>
  );
}

export default App;
