import photo1 from '../images/zz.jpg'
import photo2 from '../images/gg.jpg'
import photo3 from '../images/sds.jpg'
import photo4 from '../images/sf.jpg'
import photo5 from '../images/m.jpg'
interface cardType{
    img:any,
    title:string,
    id:string
}
const adoption:cardType[]=[
    {
      id:"1",
img:photo1,
title:'Mister Tartosh',

    },
  {
    id:"2",
    img:photo2,
    title:'Charlie Beki',

  },
  {
    id:"3",
    img:photo3,
    title:'Alessia Max',
  
  },
  {
    id:"4",
    img:photo4,
    title:'Canadian Box',
  
  },
  {
    id:"5",
    img:photo5,
    title:'Entertainment',
  
  }
]
export default adoption