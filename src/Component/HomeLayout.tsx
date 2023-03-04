import React, { useState, useEffect } from 'react'
import Header from './Header';
import { Sidebar } from './SideBar';

type Props = {
    list: Array<{key: string; title: string}>;
    children : any;
    setSection : any
  }
  
  
const HomeLayout: React.FunctionComponent<Props> = ({list,children,setSection}) => {
  const handleScroll = (val:string) => {
    const element = document.getElementById(val);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <div className="d-flex w-100">
            <Sidebar list={list} setSection={setSection} handleScroll={handleScroll} />
            <div className='w-100'>
              <div style={{ height  :"20%"}}>
                <Header />
              </div>
              <div style={{height  :"80%"}}>
                {children}
              </div>
            </div>
        </div>

  )
}

export default HomeLayout