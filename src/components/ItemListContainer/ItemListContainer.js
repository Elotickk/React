import data from '../mockData';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/itemList';
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
    const [productList, setProductList] = useState ([]);
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
            <ItemList lista={productList}/>
        </>
    )
}

export default ItemListContainer