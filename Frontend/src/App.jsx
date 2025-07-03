import './index.css';

//define page
import { Route, Routes } from 'react-router';
import HomeLayout from './View/Layout/HomeLayout';
import HomeCategories from './View/Home/Categories';
import HomeDelivery from './View/Home/Delivery';
import Home from './View/Home/Home';
import CardProduk from './View/Products/CardProduk';
import Profile from './View/Profile/Profile';
import Media from './View/Profile/Media';
import Toko from './View/Profile/Toko';
import Chatting from './View/Chatting/Chatting';
import NotFound from './Errors/404';
import DetailProduct from './View/Products/Detail';
import ReviewProduct from './View/Products/Review';
import Carts from './View/Carts';
import Login from './View/Auth/Login';
import Register from './View/Auth/Register';
import Payment from './View/Payment/Payment';
import AddProduct from './View/Products/AddProduct';
import EditProfile from './View/Profile/Edit';
import SearchProduct from './View/Products/SearchProduk';
import LocationPayment from './View/Payment/LocationPayment';
import MethodPayment from './View/Payment/MethodPayment';
import FormChatting from './View/Chatting/FormChatting';
import DetailReview from './View/Products/DetailReviewProduct';
import Dashboard from './View/Dashboard/Dashboard';
import UpdateCoverProfile from './View/Profile/updateCoverProfile';

function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment/new-location" element={<LocationPayment />} />
        <Route path="/payment/method" element={<MethodPayment />} />
        <Route path="/" element={<HomeLayout />} >
          <Route index element={<Home />} />
          <Route path="categories" element={<HomeCategories />} />
          <Route path="delivery" element={<HomeDelivery />} />
          <Route path="search/:product" element={<SearchProduct />} />
          <Route path='product' element={<CardProduk />} >
            <Route path='/product' element={<DetailProduct />} />
            <Route path='review' element={<ReviewProduct />} />
          </Route>
          <Route path='/profile' element={<Profile />} >
            <Route index element={<Media />} />
            <Route path='produk' element={<Toko />} />
          </Route>
          <Route path='carts' element={<Carts />} />
        </Route>
        <Route path='/profile/edit-cover' element={<UpdateCoverProfile />} />
        <Route path='/message' element={<Chatting />} >
          <Route path=':name' element={<FormChatting />} />
        </Route>
        <Route path='/add-product' element={<AddProduct />} />
        <Route path='/edit-profile' element={<EditProfile />} />
        <Route path='/detail-review/product/id' element={<DetailReview />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
