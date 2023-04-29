import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import photo1 from '../images/breadcrumb_bg.jpg'
import img2 from '../images/image2.png'
import img3 from '../images/image3.jpg'
import img4 from '../images/image4.webp'
import img5 from '../images/image5.jpg'
import photo2 from '../images/img4.png'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
const Adoptionone = () => {
  const [t,i18n]=useTranslation();
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
<>
<div className="adoptions">
<div className="adoptionOne">
<img width='100%' height={350} src={photo1} alt="" />
<Container className='blog'><Button className='mb-3 btn' variant='danger' size='lg'>{t('entertext.1')}</Button> <br />
<span className='home'>{t('entertext.0')} |</span> <span className='span'>{t('entertext.1')}</span></Container>
</div>
<div className="domestic">
<Container >
    <Row>
       <Col md={4} sm={12} xs={12} xl={4} xxl={4} lg={4} className='mt-5 '>
        <h3 data-aos="fade-up"
     data-aos-duration="1000">{t('adoptionlang1.0')}</h3>
        <h1 data-aos="fade-up"
     data-aos-duration="1000">{t('adoptionlang1.1')}</h1>
        <p >{t('adoptionlang1.2')}</p>
        <i className="fa-solid fa-check" ></i><span >Embark Breed & Health</span><br />
        <i className="fa-solid fa-check" ></i><span >{t('adoptionlang1.3')}</span>
        </Col> 
       <Col md={8} sm={12} xs={12} xl={4} xxl={4} lg={4} className='mt-5'><Carousel responsive={responsive} infinite
      autoPlay={true}
      autoPlaySpeed={2000}
      className='carousel'>
  <div data-aos="fade-up"
      data-aos-duration="1000" ><img src={img2} className='w-100 d-block' alt="" /></div>
  <div><img src={img3} className='w-100 d-block' alt="" /></div>
  <div data-aos="fade-up"
      data-aos-duration="1000" ><img src={img4} className='w-100 d-block' alt="" /></div>
  <div data-aos="fade-up"
      data-aos-duration="1000" ><img src={img5} className='w-100 d-block' alt="" /></div>
</Carousel></Col> 
       <Col md={4} sm={12} xs={12} xl={4} xxl={4} lg={4} className='mt-5 '>
      <div className='box text-center ms-5 me-5' data-aos="fade-up"
     data-aos-duration="1000"> <h5 className='mt-5'>{t('entertext2.3')}</h5>
    <h1 >{t('entertext2.4')}</h1>
    <p>{t('entertext2.5')}</p>
   <Link to="/breeder" onClick={()=>{
    window.scroll({
      top:0
    })
   }}> <Button  className="button ms-3" size="lg">
        {t('entertext2.6')}
        </Button></Link>
        <img height={30} src={photo2} alt="" /></div>
        </Col> 
    </Row>
 
</Container>

{/* <Count /> */}
</div>  
</div>
</>

  )
}

export default Adoptionone