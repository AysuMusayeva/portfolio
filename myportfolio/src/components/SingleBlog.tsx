// import React from "react";
// import { Col } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import { Link } from "react-router-dom";

// const SingleBlog = (props:any) => {
//   return (
//     <Col sm={6} md={4}>
//       <Card>
//         <Card.Img variant="top" src={props.photo} />
//         <Card.Body>
//           <Card.Title>{props.title}</Card.Title>
//           <Card.Text>
//            {props.desc.substring(0,30)}...
//           </Card.Text>
//          <Link to={`/blogs/${props.id}`}><Button variant="primary">Read more</Button></Link>
//         </Card.Body>
//       </Card>
//     </Col>
//   );
// };

// export default SingleBlog;
import React from 'react'
import { Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
interface propType{
    photo:string,
    title:string,
    desc:string
    desc2:string,
    id:number
}
const SingleBlog = ({photo,title,desc,desc2,id}:propType) => {
  return (
<Col md={6}>
<Card className='singleshop mb-3'data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
      <Card.Img variant="top" src={photo} className='blogsimage'/>
      <Card.Body>
        <Card.Title>  <div  className='adoption my-3'>
            <i className="fa-regular fa-bookmark"></i> <span>Siberian</span> / <i className="fa-solid fa-user"></i>  <span>yeadhhb</span> / <i className="fa-solid fa-bell"></i>  <span> May 2,2022</span>
            </div></Card.Title>
        <Card.Text>
        {title.substring(0,30)}...
        </Card.Text>
        {/* <Card.Text>  <p>{desc1.substring(0,100)}...</p></Card.Text> */}
      <Link  to={`/blog/${id}`} onClick={()=>{
                    window.scroll({
                        top: 0,
                        left: 0,
                        // behavior: "smooth",
                      });
                   }}>  <Button variant="danger" className='resp'>Read more</Button></Link>
      </Card.Body>
    </Card>
</Col>
  )
}

export default SingleBlog