import data from '../mockData';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/itemList';
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
    const [product, setProductList] = useState ([]);
    const { categoryName } = useParams();
    console.log(categoryName)

    const getProductsCategory = async () => {
        if (categoryName) {
            const response = await data.filter((item) => item.category === categoryName)
            setProductList(response)
        }else {
            const response = await data;
            setProductList(response)
        }
    }

    useEffect(() => {
        getProductsCategory();
    },[categoryName]);
    
    
    

    return (
        <>
            <ItemList product={product}/>
        </>
    )
}

export default ItemListContainer