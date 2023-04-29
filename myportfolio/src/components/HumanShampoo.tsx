import React, { useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import photo2 from '../images/img1.jpg'
import photo3 from '../images/img2.jpg'
import photo4 from '../images/img4.png'
import Aos from "aos";
import '../../node_modules/aos/dist/aos.css'
// import { Navigation, Pagination } from "swiper";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import 'animate.css';
import '../i18n/i18next'
const HumanShampoo = () => {
  const [t,i18n]=useTranslation();

  return (
    <>
    <div className="humanshampoo">
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 human"
          src={photo2} height={580}
          alt="First slide"
        /> 
        <Carousel.Caption  > 
      <Col md={8} sm={4} className="elements " >  <h1 className="animate__animated animate__slideInUp " 
    >{t("entertext1.0")} <span className="animate__animated animate__slideInUp">{t("entertext1.1")}</span> {t("entertext1.2")}</h1>
          <p className="animate__animated animate__slideInUp">{t("entertext1.3")}</p>
          <Button className="button mt-3 resp animate__animated animate__slideInUp" size="lg">
       <Link to='/'onClick={()=>{
                    window.scroll({
                        top: 3100,
                      });
                   }} style={{textDecoration:"none", color:"#fff"}}>  <div className="d-flex align-items-center justify-content-between">{t("entertext1.4")}<img className="photo mx-2" src={photo4} alt="" /></div></Link>
        </Button></Col>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 human"
          src={photo3} height={580}
          alt="Second slide"
        />
        <Carousel.Caption >
      <Col md={8} sm={4} className="elements">
     
        <h1 className="animate__animated animate__slideInUp">{t("entertext1.0")}<span className="animate__animated animate__slideInUp">{t("entertext1.1")}</span> {t("entertext1.2")}</h1>
        <p className="mt-3 animate__animated animate__slideInUp">{t("entertext1.3")}</p>
        <Button className="button mt-3 resp animate__animated animate__slideInUp" size="lg">
       <Link to='/' onClick={()=>{
        window.scroll({
          top:3100
        })
       }}  style={{textDecoration:"none", color:"#fff"}}> <div className="d-flex align-items-center justify-content-between"> {t("entertext1.4")} <img className="photo mx-2" src={photo4} alt="" /></div></Link>
        </Button>
        </Col>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
   
  </>
  )
}
export default HumanShampoo

































// import Carousel from 'react-bootstrap/Carousel';
// import photo2 from '../images/img1.jpg'
// import photo3 from '../images/img2.jpg'
// const Section1 = () => {
//   return (
//     <>
//   <Carousel>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={photo2}
//           alt="First slide"
//         />
//         <Carousel.Caption className='best'>
//          <div>
//          <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//          </div>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={photo3}
//           alt="Second slide"
//         />

//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
   
//     </Carousel>
//   </>
//   )
// }
// export default Section1


