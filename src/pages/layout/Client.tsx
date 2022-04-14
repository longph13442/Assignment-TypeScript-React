import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../component/Footer'
import Header from '../../component/Header'
import HomePage from './HomePage'

type Props = {}

const Client = (props: Props) => {
  return (
    <div>
      <Header /> 
      <Outlet />
      <Footer />
    </div>
  )
}

export default Client