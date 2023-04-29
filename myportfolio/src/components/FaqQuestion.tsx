import React from 'react'
import img1 from '../images/testi.png'
import img2 from '../images/faq_tv.png'
import img3 from '../images/faq_img.png'
import img4 from '../images/shape02.png'
import img5 from '../images/item01.png'
import img6 from '../images/item02.png'
import img7 from '../images/item03.png'
import img8 from '../images/item04.png'
import img9 from '../images/item05.png'
import img10 from '../images/item06.png'
import { Container, Row } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useTranslation } from 'react-i18next'
const FaqQuestion = () => {
  const [t,i18n]=useTranslation();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className='faqquestion'>
        <img className='cloud mt-0 d-block w-100'  height={30} src={img1} alt="" />
  
    <Container className=' faq'>
          <Row>
            <div className="col-12  col-sm-12 col-md-6 col-xs-6 col-lg-6 col-xl-6 col-xxl-6" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">  <img width={450} src={img2} className="img-fluid rounded-start ms-2 position-absolute photo1" alt="..." />
            <img className='position-relative photo2'  height={270} src={img3} alt="" /></div>
            <div className="col-12 col-sm-12 col-md-6 col-xs-12 col-lg-6 col-xl-6 col-xxl-6 mt-5 media" data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
<h4  >{t('entertext2.7')}</h4>
<h3 className='historyadopt'><b>{t('entertext2.8')}</b></h3>
<Accordion defaultActiveKey="0" className='mt-5 '>
      <Accordion.Item eventKey="0" className='test'>
        <Accordion.Header className='text'><h4 className='work'>{t('entertext2.9')}</h4></Accordion.Header>
        <Accordion.Body className='test'>
     <p className='test'> {t('entertext2.12')}</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className='mt-4'>
        <Accordion.Header className='test'><h4 className='work'>{t('entertext2.10')}</h4>  </Accordion.Header>
        <Accordion.Body className='test'>
     <p className='test'> {t('entertext2.12')}</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className='mt-4'>
        <Accordion.Header className='test'><h4 className='work'>{t('entertext2.11')}</h4>   </Accordion.Header>
        <Accordion.Body className='test'>
     <p className='test'>  {t('entertext2.12')}</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
            </div>
        </Row>
        </Container>


<img src={img4} width='100%' height='30px' className='mt-5 faqcloud ' alt="" />
       <div className='shape'>
       <Carousel responsive={responsive} infinite   autoPlay={true}
      autoPlaySpeed={1500}>
 <div ><img src={img5} alt="" /></div>
  <div><img src={img6} alt="" /></div>
  <div><img src={img7} alt="" /></div>
  <div><img src={img8} alt="" /></div>
  <div><img src={img9} alt="" /></div>
  <div><img src={img10} alt="" /></div>
</Carousel>
       </div>
    </div>
  )
}

export default FaqQuestion