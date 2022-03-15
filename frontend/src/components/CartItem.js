import { Link } from 'react-router-dom'
import './CartItem.css'


const CartItem = () => {
  return (
    <div className='Cartitem'>
        <div className='cartitem__image'>
            <img src="https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=8" 
            alt='product name' />

        </div>
        <Link to={`/product/${111}`} className="cartitem__name">
            <p>Product 1</p>
        </Link>
        <p className= "cartitem__price">$499.99</p>

        <select>
            <option value ="1">1</option>
            <option value ="2">2</option>
            <option value ="3">3</option>
            <option value ="4">4 </option>
        </select>
        <button className='cartitem__deleteBtn'>
            <i className='fas fa-trash'></i>
            </button>
        </div>
  )
}

export default CartItem