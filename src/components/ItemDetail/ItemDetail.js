
const ItemDetail = ({ product }) => {
    return (
    <div>
        {
            product.map((producto) => (
                <>
                    key={producto.id}
                    title={producto.title} 
                    price={producto.price} 
                    image={producto.image}
                </>
            ))
        }
    </div>
    )
};

export default ItemDetail
