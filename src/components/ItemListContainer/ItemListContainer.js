import data from '../mockData';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/itemList';

const ItemListContainer = ({greeting}) => {
    const [productList, setProductList] = useState ([]);

    useEffect(() => {
        getProducts.then((response) => {
            setProductList(response);
        })
    },[])
    
    const getProducts = new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(data.filter ((prod) => prod.id === '3'))
            }, 2000);
        });

    return (
        <>
            <ItemList lista={productList}/>
        </>
    )
}

export default ItemListContainer