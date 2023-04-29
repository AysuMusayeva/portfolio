import img1 from '../images/product10.jpg'
import img2 from '../images/product11.jpg'

interface shopType{
    img:any,
    title:string,
    desc:string,
    price:any
}
const shoptwo:shopType[]=[
{
    img:img1,
    title:'PET BALL',
    desc:'Squeaky Dog',
    price:49.00
},
{
    img:img2,
    title:'DOG TOY’S',
    desc:'Yoda Carriage',
    price:29.00
}
]
export default shoptwo