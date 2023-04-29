import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
const BlogForm = ({blogSubmit,editblog}:any) => {
    const [t,i18n]=useTranslation();
    const [formimg,setFormimg] = useState(editblog ? editblog.img : "");
    const [formtitle,setFormtitle] = useState(editblog ? editblog.title : "");
    const [formdesc,setFormdesc] = useState(editblog ? editblog.desc : "");
    const formSubmit=(e:any)=>{
        e.preventDefault();
        if (!formimg || !formtitle || !formdesc) {
                alert('plase, fill input');
        }else{
            blogSubmit({
                img:formimg,
                title:formtitle,
                desc:formdesc
            })
        }
    }
  return (
 <div className="d-flex align-item-center justify-content-center flex-cloumn ">
        <form className='col-6' onSubmit={formSubmit}>
        <div className="mb-3">
            <label className="form-label logintitle">{t('cartlang.1')}</label>
            <input onChange={(e)=>{setFormimg(e.target.value)}} value={formimg}  className="form-control loginform"  />
        </div>
        <div className="mb-3">
            <label  className="form-label logintitle">{t('cartlang.2')}</label>
            <input onChange={(e)=>{setFormtitle(e.target.value)}} value={formtitle}  className="form-control loginform"  />
        </div>
        <div className="mb-3">
            <label  className="form-label logintitle">{t('dash.4')}</label>
            <textarea onChange={(e)=>{setFormdesc(e.target.value)}} value={formdesc}  className="form-control loginform"  ></textarea>
        </div>
       
        <button type="submit" className="btn btn-danger">{t('dash.3')}</button>
        </form>
 </div>
  )
}

export default BlogForm

