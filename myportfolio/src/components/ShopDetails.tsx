import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import photo1 from '../images/breadcrumb_bg.jpg'
import { useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import img1 from '../images/product_05.jpg'
import img2 from '../images/product_03.jpg'
import img3 from '../images/product_08.jpg'
import Footer from './Footer';
import { ProductContext } from '../context/ProductContext';
import SingleShop from './SingleShop';
import { useCart } from 'react-use-cart';
import { useTranslation } from 'react-i18next';
// import ShopDescription from './ShopDescription';
const ShopDetails = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [product,setProduct]=useContext<any>(ProductContext)
    const { addItem } = useCart();
    const [t,i18n]=useTranslation()
  return (
<>
<div className="shopDetails">
    <img width='100%' height={350} src={photo1} alt="" />
    <Container className='blog'><Button className='mb-3 btn' variant='danger' size='lg'>{t('entertext.4')}</Button> <br />
    <span className='home'>{t('entertext.0')} | {t('breederlang2.2')} |{t('shoplang.6')} |</span> <span className='span'>{t('shoplang3.1')}</span></Container>
    </div>
    <Container className='my-5 details'>
        <Row>
            <Col sm={12} md={6}>
            <Swiper
        // style={{
        // //   "--swiper-navigation-color": "#fff",
        //   "--swiper-pagination-color": "#fff",
        // }}
        spaceBetween={10}
        loop={true}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide className='swiperSlide '>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
        </SwiperSlide>
      
      </Swiper>
      <Swiper
            //   onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
        className="mySwiper mt-5"
      >
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
        </SwiperSlide>
     
      </Swiper>
            </Col>
            <Col sm={12} md={6} className='detailsTwo' data-aos="fade-up"
     data-aos-duration="3000">
                <p>{t('shoplang.6')}</p>
                <h2>{t('shoplang3.2')}</h2>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <span> (1 {t('detailslang1.0')})</span>
                <h5>$12.00 <span className='stock'>- 10 {t('detailslang1.1')}</span></h5>
                <p>{t('detailslang1.2')}</p>
         
                <h5>SKU : <span>B#21542C</span></h5>
                <h5>{t('breederlang2.3')}: <span>{t('shoplang.6')} , {t('detailslang1.3')}</span></h5>
                <h5>{t('detailslang1.4')}: <span>Knacks , Kutto</span></h5>
            </Col>
            <h2 className='relate ms-5'>{t('detailslang1.5')}</h2>
            {product.slice(4,7).map((item:any,i:any)=>{
                            return <SingleShop id={item.id} key={i} img={item.img} title={t(`shoplang2.${item.id}`)}desc={t(`shoplang3.${item.id}`)}price={item.price} item={item} />
                        })}
        </Row>
    </Container>

    {/* <ShopDescription /> */}
    <Footer />
</>
  )
}

export default ShopDetails