import React from 'react'
import logo from './../images/logo.png'

export default function Homepage() {
  return (
    <>
    <div className='text-white font-bold text-2xl'>
      Welcome to WAP: Web Advertising For Professionals
    </div>
    <div className="grid grid-cols-2 h-9-10">
      <div className="grid justify-items-center flex flex-wrap content-center">
        <img src={logo} className="w-3/6 justify-self-auto rounded"/>
      </div>
      <div className="col-start-2 grid grid-rows-6 mr-40">
        <div className="row-start-2 row-span-3 bg-gray-400 bg-opacity-40 rounded grid grid-rows-3 text-white">
          <div className="mt-4">WAP is a web space created for local businesses and professionals to advertise their products or services for free. Users are able to search through posts made by others by clicking the search button above.</div>
          <div></div>
          <div>If you have any questions please contact us at WAP@webadvertisingprofessionals.com</div>
        </div>
      </div>
    </div>
    </>
  )
}
