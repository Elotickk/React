// import data from '../mockData';
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const ItemDetailContainer = ({}) => {
//     const [productList, setProduct] = useState ([]);
//     const { id } = useParams();

//     useEffect(() => {
//         getProducts.then((response) => {
//             setProduct(response);
//         })
//     },[])

    // const getProduct = () => {
    //     setProductList(data.filter(product => product.id === id))
//     // }

//     const getProducts = new Promise((resolve,reject) => {
//             setTimeout(() => {
//                 const dataFiltrada = data.filter(product => product.id === id)
//                 setProduct(dataFiltrada[0])
//             }, 2000);
//         });

//     return (
//         // <>
//         //     <ItemList lista={productList}/>
//         // </>
//         <div className='modal-container'>
//             Esoty en el item Detail
//             {/* {<ItemDetail product={}/>} */}
//         </div>
//     )
// }

// export default ItemDetailContainer

// import { useEffect, useState } from "react";
// import ItemDetail from "../ItemDetail/ItemDetail";
// import data from '../mockData';
// import { useParams } from "react-router-dom";

// const ItemDetailContainer = () => {
//     const { id } = useParams();

//     const [product, setProduct] = useState({});

//     useEffect(() => {
//         getProducts.then((response) => {
//             setProduct(response);
//         });
//     }, [id]);

//     const getProducts = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(data);
//         }, 2000);
//     });

//     return <div className='modal-container'>
//                 Esoty en el item Detail
//                  {/* {<ItemDetail product={}/>} */}
//             </div>
// };

// export default ItemDetailContainer;

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