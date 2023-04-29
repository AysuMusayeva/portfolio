import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import photo1 from '../images/breadcrumb_bg.jpg'
import photo2 from '../images/breeder_details02.jpg'
import photo4 from '../images/blog_thumb02.jpg'
import photo3 from '../images/breeder_details04.jpg'
import photo5 from '../images/img4.png'
import img1 from '../images/testi.png'
import img2 from '../images/logo.png'
import img3 from '../images/shape02.png'
import img4 from '../images/footer_shape01.png'
import img5 from '../images/footer_shape02.png'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import { connect } from 'react-redux'
import SingleBlog from './SingleBlog'
import { useTranslation } from 'react-i18next'
// type propType ={
//     img:any,
//     title:string,
//     desc:string
//   }
const BlogOne = (props:any) => {
  const [t,i18n]=useTranslation()
  return (
<>
<div className="blogOne">
<img width='100%' height={350} src={photo1} alt="" />
<Container className='blog'><Button className='mb-3 btn' variant='danger' size='lg'>{t('entertext.4')}</Button> <br />
<span className='home'>{t('entertext.0')} |</span> <span className='span'>{t('entertext.4')}</span></Container>
</div>
<div className="onlinepet">
<Container >
    <Row className='g-5'>
        <Col md={4} sm={12}>
            <div className=' mt-5 categories' >
                <h2 className='text-center'>{t('detailslang1.6')}</h2>
                <img className='photo0 d-block w-100' src={photo2} alt="" />
                <p className='ms-4 my-2'>{t('detailslang1.7')}</p>
                <i className="fa-solid fa-calendar ms-4" style={{color:"#F04336"}}></i> <span>May 29, 2022</span>
        <img className='photo0 mt-4  d-block w-100' src={photo3} alt="" />
        <p className='ms-4 my-2'>{t('detailslang1.7')}</p>
                <i className="fa-solid fa-calendar ms-4" style={{color:"#F04336"}}></i> <span>May 29, 2022</span>
            </div>
        
        </Col>
        <Col md={8} sm={12}>
<Row className='g-5'>
  {props.pvalue.map((item:any,i:any)=>{
    return <SingleBlog  key={i} id={item.id}  photo={item.img} title={item.title} desc={t(`bloglang.${item.id}`)}  desc2={item.desc2}/>
  })}
</Row>
   
        </Col>
    </Row>
  {/* <Link to='/blogTwo' >  <Button variant='danger' className='my-3'>Next</Button></Link> */}
</Container>


 <Footer />
</div>
</>
  )
}


const mapStateToProps =(state:any)=>{
  return{
      pvalue:state
  }
}
export default connect(mapStateToProps)(BlogOne)