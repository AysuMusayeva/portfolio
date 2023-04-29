import React from 'react'
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import photo1 from '../images/img4.png'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface propType{
    img:any,
    title:string,
    desc:string,
    id:string
}
const SingleProduct = ({img,title,id}:propType) => {
  const [t,i18n]=useTranslation()
  return (
 <Col md={4} sm={6}>
    <Card  className='singleProduct my-5'data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
    <Card.Img variant="top" className='img d-block w-100' src={img} />
    <div className="middle">
  <Link to={`/${id}`}  onClick={()=>{
                    window.scroll({
                        top: 0,
                        left: 0,
                        // behavior: "smooth",
                      });
                   }}>  <Button variant="danger" className='btn ms-5 resp'><div className="d-flex align-items-center justify-content-between"> {t('changelang.3')} <img className="mx-2 " width={20} src={photo1} alt="" /></div></Button></Link>
    </div>
    <Card 
    style={{ width: '19rem' }} className='singleCard'>
      <Card.Body>
         <Card.Title className='text-center'>{title}</Card.Title>
      <Card.Text className='text-center'>
      <i className="fa-solid fa-globe"></i>{t('changelang.2')}
      </Card.Text>
      {/* <Button variant="danger" className='btn ms-5'><div className="d-flex align-items-center justify-content-between"> Adoption <img className="photo mx-2 " width={20} src={photo1} alt="" /></div></Button> */}
      </Card.Body>
    </Card>
  </Card>
  </Col>
  )
}

export default SingleProduct