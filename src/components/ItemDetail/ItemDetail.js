
import Item from '../Item/Item';

// const ItemDetail = ({ product }) => {
//     return (
//     <div>
//         {
//             product.map((producto) => (
//                 <>
//                     key={producto.id}
//                     title={producto.title} 
//                     price={producto.price} 
//                     image={producto.image}
//                 </>
//             ))
//         }
//     </div>
//     )
// };

// export default ItemDetail

const ItemDetail = ({ product }) => {
    return (
        <Item product ={product}/>
    )
}

export default ItemDetail