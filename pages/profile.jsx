import React, {useEffect, useState} from 'react'

import Head from 'next/head'
import TemplateUserPage from '../components/Templates/TemplateUserPage/index';
import SearchForm from '../components/Organisms/Search/index';
import {SearchContext} from '../Context/SearchContext';

import axios from 'axios';

export default function Home() {
  const [data1, setData1] = useState([])
  const [search, setSearch] = useState("");

  useEffect(async () => {
    const result2 = await axios ("/api/books")
    setData1(result2.data.data)
  }, [])

  return (
    <>
      <Head>
        <title>Foton Bookfinder</title>
        <meta name="description" content="Bookfinder For Foton Tech" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchContext.Provider value={{search, setSearch, data1}}>
      <SearchForm greetings={'Your Uploads, '}/>
      {data1 ? <TemplateUserPage data1={data1} /> : <h1 style={{margin:'auto', textAlign:'center'}}>Nothing Found =(</h1>}
      </SearchContext.Provider>

    </>  
  )
}
