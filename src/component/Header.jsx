import {Link} from "react-router-dom";

const Header = () => {

    return (
        <header>
            <h1>SDV ecommerce</h1>
            <nav>
                <ul>
                    <li><Link to={"/"}>Accueil</Link></li>
                    <li><Link to={"/products"}>Produits</Link></li>
                </ul>
            </nav>
        </header>
    )

}

export default Header;