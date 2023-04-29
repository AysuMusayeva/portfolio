import React from 'react'
import photo1 from '../images/testi.png'
import photo2 from '../images/logo.png'
import img1 from '../images/shape02.png'
import img2 from '../images/footer_shape01.png'
import img3 from '../images/footer_shape02.png'
import { useTranslation } from 'react-i18next'
import ScrollToTop from 'react-scroll-to-top'
const Footer = () => {
  const [t,i18n]=useTranslation() 
 return (
<>
<div className="footer">
    <img width='100%' src={photo1} alt="" className='cloud mt-0' />
<div className="container">
  <footer className="py-5">
    <div className="row">
      <div className="col-6 col-md-4 mb-3 ">
      <img width={150} src={photo2} alt="" />
        <ul className="nav flex-column">
          <li className="nav-item mb-2 mt-3"><a href="#" className="nav-link p-0 text-muted">{t('footerlang.0')}</a></li>
        </ul>
      </div>
      <div className="col-6 col-md-2 mb-3">
        <h5>{t('footerlang.1')}</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">{t('footerlang.2')}</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">{t('footerlang.3')}</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">{t('footerlang.4')}</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">{t('footerlang.5')}</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">{t('footerlang.6')}</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">{t('footerlang.7')}</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">{t('footerlang.8')}</a></li>
        </ul>
      </div>
      <div className="col-6 col-md-3 mb-3">
        <h5>{t('footerlang2.0')}</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">{t('footerlang2.1')}</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">{t('footerlang2.2')}</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">{t('footerlang.4')}</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">{t('footerlang.5')}</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">{t('footerlang2.2')}</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">{t('footerlang2.3')}</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">{t('footerlang2.4')}</a></li>

        </ul>
      </div>
      <div className="col-6 col-md-3 mb-3">
        
      <div className="d-flex align-items-center">   <div className='phone'><i className="fas fa-headphones"></i></div>
          <h3>747-800-9880 </h3></div><span>{t('footerlang2.5')}</span>
         <div className='mt-2'> <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter mx-2"></i>
          <i className="fa-brands fa-youtube "></i>
          <i className="fa-brands fa-linkedin-in mx-2"></i></div>
      </div>
  
    </div>
  </footer>
</div>
<div className="d-flex align-items-center justify-content-between shape">
<img src={img2} alt=""/>
<img src={img3} alt="" />
</div>
<img src={img1} width='100%' height='20px' className='clouder w-100 d-block' alt="" />
<div className='style'><p className='ms-5'>{t('footerlang2.6')}</p></div>

 </div>
 <ScrollToTop smooth color="#6f00ff" className='scroll-to-top '/>
</>
  )
}
export default Footer