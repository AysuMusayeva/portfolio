import React from 'react'
import { Col, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import photo1 from '../images/img4.png'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface productsType {
    img:any,
    title:string,
    id:string,
    // item:any
}
const SingleAdoption = ({img,title,id}:productsType) => {
  const [t,i18n]=useTranslation()
  return (
    <Col>
    <Card className='card mx-4 my-5'data-aos="fade-up"
     data-aos-duration="1000">
      <Card.Img variant="top" src={img} className='rounded-circle round'/>
      <Card.Body className='text-center'>
      <Card.Title><i className="fa-solid fa-calendar"></i> <span>May:2021</span></Card.Title>
        <Card.Title><h4 className='adoptmister'>{title}</h4></Card.Title>
        <Card.Text>
       <span className='adoptmister'> {title} {t('adoptionlang1.3')} </span>
        </Card.Text>
       {/* <Link to={`/adoption/${id}`}> <Button variant="danger" ><div className="d-flex align-items-center justify-content-between"> Read More <img className=" mx-2 " width={20} src={photo1} alt="" /></div></Button>
</Link> */}
      </Card.Body>
    </Card></Col>
  )
}

export default SingleAdoption