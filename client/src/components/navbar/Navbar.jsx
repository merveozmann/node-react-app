import "./navbar.css"
import {MdDashboard,MdShoppingCart} from "react-icons/md"
import { useSelector } from "react-redux"
const Navbar = () => {
  const countTotal = useSelector((state) => state.cart.totalvalue)
  const totalPrice = useSelector((state) => state.cart.totalPrice)

  
  return (
    <div className="navbar__container">
        <div className="navbar__left">
            <MdDashboard className="navbar__icon"/>
            <h3>SHOPHUB</h3>
        </div>
        <div className="navbar__center">
            <a href="#" >Home</a>
            <a href="#" className="active">Shop</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
        </div>
        <div className="navbar__right">
            <p>${totalPrice}</p>
            <MdShoppingCart className="navbar__icon"/>
            <span className="navbar__total">{countTotal}</span>
        </div>
    </div>
  )
}

export default Navbar