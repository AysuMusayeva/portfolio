import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import photo1 from '../images/breadcrumb_bg.jpg'
import photo2 from '../images/contact_img.png'
import photo3 from '../images/newsletter_bg.jpg'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Footer from './Footer'
import { useTranslation } from 'react-i18next'

const ContactOne = () => {
  const [t,i18n]=useTranslation()
  return (
  <>
 <div className="contacthome">
 <div className="contactOne">
    <img className='d-block w-100' height={350} src={photo1} alt="" />
    <Container className='blog'><Button className='mb-3 btn' variant='danger' size='lg'>{t('entertext.5')}</Button> <br />
    <span className='home'>{t('entertext.0')} |</span> <span className='span'>{t('entertext.5')}</span></Container>
    </div>
    <Container >
        <Row>
            <Col md={8}>
                <h3>{t('entertext.5')} </h3>
                <h1>{t('contactlang.0')}</h1>
                <p className='my-3'>{t('contactlang.1')}</p>
         
                <Form className='contactfrm'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{t('contactlang.2')}*</Form.Label>
        <Form.Control className='inputform' type="email" placeholder="Jon Deo..." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>{t('contactlang.3')} *</Form.Label>
        <Form.Control className='inputform' type="password" placeholder="info.example@com" />
      </Form.Group>
      <Form.Label>{t('contactlang.4')} *</Form.Label>
      <FloatingLabel controlId="floatingTextarea2" label={t('contactlang.4')}>
        <Form.Control
className='inputform' as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label={t('contactlang.0')} />
      </Form.Group>
      <Button variant="danger" type="submit" className='button mb-5 resp' size='lg'>
      {t('contactlang.6')}
      </Button>
    </Form>
            </Col>
            <Col md={4}>
                <div className='contact mt-5 '><img src={photo2} alt="" className='d-block w-50 ms-5' />
            <div className='m-5'>   <p> <i className="fa-solid fa-location-dot ms-2"></i> {t('contactlang.7')}</p>
              <p>  <i className="fa-solid fa-phone ms-2"></i> +9 (256) 254 9568</p>
               <p> <i className="fa-solid fa-envelope ms-2"> </i> Contact@ info.com</p></div>
               {/* <i className="fa-brands fa-facebook"></i>
               <i className="fa-brands fa-twitter mx-3"></i>
               <i className="fa-brands fa-linkedin"></i> */}
                </div>
            </Col>
        </Row>
    
    </Container>
 </div>
<div className="mapouter "><div className="gmap_canvas"><iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=california&t=&z=8&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} style={{height:"450px"}}/></div></div>

    <Footer />
  </>
  )
}

export default ContactOne