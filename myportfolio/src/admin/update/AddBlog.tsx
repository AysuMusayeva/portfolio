import React from 'react'
import { Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addBlog } from '../../actions/blogAction'
import BlogForm from '../BlogForm'
import { useTranslation } from 'react-i18next'

const AddBlog = (props:any) => {
  const [t,i18n]=useTranslation()
  const navigate = useNavigate();
  return (
    <div className='addblog'>
      <h1 className='text-center my-5 logintitle'>{t('dash.1')}</h1>
     <div className="d-flex align-items-center justify-content-center flex-column">
     <Col md={6}>
      <BlogForm blogSubmit={(item:any)=>{
        props.dispatch(addBlog(item));
        navigate('/dashboard')
      }}/>
      </Col>
     </div>
    </div>
  )
}

export default connect()(AddBlog)
