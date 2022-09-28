import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <BrowserRouter>
          <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='contact' element={<div>contact</div>} />
              <Route path='about' element={<div>about</div>} />
              <Route path='details/:id' element={<ItemDetailContainer/>}/>
              <Route path='/category/:categoryName' element={<ItemListContainer/>}/>
            </Routes>
    </BrowserRouter>
  );
}

export default App;
