// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "../pages/Home";
// import BlogList from "../pages/BlogList";
// import BlogDetails from "../pages/BlogDetails";
// import NotFoundPage from "../pages/NotFoundPage";
// import Header from "../components/Header";
// import { Container } from "react-bootstrap";
// import Dashboard from "../pages/admin/Dashboard";
// import EditBlog from "../pages/admin/update/EditBlog";
// import AddBlog from "../pages/admin/update/AddBlog";
// import Login from "../pages/auth/Login";

// const AppRouter = () => {
//   return (
//     <BrowserRouter>
//       <Header />
//       <Container>
//         <Routes>
//           <Route path="/"  element={<Home />}></Route>
//           <Route path="/blogs"  element={<BlogList />}></Route>
//           <Route path="/blogs/:id" element={<BlogDetails />}></Route>
//           <Route path="/login" element={<Dashboard />}></Route>
//           <Route path="/admin" element={<Dashboard />}></Route>
//           <Route path="/add" element={<AddBlog />}></Route>
//           <Route path="/edit/:id" element={<EditBlog />}></Route>
//           <Route path="*" element={<NotFoundPage />}></Route>
//         </Routes>
//       </Container>
//     </BrowserRouter>
//   );
// };
// // npm i react-router-dom@5
// export default AppRouter;

import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from 'react-use-cart'

// import { CartProvider } from 'react-use-cart'
import Dashboard from '../admin/Dashboard'
import AddBlog from '../admin/update/AddBlog'
import EditBlog from '../admin/update/EditBlog'
import Login from '../auth/Login'
import BlogDetails from '../components/BlogDetails'
import BlogOne from '../components/BlogOne'
import Cart from '../components/Cart'
import Header from '../components/Header'
import ShopDetails from '../components/ShopDetails'
import ShopOne from '../components/ShopOne'
import { ProductProvider } from '../context/ProductContext'
import Adoption from '../pages/Adoption'
import Blog from '../pages/Blog'
import Breeder from '../pages/Breeder'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import { WishlistProvider } from 'react-use-wishlist'
import Homedetails from '../components/Homedetails'
import { MovieProvider } from '../context/MovieContext'
import { PuppieProvider } from '../context/PuppieContext'
import AdoptionDetails from '../components/AdoptionDetails'
import { UserContext, UserProvider } from '../context/UserContext'
import NotFoundPage from '../components/NotFoundPage'
const AppRouter = () => {
  return (
<WishlistProvider>
<CartProvider>

<UserProvider>
<BrowserRouter>
<PuppieProvider>
<MovieProvider>
<ProductProvider>
<Header />
<Routes>
   <Route path='/' element={<Home />}></Route>
   <Route path='/:id' element={<Homedetails />}></Route>
    <Route path='/adoption' element={<Adoption />}></Route>
    <Route path='/adoption/:id' element={<AdoptionDetails />}></Route>
    <Route path='/breeder' element={<Breeder />}></Route>
    <Route path='/shop' element={<Shop />}></Route>
    <Route path='/shopone' element={<ShopOne />}></Route>
    <Route path='/shopdetails' element={<ShopDetails />}></Route>
    <Route path='/blog' element={<Blog />}></Route>
    <Route path='/blogone' element={<BlogOne />}></Route>
    <Route path='/blog/:id' element={<BlogDetails />}></Route>
    <Route path='/dashboard' element={<Dashboard />}></Route>
    <Route path='/add' element={<AddBlog />}></Route>
    <Route path='/edit/:id' element={<EditBlog />}></Route>
    <Route path='/cart' element={<Cart />}></Route>
    {/* <Route path='/wishlist' element={<Wishlist />}></Route> */}
    <Route path='/login' element={<Login />}></Route>
    <Route path='*' element={<NotFoundPage />}></Route>
    {/* <Route path='/blogTwo' element={<BlogTwo />}></Route> */}
    <Route path='/contact' element={<Contact />}></Route>

    </Routes>
</ProductProvider>
</MovieProvider>
</PuppieProvider>
</BrowserRouter>
</UserProvider>
</CartProvider>
</WishlistProvider>



  )
}

export default AppRouter