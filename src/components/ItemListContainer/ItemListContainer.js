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
        getProducts.then((response) => {
            setProductList(response);
        })
    },[])
    
    const getProducts = new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(data)
            }, 2000);
        });

    

    return (
        <>
            <ItemList lista={productList}/>
        </>
    )
}

export default ItemListContainer