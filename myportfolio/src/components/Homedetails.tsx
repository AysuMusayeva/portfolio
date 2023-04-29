import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { MovieContext } from '../context/MovieContext';
import { Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
// import photo2 from '../images/shop_add.jpg'
import photo3 from '../images/w_pawprint.png'
import photo4 from '../images/sn_icon.png'
import photo2 from '../images/breeder_details04.jpg'

import photo5 from '../images/breeder_details02.jpg'
import Footer from './Footer';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

const Homedetails = () => {
  const [t,i18n]=useTranslation()
    const [movies,setMovies] = useContext<any>(MovieContext)
    const {id} = useParams();
    const moviedetails = movies.find((p:any)=>p.id ===id)
  return (
   <>
    <div className="breederOne">
    <Container>
        <Row>
            <Col md={8} sm={12} className='boxOne my-5'>
            <Card style={{ border:"none"}}>
            <h2><b>{moviedetails.title}</b></h2>
            <p style={{color:"#676666"}}>{t('breederlang1.2')}</p>
      <Card.Img variant="top" src={moviedetails.img} />
      <Card.Body>

        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>


<h3>{t('breederlang1.4')}</h3><hr />
<div className="d-flex align-items-center justify-content-between">
<h5>{t('breederlang1.5')}:<h6>{t('breederlang1.a1')}</h6></h5>
<h5>{t('breederlang1.a2')}:<h6>1 {t('breederlang1.a3')}</h6></h5>
<h5>{t('breederlang1.a4')}:<h6>{t('breederlang1.a5')}</h6></h5>
<h5>ID:<h6>09481</h6></h5>
</div>
<div className="d-flex align-items-center justify-content-between">
<h5>{t('breederlang1.a6')}:<h6>Med. 26-60 lbs</h6></h5>
<h5>{t('breederlang1.a7')}:<h6>{t('breederlang1.a8')}</h6></h5>
<h5 className='me-5'>{t('breederlang1.a9')}:<h6>{t('breederlang1.a10')}</h6></h5>
<h5>{t('breederlang1.b1')}:<h6>Husky</h6></h5>
</div>
<Link to="/contact" onClick={()=>{
    window.scroll({
        top:0,
        left:0
    })
}}><Button variant='danger'className='pawprint resp' size="lg"> {t('breederlang1.b5')} <img  width={20} src={photo3} alt="" /> </Button></Link>
            </Col>

            <Col md={4} sm={12}>


<div className=' mt-5 categories' style={{backgroundColor:"#fff",borderRadius:"20px"}}>
                <h2 className='ms-5'>{t('detailslang1.6')}</h2>
                <img width={255} className='photo0 d-block w-100' src={photo2} alt="" style={{borderRadius:"20px"}}/>
                <p className='ms-4 my-2'>{t('detailslang1.7')}</p>
                <i className="fa-solid fa-calendar ms-4" style={{color:"#F04336"}}></i> <span>May 29, 2022</span>
        <img  className='photo0 mt-4 d-block w-100' src={photo5} alt="" style={{borderRadius:"20px"}}/>
        <p className='ms-4 my-2'>{t('detailslang1.7')}</p>
        <i className="fa-solid fa-calendar ms-4" style={{color:"#F04336"}}></i> <span>May 2, 2022</span>
            </div>
<div className="subscribe mt-5 ">
<img src={photo4} className='d-block w-100' alt="" />
<h4>{t('breederlang1.b2')}</h4>
<h6>{t('breederlang1.b3')}</h6>
<InputGroup className="mt-3"> 
    <Form.Control className='enterform'
      placeholder=" Email"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
  </InputGroup>
  <div className="d-grid gap-2">
  <Button variant="danger" size="lg" className='my-3 '>
  {t('changelang3.2')}   </Button></div>
</div>
            </Col>
        </Row>
    </Container>
</div>

   </>
  )
}
export default Homedetails