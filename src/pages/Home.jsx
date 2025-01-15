// eslint-disable-next-line no-unused-vars
import React from 'react'
import SideBar from '../components/SideBar'

import { MainTab2 } from '../components/MainTab2'

function Home() {
  return (
    <>
    <div className='flex'>
            <SideBar/>
            <MainTab2/>
    </div>
    </>
  )
}

export default Home