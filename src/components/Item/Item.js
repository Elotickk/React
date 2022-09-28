import './Item.css'

const Item = ({title , price , image , category}) => {
    return (
    <div className='Item'>
        <img width={'200px'} src={image} alt={title}/>
        <h2 className='Item'>{title}</h2>
        <h3  className='Item'>${price}</h3>
        <h4 className='Item'>{category}</h4>
    </div>
    )
}

export default Item