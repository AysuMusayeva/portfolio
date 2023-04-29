import { connect } from 'react-redux';
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import photo2 from '../images/breeder_details02.jpg'
import photo3 from '../images/breeder_details04.jpg'
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import { useCart } from 'react-use-cart';
import { useTranslation } from 'react-i18next';
const BlogDetails = (props:any) => {
  const [t,i18n]=useTranslation()
    const {id}=useParams()
    const detailsitem=props.pvalue.find((p:any)=>p.id===id)
    const {addItem}=useCart()
  return (
<>
<div className="onlinepet">
<Container >
    <Row>
        <Col sm={12} md={4}>
            <div className=' mt-5 categories'>
            <h2 className='text-center'>{t('detailslang1.6')}</h2>
                <img className='photo0 d-block w-100' src={photo2} alt="" />
                <p className='ms-4 my-2'>{t('detailslang1.7')}</p>
                <i className="fa-solid fa-calendar ms-4" style={{color:"#F04336"}}></i> <span>May 29, 2022</span>
        <img className='photo0 mt-4  d-block w-100' src={photo3} alt="" />
        <p className='ms-4 my-2'>{t('detailslang1.7')}</p>
                <i className="fa-solid fa-calendar ms-4" style={{color:"#F04336"}}></i> <span>May 29, 2022</span>
            </div>
        </Col>
        <Col sm={12} md={8}>
        <Card className='singleshop mt-5'>
        <Card.Img variant="top" src={detailsitem.img} />
        <Card.Body>
        <Card.Title>  <div  className='adoption my-3'>
            <i className="fa-regular fa-bookmark"></i> <span>{detailsitem.desc}</span> / <i className="fa-solid fa-user"></i>  <span>yeadhhb</span> / <i className="fa-solid fa-bell"></i>  <span> {detailsitem.desc2}</span>
            </div></Card.Title>
        <Card.Text>
        {detailsitem.title}
        </Card.Text>
        <Card.Text>  <p>{detailsitem.desc1}</p></Card.Text>
              </Card.Body>
      </Card>
    
      <Form className='bloginput'>
      <h3 className='mt-5 ms-3 mb-4 relate'>{t('bloglang2.0')}</h3>
      <Row className="mb-3">
<Col md={6}>        <Form.Group controlId="formGridEmail">
          <Form.Control type="text"className='formblog'  placeholder="Name" />
        </Form.Group></Col>
     <Col md={6}>   <Form.Group controlId="formGridPassword">
          <Form.Control type="email" className='formblog' placeholder="Email" />
        </Form.Group></Col>
      </Row>
      <FloatingLabel controlId="floatingTextarea2" label="Message" >
        <Form.Control className='formblog'
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <Button className='mt-5' variant='danger'>{t('bloglang2.2')}</Button>
    </Form>
        </Col>
    </Row>

</Container>
</div>
<Footer />
</>

  )
}
const mapStateToProps =(state:any)=>{
    return{
        pvalue:state
    }
}
export default connect(mapStateToProps)(BlogDetails)