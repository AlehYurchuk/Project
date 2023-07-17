
import './App.css';
import { Route, Routes} from 'react-router-dom'
import NavMenu from './components/NavMenu';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import CategoriesPage from './pages/CategoriesPage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import SalesPage from './pages/SalesPage';
import ProductInfoPage from './pages/ProductInfoPage';
import ItemsCategoriesPage from './pages/ItemsCategoriesPage';
import NotFoundPage from './pages/NotFoundPage';


function App() {
  return (
    <div>
      <NavMenu/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/categories' element={<CategoriesPage/>}/>
        <Route path='/products' element={<ProductsPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/discount' element={<SalesPage/>}/>
        <Route path='/product/:productId' element={<ProductInfoPage/>}/>
        <Route path='/category/:categoryId' element={<ItemsCategoriesPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
