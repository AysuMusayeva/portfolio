import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import photo1 from '../images/pawprint.png'
import photo2 from '../images/image.avif'
import photo3 from '../images/images.avif'
import Card from 'react-bootstrap/Card';
import { useTranslation } from 'react-i18next'
const BreederPuppies = () => {
  const [t,i18n]=useTranslation()
  return (
<>
<div className='hero '>
<div className="breederpuppies text-center">
<img width={30} src={photo1} alt="" className='animate__animated animate__swing animate__infinite	infinite my-5' data-aos="fade-up"
     data-aos-duration="1000"/>
<h4 data-aos="fade-up"
     data-aos-duration="1000">{t('breederlang2.0')}</h4>
<h1 data-aos="fade-up"
     data-aos-duration="1000"> {t('breederlang2.0')}</h1>
<Col md={8} className='mx-auto'><p data-aos="fade-up"
     data-aos-duration="1000">{t('changelang1.2')}</p></Col>
</div>
</div>
</>  )
}

export default BreederPuppies