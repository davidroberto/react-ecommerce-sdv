import Header from "../component/Header.jsx";
import Footer from "../component/Footer.jsx";
import {useEffect, useState} from "react";
import DisplayProduct from "../component/DisplayProduct.jsx";

const HomePage = () => {

    const [lastProducts, setLastProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=3')
            .then(res => res.json())
            .then(data => {
                setLastProducts(data);
            });

    }, []);


    return(

        <>
            <Header />
            {lastProducts.length === 0 && <p>Loading...</p>}

                <section>

                    <h2>Derniers Produits</h2>
                    {lastProducts.map(product => (
                        <DisplayProduct product={product}/>
                    ))}

                </section>
            <Footer />
        </>

    );
}

export default HomePage;