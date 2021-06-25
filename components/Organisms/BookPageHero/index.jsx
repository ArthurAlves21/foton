import React from 'react';
import BookMain from '../../Items/Books/BookMain';
import {Container, Background} from './styles.js'
import OvalDarkBlue from '../../Items/Images/OvalDarkBlue/index'
import OvalDashed from '../../Items/Images/OvalDashed/index'
import OvalEmpty from '../../Items/Images/OvalEmpty/index'
import OvalPink from '../../Items/Images/OvalPink/index'
import Link from 'next/link'

function BookPageHero() {
  return (
    <>
    <Container>
      <Background>
       <Link href="/"><button style={{float: 'left', marginTop:"50px", marginLeft:"30px", border: "0px", fontWeight:"600", fontSize:"20px", cursor: "pointer", backgroundColor:"transparent"}}>←</button></Link>
        <img className="ball" src="/images/Oval.png"/>
        <OvalDarkBlue />
        <OvalDashed />
        <OvalEmpty />
        <OvalPink />
       <BookMain />
      </Background>
    </Container>
    </> 
  );
}

export default BookPageHero;