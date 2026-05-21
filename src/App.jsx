import { Layout } from './components/Layout/Layout.jsx';
import { Header } from './components/Layout/Header/Header.jsx';
import { Footer } from './components/Layout/Footer/Footer.jsx';
import { Routes, Route } from 'react-router-dom';
import { ProductFormContainer } from './components/Form/ProductFormContainer.jsx';
import { ProductListContainer } from './components/Products/ListContainer/ProductListContainer.jsx';
import { CoworkerContainer } from './components/Coworker/CoworkerContainer.jsx';
import { ProductItem } from './components/Products/ProductItem/ProductItem.jsx';
import { Home } from './components/Layout/Home/Home.jsx';
import './App.css'

function App() {

  return (
      <Routes>
        <Route element={<Layout/>}>
        
        <Route path='/' element ={<Home/>}/>
        <Route path='/catalogo' element={<ProductListContainer/>} />
        <Route path='/alta-producto' element={<ProductFormContainer/>} />
        <Route path='/nuestro-equipo' element={<CoworkerContainer/>}/>
        
        </Route>
      </Routes>
          )
}

export default App
