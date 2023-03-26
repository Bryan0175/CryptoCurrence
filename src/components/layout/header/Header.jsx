import './header.css'
import Logo from '../../../assets/brands/logo_crypto.png'
import UserProfile from '../../../assets/img/user.webp'
import { FaBell, FaMailBulk, FaSearch } from "react-icons/fa";

const Header = ({currencys, fun, cur}) => {
    return (
        <header>
            <img src={Logo} alt="Logo Crypto Currence" />
            <div className='search-input'>
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder='Buscar'
                />
                <FaSearch className='search' />
            </div>
            <div className='select-button'>
                <select value={cur} name="coinSelect" id="coinSelect" onChange={_ => { fun(document.getElementById("coinSelect").value) }}>
                    {currencys.map((item, index) => <option value={item} key={index} >{item}</option>)}
                </select>
            </div>
            <nav>
                <FaBell className='icon' />
                <FaMailBulk className='icon' />
                <img src={UserProfile} alt="Usuario" />
            </nav>
        </header>
    );
}

export default Header;