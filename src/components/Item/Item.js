import './Item.css'

const Item = ({title , price , image , category}) => {
    return (
    <div className='card m-2'>
        <img width={'200px'} src={image} alt={title}/>
        <h2 className='card-title'>{title}</h2>
        <h3  className='card-body'>${price}</h3>
        <h4 className='card-body'>{category}</h4>
    </div>
    )
}

export default Item