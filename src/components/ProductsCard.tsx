import Image from "./Image";
import Button from "./Ui/Button";

const ProductsCard = () => {
  return (
    <div className="border rounded-md p-4 flex flex-col m-4 ">

      <Image imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUr4T1HxkhfDA4fJCc2h0K32ZCFeVEDlQTog&s" altText="car" className="w-full h-100 object-cover  rounded-2xl" />
      <h3>car</h3>
      <p>hhhhhhhhhhhhhhhhhhhhhhhhhh</p>
      <div className="flex items-center  my-4 space-x-3 ">
        <span className="w-5 h-5 bg-red-600 rounded-full"></span>
        <span className="w-5 h-5 bg-yellow-600 rounded-full"></span>
        <span className="w-5 h-5 bg-indigo-600 rounded-full"></span></div>
      <div className="flex items-center justify-between">
        <span className="font-bold">$500,000</span>

        <Image imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUr4T1HxkhfDA4fJCc2h0K32ZCFeVEDlQTog&s" altText="car" className="w-5 h-5 rounded-full  object-center" />
      </div>
      <div className="flex items-center justify-between  space-x-4 mt-2">{/* gap-4  */}
        <Button className="bg-blue-500 text-white "
          onClick={() => alert('Edit button clicked!')}
          onBlur={() => console.log('Button blurred')} width="w-fit">Edit 📌</Button>
        <Button className="bg-red-500 text-white " onClick={() => alert('Delete button clicked!')} width="w-fit">Delete</Button>

      </div>
    </div>
  )
}
export default ProductsCard;
