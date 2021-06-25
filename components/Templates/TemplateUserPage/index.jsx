import React, {useState, useEffect, useContext} from 'react';
import HomeBookTexts from '../../Organisms/HomeBookTexts';
import MenuHome from '../../Organisms/MenuHome';
import InfiniteScroll from 'react-infinite-scroller';
import { Container, Content } from './styles';
import { SearchContext } from '../../../Context/SearchContext'
import { GetBookTexts } from '../../../Context/GetBookTexts';

function TemplateHomePage(props) { 

  const {search, data1} = useContext(SearchContext)

const filtered =  props.data1.filter(item => {
  let lowerTitle = item.volumeInfo.title.toLowerCase()
  if(search){
    return lowerTitle.includes(search.toLowerCase())
  }else{
    return lowerTitle == lowerTitle
  }
})
   
useEffect(() => {
  console.log(search)
  console.log(filtered)
}, [search])

return (
  <> 
    <Container>
    
    <Content>

    {filtered.map((item, i) => {
      let thumbnail = '/bookcover.jpg';
      let author = 'John Doe';
      let title = 'Original Book';
      let id = 'wJ7ijwEACAAJ';
        
      try{
        thumbnail = item.volumeInfo.imageLinks.thumbnail;
      }catch(e){
        thumbnail = '/bookcover.jpg';
      }
      try{
        author = item.volumeInfo.authors[0];
      }catch(e){
        author = 'John Doe';
      }
      try{
        title = item.volumeInfo.title;
      }catch(e){
        title = 'Original Book';
      }
      try{
        id= item._id
      }catch(e){
        id = 'wJ7ijwEACAAJ';
      }
      
      return(
        <>
        <GetBookTexts.Provider value={{title, author, thumbnail, id}}>
        <HomeBookTexts/>
        </GetBookTexts.Provider>
        </>
      )
    })}
    
    </Content>
  </Container> 
  <MenuHome />
  </>
  );
}

export default TemplateHomePage;