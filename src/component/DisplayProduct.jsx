const DisplayProduct = ({product}) => {

    return (
        <div key={product.id} style={{border: '1px solid black', margin: '10px', padding: '10px'}}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Prix: ${product.price}</p>
            <img src={product.image} alt={product.title} style={{width: '100px'}} />
        </div>
    )

}

export default DisplayProduct;