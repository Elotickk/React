// import { Router } from "react-router-dom";
import Item from "../Item/Item"
import { Link } from 'react-router-dom'
import './ItemList.css'

const ItemList = ({lista}) => {
    return (
    <div className="container">
        {
            lista.map((item) => (
                <Link 
                    key={item.id}
                    to={'/details/'+ item.id}
                    style={{ textDecoration: 'none' }}
                >
                    <Item
                        title={item.title} 
                        price={item.price}
                        category={item.category}
                        image={item.image}
                    />
                </Link>
            ))
        }
    </div>
    );
};

export default ItemList