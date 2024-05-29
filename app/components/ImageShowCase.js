import React from 'react'
import Image from 'next/image'

function ImageShowCase(props) {
  return (
    <div className="flex justify-center items-center bg-[#f9f9f9] p-6 rounded-2xl">
        <Image src={props.link} alt="projectImage"/>
    </div>
  )
}

export default ImageShowCase