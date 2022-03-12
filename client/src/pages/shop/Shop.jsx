import { MdOutlineFitScreen, MdShoppingBag, MdAddCircleOutline } from "react-icons/md"
import { HiOutlineMinusCircle } from "react-icons/hi"
import { useSelector, useDispatch } from "react-redux"
import { decrement, increment ,addProduct} from "../../redux/cartSlice"

import "./shop.css"
import { useState } from "react"
const Shop = () => {
    const count = useSelector((state) => state.cart.value)

    const dispatch = useDispatch()
    const [price, setPrice] = useState(239);
    const [state, setState] = useState(false)
    const openShopcart = () => {
        if (state == false) {
            document.querySelector(".shop__cart").classList.add("shop__cart-open")
            setState(true)
        }
        if (state == true) {
            document.querySelector(".shop__cart").classList.remove("shop__cart-open")
            setState(false)
        }


    }
    return (
        <div className="shop__container">

            <p className="shop__item-p1">Scroll to down</p>
            <div className="shop__items">
                <article className="shop__item">
                    <div className="shop__item-title">
                        <MdOutlineFitScreen className="shop__item__title-icon" />
                        <MdShoppingBag onClick={openShopcart} className="shop__item__title-icon " />
                        <div className="shop__cart">
                            <input type="text" placeHolder="1" value={count} />
                            <MdAddCircleOutline className="shop__cart-icon" onClick={() => dispatch(increment())} />
                            <HiOutlineMinusCircle className="shop__cart-icon" onClick={() => dispatch(decrement())} />
                            <button onClick={() => dispatch(addProduct({count,price}))}>Add</button>
                        </div>
                    </div>
                    <div className="shop__item-image">
                        <img src="https://i.ibb.co/s5phbkg/shoe-golden.png" />
                    </div>
                    <div className="shop__item-footer">
                        <h3>Popular Shoe Trends</h3>
                        <span>$236.00</span>
                    </div>
                </article>
                <article className="shop__item">
                    <div className="shop__item-title">
                        <MdOutlineFitScreen className="shop__item__title-icon" />
                        <MdShoppingBag className="shop__item__title-icon" />
                    </div>
                    <div className="shop__item-image">
                        <img src="https://i.ibb.co/s5phbkg/shoe-golden.png" />
                    </div>
                    <div className="shop__item-footer">
                        <h3>Popular Shoe Trends</h3>
                        <span>$236.00</span>
                    </div>
                </article>
                <article className="shop__item">
                    <div className="shop__item-title">
                        <MdOutlineFitScreen className="shop__item__title-icon" />
                        <MdShoppingBag className="shop__item__title-icon" />
                    </div>
                    <div className="shop__item-image">
                        <img src="https://i.ibb.co/s5phbkg/shoe-golden.png" />
                    </div>
                    <div className="shop__item-footer">
                        <h3>Popular Shoe Trends</h3>
                        <span>$236.00</span>
                    </div>
                </article>
                <article className="shop__item">
                    <div className="shop__item-title">
                        <MdOutlineFitScreen className="shop__item__title-icon" />
                        <MdShoppingBag className="shop__item__title-icon" />
                    </div>
                    <div className="shop__item-image">
                        <img src="https://i.ibb.co/s5phbkg/shoe-golden.png" />
                    </div>
                    <div className="shop__item-footer">
                        <h3>Popular Shoe Trends</h3>
                        <span>$236.00</span>
                    </div>
                </article>
                <article className="shop__item">
                    <div className="shop__item-title">
                        <MdOutlineFitScreen className="shop__item__title-icon" />
                        <MdShoppingBag className="shop__item__title-icon" />
                    </div>
                    <div className="shop__item-image">
                        <img src="https://i.ibb.co/s5phbkg/shoe-golden.png" />
                    </div>
                    <div className="shop__item-footer">
                        <h3>Popular Shoe Trends</h3>
                        <span>$236.00</span>
                    </div>
                </article>
                <article className="shop__item">
                    <div className="shop__item-title">
                        <MdOutlineFitScreen className="shop__item__title-icon" />
                        <MdShoppingBag className="shop__item__title-icon" />
                    </div>
                    <div className="shop__item-image">
                        <img src="https://i.ibb.co/s5phbkg/shoe-golden.png" />
                    </div>
                    <div className="shop__item-footer">
                        <h3>Popular Shoe Trends</h3>
                        <span>$236.00</span>
                    </div>
                </article>
                <article className="shop__item">
                    <div className="shop__item-title">
                        <MdOutlineFitScreen className="shop__item__title-icon" />
                        <MdShoppingBag className="shop__item__title-icon" />
                    </div>
                    <div className="shop__item-image">
                        <img src="https://i.ibb.co/s5phbkg/shoe-golden.png" />
                    </div>
                    <div className="shop__item-footer">
                        <h3>Popular Shoe Trends</h3>
                        <span>$236.00</span>
                    </div>
                </article>
                <article className="shop__item">
                    <div className="shop__item-title">
                        <MdOutlineFitScreen className="shop__item__title-icon" />
                        <MdShoppingBag className="shop__item__title-icon" />

                    </div>
                    <div className="shop__item-image">
                        <img src="https://i.ibb.co/s5phbkg/shoe-golden.png" />
                    </div>
                    <div className="shop__item-footer">
                        <h3>Popular Shoe Trends</h3>
                        <span>$236.00</span>
                    </div>
                </article>
            </div>
            <p className="shop__item-p2">Scroll to up</p>
        </div>
    )
}

export default Shop
