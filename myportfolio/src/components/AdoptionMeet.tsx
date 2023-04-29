
import { Col, Container, Row } from 'react-bootstrap'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Mousewheel, Pagination } from "swiper";
import photo1 from '../images/blog_thumb03.jpg'
import photo2 from '../images/img6.jpg'
import photo3 from '../images/breeder_gallery03.jpg'
import Footer from './Footer';
import { useTranslation } from 'react-i18next';

const AdoptionMeet = () => {
  const [t,i18n]=useTranslation();
  return (
<>
<div className="adopmeet">
<Container >
    <Row>
        <Col md={6} className='adoptionmeet'data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">   <h3>{t('adoptionlang1.0')}</h3>
        <h1>{t('adoptionlang1.1')}</h1>
        <p>{t('footerlang.0')}</p>
        <i className="fa-solid fa-check"></i><span>{t('adoptionlang1.2')}</span><br />
        <i className="fa-solid fa-check"></i><span>{t('adoptionlang1.3')}</span></Col>
        <Col md={6} className='adoption'>
        <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="Swiper"data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <SwiperSlide ><img src={photo1} className='w-100 d-block' alt="" /></SwiperSlide>
        <SwiperSlide><img src={photo2} className='w-100 d-block' alt="" /></SwiperSlide>
        <SwiperSlide><img src={photo3} className='w-100 d-block' alt="" /></SwiperSlide>
      </Swiper>
        </Col>
    </Row>
 </Container>
</div>
 <Footer />
</>
  )
}

export default AdoptionMeet