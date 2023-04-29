import React from 'react'
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import { useCart } from 'react-use-cart';
import { useWishlist } from "react-use-wishlist";
interface shopType{
  id:number,
    img:any,
    title:string,
    desc:string,
    price:any,
    item:any
}
const SingleShop = ({id,img,title,desc,price,item}:shopType) => {
  const [t,i18n]=useTranslation()
  const { addItem } = useCart();
  const { addWishlistItem } = useWishlist();
  const notify:any=()=>toast.success('Product added cart!', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
    const notif:any=()=>toast.success('Product added wishlist!', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  return (
  <Col md={4}>
    <Card className=' mt-5 singleshop '>
    <Card.Img variant="top" src={img} className='imgshops'/>
    <div className="middle d-flex align-items-center justify-content-center " >
    <button onClick={()=>{notif(addWishlistItem(item))}}  className='addbutton ms-5 mb-5 btn btn-light' ><i className="fa-regular fa-heart "></i></button>
    <button onClick={()=>{notify(addItem(item))}}  className='addbutton ms-2 mb-5  btn btn-light'><i className="fa-solid fa-cart-shopping"></i></button>
    </div>
    <Card.Body>
      <Card.Title><h6>{title}</h6></Card.Title>
      <Card.Text>
      <h4>{desc}</h4>
      </Card.Text>
    <div className="d-flex align-items-center justify-content-between">  <Card.Text>
    <h6>  {price}$</h6>
      </Card.Text>
  {/* <Button onClick={()=>{notif(addWishlistItem(item))}}  className='addbutton'><i className="fa-regular fa-heart "></i></Button>
  <Button onClick={()=>{notify(addItem(item))}}  className='addbutton me-5'>{t('changelang3.3')}+</Button> */}
  <ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
  </div>
    </Card.Body>
  </Card>
  </Col>
  )
}

export default SingleShop
