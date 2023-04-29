import React, { useContext } from 'react'
import { Container, Row } from 'react-bootstrap'
import adoption from '../data/adoption'
import photo1 from '../images/pawprint.png'
import SingleAdoption from './SingleAdoption'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { PuppieContext } from '../context/PuppieContext'
import { useTranslation } from 'react-i18next'
interface productsType{
    img:any,
    title:string,
    desc:string,
    id:number
  }
const AdoptionPuppies = () => {
  const [t,i18n]=useTranslation()
  const [puppie, setPuppie]=useContext<any>(PuppieContext)
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
  
   <div className="adoptionPuppies">
  <Container>
  <div className='text-center'>
<img width={30} src={photo1} alt="" className='animate__animated animate__swing animate__infinite	infinite'data-aos="fade-up"
     data-aos-duration="1000"/>
<h4 data-aos="fade-up"
     data-aos-duration="1000">{t('changelang.0')}</h4>
<h1 className='pup'data-aos="fade-up"
     data-aos-duration="1000">{t('changelang.1')}</h1>
{/* <span className='pup' data-aos="fade-up"
     data-aos-duration="3000">{t('changelang1.3')}</span> */}
</div>
<Row className='g-1'>
<Carousel responsive={responsive} infinite
      autoPlay={true}
      autoPlaySpeed={2000}
      className='carousel' >
 {puppie.map((item:any,i:any)=>{
    return <SingleAdoption id={item.id} key={i} img={item.img} title={item.title}  />
})}
</Carousel>
</Row>
  </Container>
   </div>
  )
}

export default AdoptionPuppies