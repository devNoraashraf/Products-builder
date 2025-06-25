
import './index.css'
import ProductsCard from './components/ProductsCard'
import { products } from './data';

function App() {
  const productCards = products.map(product => (
    <ProductsCard key={product.id} product={product} />
  ));

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {productCards}
    </div>
  )
}

export default App
