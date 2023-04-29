import React from 'react'
import photo1 from '../images/pawprint.png'
import photo2 from '../images/testi.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Col, Container, Row } from 'react-bootstrap';
import photo3 from '../images/testi_avatar02.png'
import photo4 from '../images/testi_avatar01.png'
import photo5  from '../images/photoo.jpg'
import { useTranslation } from 'react-i18next';
const Testimonials = () => {
  const [t,i18n]=useTranslation()
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
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
 <div className='testimonials '>
    <img width='100%' src={photo2} alt="" className='cloud' />
  <div className='text-center customer '>  <img width={30} src={photo1} alt="" className=' mt-5'/>
    <h4 data-aos="fade-up"
     data-aos-duration="1000">{t('changelang1.0')}</h4>
    <h1 className='testi' data-aos="fade-up"
     data-aos-duration="1000">{t('changelang1.1')}</h1>
    {/* <span className='testi' data-aos="fade-up"
     data-aos-duration="3000">{t('changelang1.2')}</span> */}
     </div>



<Carousel className='carousel mt-5' responsive={responsive} infinite>
 <div  className='overall my-5' >
  <Row>
    <Col sm={6} md={6} xs={12}>
      <img className='photo alesia ' src={photo5} alt="" /><h4 >Alessia Cara</h4><span>Google CEO</span></Col><Col sm={6} md={6}  xs={12}><p className='testimo'>“ {t('changelang1.3')}”</p>
      </Col>
      </Row>
      </div>
  <div className='overall my-5'>
    <Row>
      <Col sm={6} md={6}  xs={12}><img className='photo' src={photo3} alt="" /><h4 >William Soon</h4><span>Github CEO</span>
      </Col>
      <Col sm={6} md={6}  xs={12}><p className='testimo'>“  {t('changelang1.3')}”</p>
      </Col>
      </Row>
      </div>
  <div className='overall my-5'>
    <Row>
      <Col sm={6} md={6}  xs={12}><img className='photo' src={photo4} alt="" /><h4 >Emaly Jhonso</h4><span>Github CEO</span>
      </Col>
      <Col sm={6} md={6}  xs={12}><p className='testimo'>“ {t('changelang1.3')}”</p>
      </Col>
      </Row></div>
</Carousel>

 </div>
 {/* <img width='100%' src={photo2} alt="" className='photo2' /> */}
 </>
  )
}

export default Testimonials