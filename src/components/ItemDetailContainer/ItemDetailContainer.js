import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import data from '../mockData';
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState();

    useEffect(() => {
        getProducts.then((products) => {
            const product = products.filter(product => product.id === id)[0]
            setProduct(product);
        });
    }, [id]);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });

    
    return <div className='modal-container'>
                <ItemDetail product={product}/>
            </div>
};

export default ItemDetailContainer;