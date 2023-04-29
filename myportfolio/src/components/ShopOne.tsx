// import AOS from "aos";
// import "aos/dist/aos.css";
// import React, { useEffect, useRef, useState } from 'react'
// import { Col, Container, Row, Button, Card, Form, InputGroup } from 'react-bootstrap';
// import shop from "../data/shop";
// import SingleShop from "./SingleShop";




// const ShopOne = () => {
//   const [data,setData] = useState(shop);
//   const [value,setValue] = useState('');
//   const inputRef = useRef();
//   useEffect(()=>{
//     AOS.init({
//       duration : 1000
//     });
//   },[])

//   const filterResult =(comingItem:any)=>{
//       const result = shop.filter((fd:any)=>{
//         return fd.category === comingItem
//       })
//       setData(result);
//   }
//   return (
//     <Container>
//       <h1 className='text-center animate__animated animate__tada '>Products</h1>

//       {/* <Form onSubmit={(e)=>{e.preventDefault();
//         setValue(inputRef.current.value)}}>
//       <InputGroup className="mb-3 mb-5">
//         <Form.Control
//           placeholder="Search Products"
//           ref={inputRef}
         
//         />
//         <Button variant="secondary"  type="submit">
//           Search
//         </Button>
//       </InputGroup>
//       </Form> */}


//       <Button variant='primary' className='ms-2' onClick={()=>{filterResult("Pet Ball")}}>Men</Button>
//       <Button variant='primary' className='ms-2' onClick={()=>{filterResult("CUDDLES PET")}}>Woman</Button>
//       <Button variant='primary' className='ms-2' onClick={()=>{filterResult("DOG TOY’S")}}>Electronics</Button>
//       <Button variant='primary' className='ms-2' onClick={()=>{filterResult("FUZZY BEAR")}}>Jewelery</Button>
//       <Row className='g-5 mt-3'>
//       {/* {data.filter((p:any)=>p.title.toLocaleLowerCase().includes(value)).map((item:any)=>{
//               return  <Col key={item.id} sm={12} md={4}>
//               <Card data-aos={"zoom-in"}>
//                 <Card.Img height={300} variant="top" src={item.img} />
//                 <Card.Body>
//                   <Card.Title>{item.title.substring(0,10)}</Card.Title>
//                   <Card.Text>
//                     {item.desc.substring(0,50)}
//                   </Card.Text>
//                   <Button variant="primary">Go somewhere</Button>
//                 </Card.Body>
//               </Card>
//         </Col>
//             })} */}
            
//       <Row className='g-5 mt-3'>
//       {data.filter((p:any)=>p.title.toLocaleLowerCase().includes(value)).map((item:any,i:any)=>{
//                           return <SingleShop key={i} id={item.id} img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} />
//                        })}
      
//       </Row>
      
//       </Row>
//     </Container>
//   )
// }

// export default ShopOne




import React, { useContext, useState,useRef } from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
// import shop from '../data/shop'
import photo1 from '../images/breadcrumb_bg.jpg'
import photo2 from '../images/shop_add.jpg'
import photo3 from '../images/product6.jpg'
import SingleShop from './SingleShop'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext'
import Paginate from 'react-paginate'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import shop from '../data/shop'
import { useTranslation } from 'react-i18next'
// interface ShopOneContextType{}
const ShopOne = () => {
    const [product,setProduct]=useContext<any>(ProductContext)
    const [pageNumber,setPageNumber]=useState(0)
    const [query, setQuery] = useState("");
  const ProductPerPage=9
  const lastIndex=pageNumber * ProductPerPage
  const currentPage=product.slice(lastIndex,lastIndex+ProductPerPage)
  const pageCount=Math.ceil(product.length /ProductPerPage)
  const changePage=({selected}:any)=>{
    setPageNumber(selected)
  }
  const filterResult =(comingItem:any)=>{
      const result = shop.filter((fd:any)=>{
        return fd.category === comingItem
      })
      setProduct(result);
  }
  const [t,i18n]=useTranslation()
  return (
   <>
    <div className="shopOne">
    <img width='100%' height={350} src={photo1} alt="" />
    <Container className='blog'><Button className='mb-3 btn' variant='danger' size='lg'>{t('entertext.3')}</Button> <br />
    <span className='home'>{t('entertext.0')} |</span> <span className='span'>{t('breederlang2.2')}</span></Container>
    </div>
   <div className="shopcontainer">
   <Container >
        <Row>
            <Col md={4} >
      <InputGroup className="mb-3" style={{width:"260px"}}  >
        <Form.Control
          placeholder="Search products..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          className='inputsearch mt-5 loginform'   onChange={(e:any) => {
            setQuery(e.target.value);
          }}
        />
        <Button className='mt-5' variant="danger" id="Button-addon2">
        <i className="fa-solid fa-magnifying-glass"></i>
        </Button>
      </InputGroup>
                <div className='category my-5' ><h4 className='ms-4 mt-5'>{t('breederlang2.3')}</h4>
              <button className='ms-2 button btn categbtn' onClick={()=>{filterResult("FUZZY BEAR")}}>{t('shoplang.2')} (1)</button>
   <button className='ms-2 button btn categbtn' onClick={()=>{filterResult("CUDDLES PET")}}>{t('shoplang.3')} (2)</button>
  <button className='ms-2 button btn categbtn' onClick={()=>{filterResult("DOG TOY’S")}}>{t('shoplang.4')} (4)</button>
    <button  className='ms-2 button btn categbtn' onClick={()=>{filterResult("FUZZY BEAR")}}>{t('shoplang.5')} (1)</button>
       <button className='ms-2 button btn categbtn' onClick={()=>{filterResult("Pet Ball")}}>{t('shoplang.6')} (3)</button>
            </div>
          
            <img src={photo2}  alt="" className='gameproduct'  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"/>
            </Col>
            <Col md={8}>
                <Container className='mt-5'>
                    <Row >
                 {currentPage.filter((p:any)=>p.title.toLocaleLowerCase().includes(query)).map((item:any,i:any)=>{
                            return <SingleShop key={i} id={item.id} img={item.img} title={t(`shoplang2.${item.id}`)}desc={t(`shoplang3.${item.id}`)}price={item.price} item={item} />
                     })}
                     <div className="my-5 results d-flex align-items-center justify-content-around">
                     <p className='ms-5'>{t('breederlang2.4')}</p>
                     <Paginate className='paginate mt-3' pageCount={pageCount} onPageChange={changePage} previousLabel='<<' nextLabel='>>' onClick={()=>{
                    window.scroll({
                        top: 300,
                        left: 0,
                        // behavior: "smooth",
                      });
                   }}/>
                     </div>
                    </Row>
                </Container>
         
            </Col>
        </Row>

    </Container>
   </div>
    <Footer />
   </>
  )
}
export default ShopOne