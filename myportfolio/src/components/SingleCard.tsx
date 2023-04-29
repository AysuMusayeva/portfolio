import React from 'react'
import { Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import photo1 from '../images/img4.png'
import { useTranslation } from 'react-i18next';
interface productsType {
    id:string,
    img:any,
    title:string,
    // title1:string,
    // desc:string
}
const SingleCard = ({img,title,id}
  :productsType) => {
    const [t,i18n]=useTranslation()
  return (
     <Col sm={6} md={4} className='g-4'>
     <Card  className='singleCardd my-5 ' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
     <Card.Img variant="top" src={img} className='d-block w-100 imgnews'/>
      <Card.Body className='cardbody'>
      <Card.Title ><p className='mt-3 animalpuppie'><i className="fa-regular fa-bell"></i>May 20,2022</p></Card.Title>
        <Card.Title ><h5 className='mt-3'>{title}</h5></Card.Title>
        <Card.Text>
       <p className='mt-4 animalpuppie'>{t('changelang2.2')}</p>
        </Card.Text>
        {/* <Button variant='danger' className="button">
         <div className="d-flex align-items-center justify-content-between"> <span>Read more</span> <img className="mx-2" width={20} src={photo1} alt="" /></div>
        </Button> */}
      </Card.Body>
    </Card>
    </Col>
  )
}
export default SingleCard