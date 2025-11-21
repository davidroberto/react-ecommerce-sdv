import Header from "../component/Header.jsx";
import Footer from "../component/Footer.jsx";
import {useEffect, useState} from "react";
import DisplayProduct from "../component/DisplayProduct.jsx";

const ListProductsPage = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            });

    }, []);

    return (
        <>
            <Header />
            <p>Liste des produits</p>

            {products.length === 0 && <p>Loading...</p>}

            <section>

                {products.map(product => (
                    <DisplayProduct product={product}/>
                ))}

            </section>

            <Footer />
        </>
    )
}

export default ListProductsPage;