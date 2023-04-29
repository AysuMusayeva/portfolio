import React from 'react'
import { Provider } from 'react-redux'
import { addBlog } from './actions/blogAction'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import photo2 from './images/blog_thumb01.jpg'
import photo3 from './images/blog_thumb03.jpg'
import photo4 from './images/blog_thumb04.jpg'
import photo5 from './images/blog_thumb02.jpg'
import photo6 from './images/breeder_gallery03.jpg'



const store=configureStore()
store.subscribe(()=>{
  console.log(store.getState());
})

store.dispatch(addBlog({img:photo2,desc:'Adoption,Siberian',title:'Online pet everything your pet needs',desc1:'The domestic dog is a doiated dendant of the wolf. The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dog’s nearest living relative. The dog was the first species to be domesticated, by hunter–gatherers. These will include the core vaccines, which are administered in a series of three: at [...]',desc2:'May 29, 2022'}))
store.dispatch(addBlog({img:photo3,desc:'German Sherped',title:'Pet needs special food like human foods',desc1:'The domestic dog is a doiated dendant of the wolf. The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dog’s nearest living relative. The dog was the first species to be domesticated, by hunter–gatherers. These will include the core vaccines, which are administered in a series of three: at [...]',desc2:'June 2, 2022'}))
store.dispatch(addBlog({img:photo4,desc:'French Bulldog',title:'Special grades for carry home food',desc1:'The domestic dog is a doiated dendant of the wolf. The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dog’s nearest living relative. The dog was the first species to be domesticated, by hunter–gatherers. These will include the core vaccines, which are administered in a series of three: at [...]',desc2:'September 11, 2022'}))
store.dispatch(addBlog({img:photo5,desc:'Breed,Siberian',title:'Dog to begin developing immunity vaccine',desc1:'The domestic dog is a doiated dendant of the wolf. The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dog’s nearest living relative. The dog was the first species to be domesticated, by hunter–gatherers. These will include the core vaccines, which are administered in a series of three: at [...]',desc2:'October 8, 2022'}))
store.dispatch(addBlog({img:photo6,desc:'Adoption,Siberian',title:'Pet needs special food like human foods',desc1:'The domestic dog is a doiated dendant of the wolf. The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dog’s nearest living relative. The dog was the first species to be domesticated, by hunter–gatherers. These will include the core vaccines, which are administered in a series of three: at [...]',desc2:'April 18, 2022'}))
const App = () => {
  return (
<Provider store={store}>
<AppRouter />
</Provider>
  )
}

export default App