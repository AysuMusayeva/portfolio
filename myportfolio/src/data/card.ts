import photo1 from '../images/adoption_04.jpg'
import photo2 from '../images/adoption_05.jpg'
import photo3 from '../images/adoption_06.jpg'
import photo4 from '../images/adoption_03.jpg'
import photo5 from '../images/adoption_02.jpg'
import photo6 from '../images/adoption_01.jpg'
interface cardType{
    img:any,
    title:string,
    id:string
}
const card:cardType[]=[
    {
      id:"1",
img:photo1,
title:'Shiba Inu'

    },
  {
    id:"2",
    img:photo2,
    title:'Havanese Lux',
  },
  {
    id:"3",
    img:photo3,
    title:'Rottweiler',
  
  },
  {
    id:"4",
    img:photo4,
    title:'Bloodhound',

  },
  {
    id:"5",
    img:photo5,
    title:'Brittany Fox',
   
  },
  {
    id:"6",
    img:photo6,
    title:'Mister Bulldog',

  },
// {
//   id:1,
//   img:"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
//   title:"Inception",
//   price:20
// },
// {
//   id:2,
//   img:"https://upload.wikimedia.org/wikipedia/en/5/50/Departed234.jpg",
//   title:"the departed",
//   price:18
// },
// {
//   id:3,
//   img:"https://m.media-amazon.com/images/M/MV5BOTEwYTkzMTMtODEzNC00YWM2LTgxNDMtZWNkNTQzNDVjMWQ2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMDY4NTQ1MA@@._V1_FMjpg_UX1000_.jpg",
//   title:"The invisible guest",
//   price:22
// },
// {
//   id:4,
//   img:"https://m.media-amazon.com/images/M/MV5BNDMwNjAzNzYwOF5BMl5BanBnXkFtZTcwMDY5NzcyMw@@._V1_.jpg",
//   title:"Twilight",
//   price:25
// },

]
export default card