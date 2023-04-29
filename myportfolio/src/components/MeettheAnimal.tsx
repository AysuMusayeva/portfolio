import React, { useContext } from 'react'
import { Container, Row } from 'react-bootstrap'
import card from '../data/card'
import SingleProduct from './SingleProduct'
import photo1 from '../images/pawprint.png'
import { connect } from 'react-redux'
import { MovieContext } from '../context/MovieContext'
import { useTranslation } from 'react-i18next'
// import photo2 from '../images/img3.png'

interface cardType{

  img:any,
  title:string,
  desc:string,
  id:string,
}
const MeettheAnimal = () => {
  const [t,i18n]=useTranslation();
  const [movies,setMovies] = useContext<any>(MovieContext);
  return (
<>
<div className='meetanimal '>
<Container className='meetanimal'>
<div className='text-center '>
<img width={30} src={photo1} alt="" className='animate__animated animate__swing animate__infinite	infinite'data-aos="fade-up"
     data-aos-duration="1000"/>
<h4 data-aos="fade-up"
     data-aos-duration="1000"  data-aos-delay="50"> {t("changelang.0")}</h4>
<h1 className='animalpuppie' data-aos="fade-up"
     data-aos-duration="1000"  data-aos-delay="150">{t("changelang.1")}</h1>
{/* <span className='animalpuppie' data-aos="fade-up"
     data-aos-duration="3000"  >{t("entertext2.2")}</span> */}
</div>
  <Row className='g-5'>
  {movies.map((item:cardType,i:any)=>{
  return <SingleProduct id={item.id} key={item.id} img={item.img} title={item.title} desc={item.desc}/>
})}
  </Row>
  {/* <img  src={photo2} alt="" className='cloud' /> */}
</Container>
</div>
</>
  )
}
export default MeettheAnimal