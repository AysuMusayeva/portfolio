import React, { useState,useContext } from 'react'
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { UserContext } from "../context/UserContext";
import UserData from './UserData';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
// const data = {
//     email:"example@123",
//     password:"example123"
// }
const Login = () => {
  const location=useLocation()
  const [t,i18n]=useTranslation();
  const [users,setUsers] = useContext<any>(UserContext);
  const notif:any = () => toast.success('please,fill input', {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
  const notifay:any = () => toast.success('Your password or email is wrong', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
    const [email,setEmail] = useState();
    const [pass,setPass] = useState();
        const navigate=useNavigate()
    const formSubmit=(e:any)=>{
        e.preventDefault();
        if (!email || !pass) {
        notif()
        }else{
            if (email === UserData.email && pass === UserData.password ) {
              navigate('/dashboard')
             setUsers(true);
            }
          //  else if (location.pathname==="/dashboard"){
          //   navigate("/login")
          //  }
            else{
              notifay()
            }
        }
    }
  return (
   <>
<div className="logIn">
<div className='login my-3'>
<h1 className='text-center logintitle'>{t('dash.5')}</h1>
    <div className="d-flex align-items-center justify-content-center flex-column">
    <Col md={6}>
    
    <Form onSubmit={formSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label className='text-center logintitle logform'>Email</Form.Label>
        <Form.Control onChange={(e:any)=>{setEmail(e.target.value)}} type="text" className='loginform ' placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='text-center logintitle logform'>{t('dash.6')}</Form.Label>
        <Form.Control onChange={(e:any)=>{setPass(e.target.value)}} type="password" className='loginform' placeholder="Enter password" />
      </Form.Group>
      <Button variant="primary" type="submit" className='resp my-5 loginbuton ms-5'>
        {t('dash.5')}
      </Button>
      <ToastContainer
             toastStyle={{ backgroundColor: "#000",color:"red" }}
              position="top-center"
              autoClose={5000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
    </Form> 

    </Col>
     </div>
   
</div>
</div>
   </>
  )
}

export default Login