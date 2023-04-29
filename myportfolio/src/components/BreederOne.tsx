import React, { useContext } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import photo1 from '../images/breadcrumb_bg.jpg'
import photo2 from '../images/breeder_details.jpg'
import photo3 from '../images/w_pawprint.png'
import photo4 from '../images/sn_icon.png'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link, useParams } from 'react-router-dom'
import { MovieContext } from '../context/MovieContext';
import { useTranslation } from 'react-i18next'
const BreederOne = () => {
  const [t,i18n]=useTranslation()
  const [movies,setMovies] = useContext<any>(MovieContext)
  const {id} = useParams();
  const moviedetails = movies.find((p:any)=>p.id ===id)
  return (
  <>
   <div className="breder">
    <img width='100%' height={350} src={photo1} alt="" />
    <Container className='blog'><Button className='mb-3 btn' variant='danger' size='lg'>{t('breederlang1.0')}</Button> <br />
    <span className='home'>{t('entertext.0')} | {t('breederlang1.0')} | </span> <span className='span'>Bernes Mountain</span></Container>
    </div>

    <div className="breederOne">
        <Container>
            <Row>
                <Col md={8} sm={12} className='boxOne my-5' data-aos="fade-up"
     data-aos-duration="1000">
                   <h3 > Bernes Mountain {t('breederlang1.b4')}</h3>
                   <p>{t('breederlang1.2')}</p>
                   <img className='breederimg d-block w-100' src={photo2} alt=""  />
<h3 className='mt-3'>Bernes Mountain Bio</h3>
<p>{t('breederlang1.3')}</p>
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
<Link to='/contact' onClick={()=>{
                    window.scroll({
                        top: 0,
                        left: 0,
                        // behavior: "smooth",
                      });
                   }}><Button variant='danger'className='pawprint resp' size="lg"> {t('breederlang1.b5')} <img  width={20} src={photo3} alt="" /> </Button></Link>
                </Col>

                <Col md={4} sm={12}>


<div className="subscribe mt-5" data-aos="fade-up"
     data-aos-duration="1000">
  <img src={photo4} alt="" />
  <h4>{t('breederlang1.b2')}</h4>
  <h6>{t('breederlang1.b3')}</h6>
  <InputGroup className="mt-3"> 
        <Form.Control className='enterform'
          placeholder="Email"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
      </InputGroup>
      <div className="d-grid gap-2">
      <Button variant="danger" size="lg" className='my-3 resp'>
      {t('changelang3.2')}    </Button></div>
</div>
                </Col>
            </Row>
        </Container>
    </div>
  </>
  )
}

export default BreederOne