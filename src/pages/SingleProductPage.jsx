import Header from "../component/Header.jsx";
import Footer from "../component/Footer.jsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import DisplayProduct from "../component/DisplayProduct.jsx";

const SingleProductPage = () => {

    const {id} = useParams();

    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/' + id)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            });

    }, []);

    return (
        <>
            <Header />
            <p>Détail du produit : </p>

            {product === null ? (
                <p>Loading...</p>
            ) : (
                <DisplayProduct product={product} />
            )}


            <Footer />

        </>
    )
}

export default SingleProductPage;