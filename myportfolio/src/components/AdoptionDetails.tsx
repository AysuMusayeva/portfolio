import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { PuppieContext } from '../context/PuppieContext';

const AdoptionDetails = () => {
    const [puppie,setPuppie] = useContext<any>(PuppieContext)
    const {id} = useParams();
    const puppiedetails = puppie.find((p:any)=>p.id ===id)
  return (
<div className="container col-xxl-8 px-4 py-5">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
      <img src={puppiedetails.img} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
    </div>
    <div className="col-lg-6">
      <h1 className="display-5 fw-bold lh-1 mb-3">{puppiedetails.title}</h1>
      <p className="lead">Price:{puppiedetails.desc}</p>
    </div>
  </div>
</div>

  )
}

export default AdoptionDetails