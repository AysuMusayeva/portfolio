import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import product from '../data/product'
import photo1 from '../images/pawprint.png'
import photo2 from '../images/testi_bg_shape02.png'
import photo3 from '../images/newsletter_bg.jpg'
import SingleCard from './SingleCard'
import { useTranslation } from 'react-i18next'
import BreederPuppies from './BreederPuppies'
const LatestNews = () => {
  const [t,i18n]=useTranslation()
  return (
<>
<div className="latestnews">
<img  src={photo2} alt="" className='cloud mt-0 d-block w-100 ' />
  <div className='text-center customer'>
      <img width={30} src={photo1} alt="" className='animate__animated animate__swing animate__infinite	infinite mt-5'/>
    <h4 data-aos="fade-up"
     data-aos-duration="1000">{t('changelang2.0')}</h4>
    <h1 className='animalpuppie' data-aos="fade-up"
     data-aos-duration="1000">{t('changelang2.1')}</h1>
    {/* <span className='animalpuppie'>{t('changelang1.2')}</span> */}
    </div>
<Container >
<Row className='g-5'>
{product.map((item,i)=>{
    return <SingleCard img={item.img} title={t(`changelang4.${item.id}`)}   key={i} id={item.id}/>
})}
</Row>



</Container>


</div>
<BreederPuppies />
</>
  )
}

export default LatestNews