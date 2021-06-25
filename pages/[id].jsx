import React, {useState, useEffect} from 'react';
import TemplateBookPage from '../components/Templates/TemplateBookPage';
import TemplateError from '../components/Templates/TemplateError';
import axios from 'axios';
import {BookContext} from '../Context/BookContext'

import Head from 'next/head';

export function Book({data}) {
if(!data){

  let thumbnail = '/bookcover.jpg';
  let title = 'book';
  let description = 'this book is a book';
  let author = 'John Doe';
  let subtitle = '';

  return(
    <>
    <Head>
          <title>Foton {title}</title>
          <meta name="description" content={description} ></meta>
          <meta property="og:title" content={title} ></meta>
          <meta property="og:description" content={description}></meta>
          <meta property="og:image" content={thumbnail}></meta>
          <meta property="og:image:width" content="800"></meta>
          <meta property="og:image:height" content="600"></meta>
          <meta property="og:type" content="website"></meta>
        </Head>
    <BookContext.Provider value={{title, subtitle, description, thumbnail, author}}>
    <TemplateBookPage />
    </BookContext.Provider>
    </>
  )
  }else{
    let title = 'book';
    let thumbnail = '/bookcover.jpg';
    let description = 'this book is a book';
    let author = 'John Doe';
    let subtitle = '';
    try{
      thumbnail = data.volumeInfo.imageLinks.thumbnail
    }catch(e){
      thumbnail = '/bookcover.jpg';
    }
    try{
      title = data.volumeInfo.title
    }catch(e){
      title = 'book'
    }
    try{
      description = data.volumeInfo.description
    }catch(e){
      description = 'Book'
    }
    try{
      author = data.volumeInfo.authors[0];
    }catch(e){
      author = 'John Doe';
    }
    try{
      subtitle = data.volumeInfo.subtitle
    }catch(e){
      subtitle = '';
    }
      return (
        <>
        <Head>
          <title>Foton {title}</title>
          <meta name="description" content={description} ></meta>
          <meta property="og:title" content={title} ></meta>
          <meta property="og:description" content={description}></meta>
          <meta property="og:image" content={thumbnail}></meta>
          <meta property="og:image:width" content="800"></meta>
          <meta property="og:image:height" content="600"></meta>
          <meta property="og:type" content="website"></meta>
        </Head>
        <BookContext.Provider value={{title, subtitle, description, thumbnail, author}}>
        <TemplateBookPage  />
        </BookContext.Provider>
        </>
      )
    
  }
  
}

export default Book;

Book.getInitialProps = async ({ query }) => {
    const {id} = query;

    if(id.length > 14){
      const res = await fetch(`https://foton-book-drab.vercel.app/api/${id}`)
      const json = await res.json()
      return{
        data: json.items[0]
      }
    }
    if(id.length < 13){
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyA_ovTDxtE_uf7ChrO7gyhrrIsOm0QQ-D0`)
    const json = await res.json()
    return{
      data: json
    }
  }
}