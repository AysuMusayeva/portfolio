import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger'
import '../i18n/i18next'
import { useTranslation } from 'react-i18next'
import 'animate.css'
const Count = () => {
  const [counterOn,setCounterOn]=useState(false)
  const [t,i18n]=useTranslation();
  return (
    <Container className='mt-5 count '>
    <Row className='g-5'>
      <Col md={3} sm={6}>
      <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
      <div className='counter ' data-aos="fade-up"
     data-aos-duration="1000">
      <h1>{counterOn && <CountUp start={0} end={95} duration={2} delay={0}/>}%</h1>
        <hr />
        <p> {t("entertext1.12")}</p>
      </div>
      </ScrollTrigger>
      </Col>
      <Col md={3} sm={6}>
      <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
      <div  className='counter ' data-aos="fade-up"
     data-aos-duration="1000" data-aos-delay="150">
        <h1>{counterOn && <CountUp start={0} end={100} duration={2} delay={0}/>}+</h1>
        <hr />
        <p>{t("entertext1.12")}</p>
      </div>
      </ScrollTrigger>
      </Col>
      <Col md={3} sm={6}>
      <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
      <div  className='counter ' data-aos="fade-up"
     data-aos-duration="1000" data-aos-delay="250">
      <h1>{counterOn && <CountUp start={10} end={35} duration={2} delay={0}/>}K</h1>
        <hr />
        <p >{t("entertext1.12")}</p>
      </div>
      </ScrollTrigger>
      </Col>
      <Col md={3} sm={6}>
      <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>

      <div  className='counter ' data-aos="fade-up"
     data-aos-duration="1000" data-aos-delay="300">
      <h1>{counterOn && <CountUp start={10} end={46} duration={2} delay={0}/>}+</h1>
        <hr />
        <p>{t("entertext1.12")}</p>
      </div>
      </ScrollTrigger>
      </Col>
  </Row>
  </Container>
  )
}

export default Count