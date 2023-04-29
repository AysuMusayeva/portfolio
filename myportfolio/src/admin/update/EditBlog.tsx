import React from 'react'
import { Col,Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { editBLog, removeBlog } from '../../actions/blogAction'
import BlogForm from '../BlogForm'
import { useTranslation } from 'react-i18next'

const EditBlog = (props:any) => {
  const [t,i18n]=useTranslation()
  const navigate = useNavigate();
  return (
    <div className='editblog'>
    <h1 className='text-center my-5 logintitle'>{t('dash.2')}</h1>
   <div className="d-flex align-items-center justify-content-center flex-column">
   <Col md={6}>
    <BlogForm editblog={props.pvalue}
    blogSubmit={(a:any)=>{
      props.dispatch(editBLog(props.pvalue.id,a))
      navigate('/dashboard')
    }}
    />
      <Button onClick={()=>{
          props.dispatch(removeBlog({id:props.pvalue.id}))
      navigate('/dashboard')
          
      }} variant="danger" type="submit" className='mt-4 ms-5 blogdel'>
          <i className="fa-solid fa-trash-can"></i>
        </Button>
    </Col>
   </div>
  </div>
  )
}
const MapStateToProps =(state:any)=>{
  
  const link = window.location.pathname;
  const mainpath = link.slice(6,99);
  
  
  return{
    pvalue: state.find((b:any)=>b.id === mainpath)
  }
}

export default connect(MapStateToProps)(EditBlog)
