// import { Router } from "react-router-dom";
import Item from "../Item/Item"
import { Link } from 'react-router-dom'
import './ItemList.css'

const ItemList = ({ product }) => {
    return (
    <div className="container">
        {
            product.map((product) => (
                <Link 
                    key={product.id}
                    to={'/details/'+ product.id}
                    style={{ textDecoration: 'none' }}
                >
                    <Item
                        title={product.title} 
                        price={product.price}
                        category={product.category}
                        image={product.image}
                    />
                </Link>
            ))
        }
    </div>
    );
};

export default ItemList