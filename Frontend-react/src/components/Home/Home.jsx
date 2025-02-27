import React, { Fragment } from 'react'
import NavBar from './Navbar'
import Banner from './Banner'
import { styled } from '@mui/material'

const Component = styled('Box')`
padding:"10px";
background :#F2F2F2;
`;


const Home = () => {
  return (
    <>
    <NavBar/>

    <Component>
    <Banner/>
    </Component>
    </>
      
  )
}

export default Home
