import React, { useContext, useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { useLocation } from 'react-router-dom';
const Dashboard = (props:any) => {
  const [t,i18n]=useTranslation();
  const [users,setUsers] = useContext<any>(UserContext);
  const [admin,setAdmin]=useState(false)
  const location=useLocation()
  const navigate=useNavigate()

  return (
  <>
  
 <Container className='dashboard'>
 <h1 className='text-center my-5'>{t('dash.0')}</h1>
  <Table  bordered className='text-center'>
    <thead>
      <tr>
        <th></th>
        <th>{t('cartlang.1')}</th>
        <th>{t('cartlang.2')}</th>
        <th>{t('dash.4')}</th>
        <th>{t('dash.2')}</th>
      </tr>
    </thead>
    <tbody>
        {props.pvalue.map((item:any,i:number)=>(
    <tr key={i}>
        <td>{i+1}</td>
        <td><img width={50} src={item.img} alt="" /></td>
        <td>{item.title}</td>
        <td>{item.desc.substring(0,30)}</td>
        <td><Link to={`/edit/${item.id}`}><Button variant='warning'>{t('dash.2')}</Button></Link></td>
      </tr>
        ))}
    
      
    </tbody>
  </Table>
  <Link to='/add'><Button  className="mb-5" variant='success'>{t('dash.1')}</Button></Link>
 </Container>
 {/* {users ? <Navigate to="/dashboard" state={{prevUrl:location.pathname}}/> : <Navigate to="/login" state={{prevUrl:location.pathname}} />}  */}
  </>
  )
}
const mapStateToProps =(state:any)=>{
    return{
        pvalue:state
    }
}

export default connect(mapStateToProps)(Dashboard)
