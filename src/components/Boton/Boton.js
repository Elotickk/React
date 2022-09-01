import './styles.css';

const Boton = () => {
    const handleClick = () => {
        alert ('Me dieron click')
    }
    return (
    <button onClick={handleClick} className='boton-prueba'>Boton</button>
    )
}

export default Boton;