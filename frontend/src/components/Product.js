import { Link } from 'react-router-dom'
import './Product.css'


const Product = () => {
  return (
    <div className='product'>
        <img src=
        "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
         alt='productname'/>
        <div className='product_info'>
            <p className=' info__name'>Product 1</p>
            <p className=' info__description'>
            Lorem ipsum kjkfdjkkkjdfbd.dfdffg fdggdf gdfgg fdffdd?    
            </p>
            <p className='info__price'>$499.99</p>

            <Link to ={ `/product/${111}`} className='info__button'>View</Link>
        </div>
      
    </div>
  )
}

export default Product