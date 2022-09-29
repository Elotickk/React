import React,{useState} from 'react'

const ItemCount = (props) => {
    const [items, setItems] = useState(0)
    const sumar = () => items < props.stock ? setItems(items + 1) : alert('Ha llegado al maximo de stock') 
    const restar = () => items > 0 ? setItems(items - 1) : alert('No se puede ingresar valores negativos') 
    return (
        <>
        <div>{items}</div>
        <div>stock {props.stock}</div>
        <button onClick = {sumar}>sumar</button>
        <button onClick = {restar}>restar</button>
        </>
    )
}

export default ItemCount