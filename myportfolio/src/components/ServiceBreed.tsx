import React from 'react'
import photo9 from '../images/pawprint.png'
import img2 from '../images/breed_01.png'
import img3 from '../images/breed_02.png'
import img4 from '../images/breed_03.png'
import photo4 from '../images/img4.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
const ServiceBreed = () => {
  const [t,i18n]=useTranslation();
  const responsive = {
    superLargeDesktop: {
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
    <div className='servicebreed '>
<div className="text-center">
{/* <img width={30} src={photo9} alt="" className='animate__animated animate__swing animate__infinite	infinite'/> */}
 <h4 data-aos="fade-up"
     data-aos-duration="1000">{t('entertext2.0')}</h4>
 <h1 className='populardog' data-aos="fade-up"
     data-aos-duration="1000">{t('entertext2.1')}</h1>
   <div className='col-8 mx-auto'> <p data-aos="fade-up"
     data-aos-duration="1000"><b>{t('entertext2.2')}</b></p>
</div>
</div>
<div className="container-fluid">
  <div className="row d-flex align-items-center justify-content-around">
  <div className='col-12 col-sm-6 col-md-6  col-lg-6 col-xl-6 col-xxl-6 col-xs-6'><Carousel responsive={responsive} infinite className='loop'>
  <div ><img src={img4} alt="" /></div>
  <div><img src={img3} alt="" /></div>
  <div><img src={img2} alt="" /></div>
</Carousel></div>
<div className='col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 col-xs-6 box  text-center' data-aos="zoom-in-left">
    <h5 className='mt-5'>{t('entertext2.3')}</h5>
    <h1>{t('entertext2.4')}</h1>
    <p>{t('entertext2.5')}</p>
  <Link to="/breeder" onClick={()=>{
    window.scroll({
      top:0
    })
  }}>  <Button  className="button ms-3" size="lg">
       {t('entertext2.6')}
        </Button></Link>
        <img width={30} src={photo4} alt="" />
</div>
  </div>
</div>
  </div>
  </>
  )
}
export default ServiceBreed