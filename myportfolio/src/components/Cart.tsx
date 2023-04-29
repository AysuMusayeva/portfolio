import React, { useContext, useEffect } from 'react'
import { Button, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useCart } from 'react-use-cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img1 from '../images/image_proces.gif'
import { useTranslation } from 'react-i18next';
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
const Cart = () => {
  const [t,i18n]=useTranslation()
    const{isEmpty,items,removeItem,updateItemQuantity,cartTotal,emptyCart}=useCart();
    const [users,setUsers]=useContext<any>(UserContext)
  
    const submitCart=()=>{
      Swal.fire("Your order has been successfully completed")
      setTimeout(()=>{
        emptyCart()
      },2000)
     
     
     }
    const notify:any = () => toast.error('Product deleted!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });;
            if (isEmpty) return <img  className='d-block w-50 emptygif' src="https://cdn.nailib.com/public/images/gifs/cart.gif" alt=""  style={{marginLeft:"300px"}}/>;
  return (
 <div className='cartpage my-4'>
    <Container >
    <h1 className='text-center '>{t('cartlang.0')}</h1>
     <Table  bordered className='text-center tablecart' >
    <thead>
      <tr>
        <th></th>
        <th>{t('cartlang.1')}</th>
        <th>{t('cartlang.2')}</th>
        <th>{t('cartlang.3')}</th>
        <th>{t('cartlang.4')}</th>
        <th>{t('cartlang.5')}</th>
      </tr>
    </thead>
    <tbody>
      {items.map((item:any,i:any)=>(
        <tr>
        <td>{i+1}</td>
        <td><img src={item.img}width={50} alt="" /></td>
        <td>{item.title}</td>
        <td>{(item.price*item.quantity).toFixed(2)}$</td>
        <td><Button variant='success'   onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</Button ><span className='mx-1'>{item.quantity}</span><Button variant='success' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</Button></td>
        <td><Button variant='danger' onClick={()=>{notify(removeItem(item.id))}}><i className="fa-solid fa-trash-can"></i></Button>  <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          />  </td>
      </tr>
      ))}
    </tbody>
  </Table>
  <h3 >{t('cartlang.6')}: {cartTotal}$</h3>
  <button onClick={emptyCart} className="btn btn-outline-danger resp">{t('cartlang.7')}</button>
  {users ? <button className='btn btn-outline-danger resp ms-2' onClick={submitCart}>Submit</button>:<Link to='/login' className=' btn bttn btn-md nav-item'><button className='btn btn-outline-danger ms-2 resp'>{t('cartlang.9')}</button></Link>}
   </Container>
 </div>
  )
}
export default Cart
