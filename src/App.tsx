
import './index.css'
import ProductsCard from './components/ProductsCard'

function App() {
  

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <ProductsCard />
      <ProductsCard />
      <ProductsCard />
      <ProductsCard />

    </div>
  )
}

export default App
