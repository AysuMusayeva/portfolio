import React, {  useContext, useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import photo1 from '../images/logo.png'
import photo5 from '../images/img3.png'
import { Button, NavDropdown, Row, Table } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import { useTranslation } from "react-i18next";
import '../i18n/i18next'
import { ToastContainer, toast } from "react-toastify";
import { UserContext } from "../context/UserContext";
const Header = () => {
  const {addItem} = useCart();
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
  const [t,i18n]=useTranslation();
  const handleclick=(lang:any)=>{
    i18n.changeLanguage(lang)
  }
  const { totalItems } = useCart() 
  const [isopen, setIsopen] = useState(false);
  const { items,isWishlistEmpty ,removeWishlistItem,totalWishlistItems} = useWishlist();
  const Togglewishlist = () => {
    isopen === true ? setIsopen(false) : setIsopen(true);
}
const notifayy:any = () => toast.error('Product deleted!', {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  });;
  const [users,setUsers] = useContext<any>(UserContext);
   const [theme, setTheme] = useState("bg-white");
	const toggleTheme = () => {
		if (theme == "bg-white") {
			localStorage.setItem("theme", "bg-dark");
			setTheme("bg-dark");
		} else {
			localStorage.setItem("theme", "bg-white");
			setTheme("bg-white");   
		}
 
	};
	useEffect(() => {
		const localTheme = localStorage.getItem("theme");
		if (localTheme) {
			setTheme(localTheme);    
		}
    document.body.className = theme;
	}, [theme]);
  return (
<>
<header className="head ">
<Navbar   expand="lg"  >
    <Container >
      <Navbar.Brand ><Link to='/home' className="active"><img className="kutto d-block " width={200} src={photo1} alt="" /></Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link ><NavLink to='/'  className='mx-2'>{t('entertext.0')}</NavLink></Nav.Link>
          <Nav.Link ><NavLink to='/adoption' className='mx-2'>{t('entertext.1')}</NavLink></Nav.Link>
          <Nav.Link ><NavLink to='/breeder' className='mx-2'>{t('entertext.2')}</NavLink></Nav.Link>

<div className="dropdownmenu" >
<ul >
  <li >
    <Link className="a mt-2 mx-2 shops" to="/shopone" >{t('entertext.3')}</Link>
    <ul id="subMenu">
      <li><Link className="a" to="/shopone">{t('entertext.7')}</Link></li>
      <li><Link className="a" to="/shopdetails" >{t('entertext.8')}</Link></li>
    </ul>
  </li>
</ul>
</div>
          <Nav.Link ><NavLink to='/blog' className='mx-2'>{t('entertext.4')}</NavLink></Nav.Link>
          <Nav.Link ><NavLink to='/contact' className='mx-2 '>{t('entertext.5')}</NavLink></Nav.Link>
        </Nav>   

<Link to='/cart'>
<button type="button" className="btn position-relative">
<i className="fa-solid fa-cart-shopping"></i>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
 {totalItems}
  </span>
</button>
</Link>
<button type="button" className="btn position-relative"  onClick={Togglewishlist}>
<i className="fa-regular fa-heart "></i>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
  {totalWishlistItems}
  </span>
</button>

            <div className="dropdownmenu" >
<ul >
  <li >
    <i className="fa-solid fa-globe ms-2"></i>
    <ul id="subMenu">
      <li> <Link to='#' className="a"><Button onClick={()=>handleclick('az')} className=" lang ">az</Button></Link></li>
      <li><Link  to='#' className="a"> <Button onClick={()=>handleclick('en')} className=" lang ">en</Button></Link></li>
    </ul>
  </li>
</ul>
</div>
    
      </Navbar.Collapse>
      <div>
        </div>
    <button onClick={toggleTheme} className=" btn moon">🌙</button> 
       <Link to="/login" className='btn btn-danger resp moon ms-3'>{users ? <Button variant="danger" className="resp moon" onClick={()=>{setUsers(false)}}>{t('dash.7')}</Button>:<>{t('dash.5')}</>}</Link>
       {users ? <span className="ms-3  moon"> Aysu</span>:<span></span>}
    </Container>
    <img  src={photo5}  alt="" className='cloud w-100 d-block' />
  </Navbar>
</header>



 <div className={` sidebarr ${isopen===true?'active':''}`}>
 <div className="position-fixed wishlist">   <i className="fa-solid  fa-xmark m-3" onClick={Togglewishlist}></i>
    <hr className="mt-5 ms-2"/>  <p className="ms-3">{t('cartlang.8')}</p></div>
 
     <div className="sd-headerr mt-5">
       {items.map((item:any,i:any)=>(
  <div className="card mb-0" style={{maxWidth: 400 ,'border':'none'}}>
  <div className="row g-0 mt-5">
    <div className="col-md-4 ">
      <img src={item.img} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between">
          <div> 
           <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.price}$</p>
     
        </div>
        
        <div>
        <Button onClick={()=>{notify(addItem(item))}} variant="success" className="mb-3">{t('changelang3.3')}</Button> <ToastContainer
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
          /> 
          <Button variant="danger" onClick={() => {notifayy(removeWishlistItem(item.id))}}><i className="fa-solid fa-trash-can "></i></Button>
          </div>
          </div>
      </div>
    </div>
  </div>
</div>
       ))}
     </div>
     <div className={`sidebarr-overlay ${isopen == true ? 'active' : ''}`} onClick={Togglewishlist}></div>
  
 </div>
</>
  )
}
export default Header