import React, {useState} from 'react'
// import photo6 from '../images/img5.jpg'
import photo1 from '../images/img6.jpg'
import photo2 from '../images/list_icon.png'
import photo3 from '../images/pawprint.png'
import photo4  from '../images/about_avatar.png'
import img1 from '../images/about_icon.png'
import { Col, Container, Row } from 'react-bootstrap'
import SingleCard from './SingleCard'
// import product from '../data/product'
import'animate.css'
import Count from './Count'
import '../i18n/i18next'
import { useTranslation } from 'react-i18next'
import Aos from 'aos'
// interface productsType {
//   title:string,
//   desc:string
// }
Aos.init()
const AboutBreeder = () => {
  const [t,i18n]=useTranslation();
  return (
 <>
 <div className='aboutbreeder '>
 <div className="card mb-3 mx-5 breeder "  style={{maxWidth: 1400}}>
  <div className="row g-0">
    <div className="col-md-4 col-sm-6 my-2 ">
      <img src={photo1} className="img-fluid rounded-start support d-block "  alt="..." />
      <div className='available' >
        <img  src={img1} alt="" className='mt-4 plane '/>
        <h1 className='ms-5'><b>+27</b></h1>
        <h6 className='ms-3'> {t("entertext1.11")}</h6>
      </div>
    </div>
    <div className="col-md-8 col-sm-6 swing">
      <div className="card-body ms-3">
        <img width={30} src={photo3} alt="" className='animate__animated animate__swing animate__infinite	infinite' />
        <h5 className="card-title " data-aos="fade-up"
     data-aos-duration="1000"> {t("entertext1.5")}</h5>
        <h3 className="card-text animate " data-aos="fade-up"
     data-aos-duration="1000"> {t("entertext1.6")}</h3>
        <p data-aos="fade-up"
     data-aos-duration="1000"> {t("entertext1.7")}</p>
        <div className='animate'><p data-aos="fade-up"
     data-aos-duration="1000"><img src={photo2} alt="" />  {t("entertext1.8")}</p>
        <p data-aos="fade-up"
     data-aos-duration="1000"><img src={photo2} alt="" />  {t("entertext1.9")}</p>
        <p data-aos="fade-up"
     data-aos-duration="1000"><img src={photo2} alt="" />  {t("entertext1.10")}</p></div>
<div className="d-flex align-items-center">
    <img src={photo4} alt="" />
    <h6 className='ms-2 '><b>Emaly Jhonso</b></h6>
</div>
      </div>
    </div>
  </div>
</div>
<div className="aboutcount"><Count /></div>
 </div>
 </>
  )
}
export default AboutBreeder