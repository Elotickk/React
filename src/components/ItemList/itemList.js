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
                        product = {product}                       
                    />
                </Link>
            ))
        }
    </div>
    );
};

export default ItemList