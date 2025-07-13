import Header from "./components/Header";
import Tasks from "./components/Tasks";
// import Post from "./components/Post";
// import SideMenu from "./components/SideMenu";
import "./index.css";
// import ProductsCard from './components/ProductsCard'
// import { Colors, formData, products } from './data';
// import Model from './components/Ui/Model';
// import { useState, type FormEvent } from 'react';
// import Button from './components/Ui/Button';
// import Input from './components/Ui/Input';
// import type { Iproduct } from './interfaces';
// import { productValidation } from './validation';
// import ErrorMessage from './components/ErrorMessage';
// import CircleColor from './components/Ui/CircleColor';
// import SelectFunctionExample from './components/Ui/Select';

// function App() {
//   const [formState, setFormState] = useState<Iproduct>({
//     title: "",
//     description: "",
//     price: "",
//     imageURL: "",
//     colors: [],
//     category: {
//       name: "",
//       imageU: ""
//     }
//   });

//   const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
//   const [isOpen, setIsOpen] = useState(false);
//   const [tempColor, setTempColor] = useState<string[]>([]);
//   const [productsState, setProductsState] = useState<Iproduct[]>(products);

//   const closeModal = () => setIsOpen(false);
//   const openModal = () => setIsOpen(true);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormState(prev => ({
//       ...prev,
//       [name]: value
//     }));
//     setFormErrors(prevErrors => {
//       const newErrors = { ...prevErrors };
//       delete newErrors[name];
//       return newErrors;
//     });
//   };

//   function submitHandler(event: FormEvent<HTMLFormElement>): void {
//     event.preventDefault();

//     const errors = productValidation(formState);
//     setFormErrors(errors);

//     const hasError = Object.values(errors).some(error => error);
//     if (hasError) {
//       console.log("Form has errors");
//       return;
//     }

//     const newProduct: Iproduct = {
//       ...formState,
//       colors: tempColor
//     };

//     setProductsState(prev => [ newProduct,...prev]);

//     console.log("Form submitted with data:", newProduct);

//     // Reset form
//     setFormState({
//       title: "",
//       description: "",
//       price: "",
//       imageURL: "",
//       colors: [],
//       category: {
//         name: "",
//         imageU: ""
//       }
//     });
//     setTempColor([]);
//     closeModal();
//   }

//   const onCancel = () => {
//     console.log("cancelled");
//     closeModal();
//   };

//   const productCards = productsState.map((product, index) => (
//     <ProductsCard key={index} product={product} />
//   ));

//   const renderform = formData.map(input =>
//     <div key={input.id} className='flex flex-col space-y-2'>
//       <label htmlFor={input.id}>{input.label}</label>
//       <Input
//         type={input.type}
//         id={input.id}
//         name={input.name}
//         placeholder={input.placeholder}
//         value={formState[input.name]}
//         onChange={handleChange}
//       />
//       <ErrorMessage msg={formErrors[input.name]} />
//     </div>
//   );

//   const renderProductColors = Colors.map(color => (
//     <CircleColor
//       key={color}
//       color={color}
//       onClick={() =>
//         setTempColor(prev =>
//           prev.includes(color)
//             ? prev.filter(c => c !== color)
//             : [...prev, color]
//         )
//       }
//     />
//   ));

//   return (
//     <main>
//       <Button onClick={openModal} className="bg-blue-600 hover:bg-blue-700 text-white">
//         Open Modal
//       </Button>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//         {productCards}
//       </div>
//       <Model isOpen={isOpen} closeModal={closeModal} title="My Modal Title">
//         <form className='space-y-2' onSubmit={submitHandler}>
//           {renderform}
//           <div className="flex space-x-2 items-center">
//             {renderProductColors}
//           </div>
//           <div className="flex space-x-2 items-center">
//             {tempColor.map(color => (
//               <span key={color} className='border p-1 rounded' style={{ backgroundColor: color }}>  {color}  </span>
//             ))}
//           </div>
//           <SelectFunctionExample />
//           <div className="flex items-center space-x-4">
//             <Button className="bg-blue-600 hover:bg-blue-700 text-white">
//               Submit
//             </Button>
//             <Button className="bg-blue-500 text-white" onClick={onCancel} type="button">
//               Close Modal
//             </Button>
//           </div>
//         </form>
//       </Model>
//     </main>
//   );
// }

// export default App;
// const Appside=true;
function App() {
  

  return (
    <div className="App "><Header />
      {/* <div className="flex">
             
      <div className="w-[500px] mx-auto my-5 ">
        <Post title="post1" content="This is the content for post 1." > <h6>hiiinoraaaaaa</h6></Post>
        <Post title="post2" content="This is the content for post 2." />
        <Post title="post3" content="This is the content for post 3." />
        <Post title="post4" content="This is the content for post 4." />
        <Post title="post5"  />
      </div>
      <div className=" border border-gray-300  m-7 justify-between">
      <AppsideMenu />

      </div>
      </div> */}
      <Tasks />
    </div>
  );
}
export default App;

// // function AppsideMenu(){
// //   if(Appside=== true){
// //     return <SideMenu />
// //   }else{
// //     return <div className="hidden"></div>
// //   }
// }