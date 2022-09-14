import Item from "../Item/Item"

const ItemDetail = ({lista}) => {
    return (
    <div>
        {
            lista.map((product) => (
                <Item
                    key={product.id}
                    title={product.title} 
                    price={product.price} 
                    image={product.image}
                />
            ))
        }
    </div>
    );
};

export default ItemDetail