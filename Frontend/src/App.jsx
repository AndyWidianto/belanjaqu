import './index.css';

//define page
import { Route, Routes } from 'react-router';
import HomeLayout from './Layout/HomeLayout';
import HomeCategories from './View/Home/Categories';
import HomeDelivery from './View/Home/Delivery';
import Home from './View/Home/Home';
import CardProduk from './View/CardProduk';
import Profile from './View/Profile/Profile';
import Media from './View/Profile/Media';
import Toko from './View/Profile/Toko';
import Chatting from './View/Chatting/Chatting';
import NotFound from './Errors/404';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />} >
          <Route index element={<Home />} />
          <Route path="categories" element={<HomeCategories />} />
          <Route path="delivery" element={<HomeDelivery />} />
        </Route>
        <Route path='/produk' element={<CardProduk />} />
        <Route path='/profile' element={<Profile />} >
          <Route index element={<Media />} />
          <Route path='/profile/produk' element={<Toko />} />
        </Route>
        <Route path='/message' element={<Chatting />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
