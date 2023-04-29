import img1 from '../images/blog_thumb01.jpg'
import img2 from '../images/blog_thumb03.jpg'
import img3 from '../images/blog_thumb02.jpg'
interface productsType {
    id:string,
img:any,
    title:string,
    // desc:string
}
const product:productsType[]=[
    {
        id:"1",
        img:img1,
        title:'Online Pet Everything Your Pet',
        // desc:'The domestic dog is a doiated dendant of the wolf. The dog derived'
    },  {
        id:"2",
        img:img2,
        title:'Pet Needs Special Food Like Wolf',
     
        // desc:'The domestic dog is a doiated dendant of the wolf. The dog derived'
    },  {
        id:"3",
        img:img3,
        title:'Special Grades For Carry Home',
       
        // desc:'The domestic dog is a doiated dendant of the wolf. The dog derived'
    }
]
export default product