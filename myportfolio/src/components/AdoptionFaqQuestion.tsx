import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import photo1 from '../images/ab.avif'
// import photo2 from '../images/faq_bg.jpg'
import photo3 from '../images/footer_shape02.png'

import Accordion from 'react-bootstrap/Accordion';
import { useTranslation } from 'react-i18next';

const AdoptionFaqQuestion = () => {
  const [t,i18n]=useTranslation();
  return (
<div className="adoptionfaqquestion mt-5">
   <Container>
   <Row className='g-5'>
        <Col md={6}><img src={photo1}  height={740} alt="" className='adoptphoto w-100 d-block'/></Col>
        <Col md={6} className="answer">
       <div className='mt-5'>
       <h5>{t('entertext2.7')}</h5>
        <h1>{t('entertext2.8')}</h1>
        <Accordion defaultActiveKey="0" className='mt-5'>
      <Accordion.Item eventKey="0">
        <Accordion.Header><h4 className='work'>{t('entertext2.9')} </h4></Accordion.Header>
        <Accordion.Body>
     <p className='test'>  {t('entertext2.12')}</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className='mt-4'>
        <Accordion.Header><h4 className='work'>{t('entertext2.10')}</h4>  </Accordion.Header>
        <Accordion.Body>
     <p className='test'> {t('entertext2.12')}</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className='mt-4'>
        <Accordion.Header><h4 className='work'>{t('entertext2.11')}</h4>   </Accordion.Header>
        <Accordion.Body>
     <p className='test'> {t('entertext2.12')}</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <img src={photo3} alt="" className='photo3'/>
       </div>
        </Col>
    </Row>
   </Container>
</div>
  )
}
export default AdoptionFaqQuestion