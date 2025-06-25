import type { Iproduct } from "../interfaces";
import Image from "./Image";
import Button from "./Ui/Button";
interface ProductsCardProps {
    product: Iproduct;
}

const ProductsCard = ({ product }: ProductsCardProps) => {
  const { title, description, price, imageURL, colors } = product;
    return (
        <div className="border rounded-md p-4 flex flex-col m-4 ">

      <Image imgSrc={imageURL} altText={title} className="w-full h-100 object-cover  rounded-2xl" />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="flex items-center  my-4 space-x-3 ">
        {colors?.map((color) => (
          <span key={color} className={`w-5 h-5 bg-${color}-600 rounded-full`}></span>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <span className="font-bold">${price?.toLocaleString()}</span>

        <Image imgSrc={imageURL} altText={title} className="w-5 h-5 rounded-full  object-center" />
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
