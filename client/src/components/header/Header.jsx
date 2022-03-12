import "./header.css"

const Header = () => {
  return (
    <div className="header__container">
        <div className="header__head">
            <div className="header__left">
                <a href="">Home</a>
                <a href="" className="header__link_active"> / Product</a>
            </div>
            <div className="header__center">
                <h3>SHOP</h3>
            </div>
            <div className="header__right">
                <p>Showing 1-12 of 36 results</p>
                <select name="" id="">
                    <option value="" selected>Default sorting</option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default Header